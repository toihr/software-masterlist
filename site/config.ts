// Repository URL for "Edit on GitHub" and price history links.
// In GitHub Actions this is detected automatically.
export const REPO_URL =
  process.env.REPO_URL ||
  (process.env.GITHUB_REPOSITORY ? `https://github.com/${process.env.GITHUB_REPOSITORY}` : 'https://github.com/your-name/software-masterlist');
export const BRANCH = process.env.GITHUB_REF_NAME || 'main';
export const SITE_NAME = 'Software Masterlist';
