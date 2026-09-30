// SPDX license handling. "proprietary" is the only non-SPDX value allowed.
import parse from 'spdx-expression-parse';
import list from 'spdx-license-list';

type Node = { license?: string; left?: Node; right?: Node; conjunction?: 'and' | 'or' };

function ids(node: Node): string[] {
  if (node.license) return [node.license];
  return [...ids(node.left!), ...ids(node.right!)];
}

export function parseLicense(value: string): Node | null {
  if (value === 'proprietary') return { license: 'proprietary' };
  try {
    return parse(value) as Node;
  } catch {
    return null;
  }
}

/** Open source if any license the user may choose is OSI-approved. */
export function isOpenSource(value: string): boolean {
  const node = parseLicense(value);
  if (!node || value === 'proprietary') return false;
  const check = (n: Node): boolean => {
    if (n.license) return Boolean((list as Record<string, { osiApproved: boolean }>)[n.license.replace(/\+$/, '')]?.osiApproved);
    return n.conjunction === 'or' ? check(n.left!) || check(n.right!) : check(n.left!) && check(n.right!);
  };
  return check(node);
}

export function licenseIds(value: string): string[] {
  const node = parseLicense(value);
  return node ? ids(node) : [];
}
