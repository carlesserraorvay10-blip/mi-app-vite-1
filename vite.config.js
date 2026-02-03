import { defineConfig } from 'vite'

export default defineConfig(() => {
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
  const repoName = process.env.REPO_NAME

  return {
    plugins: [],
    base: isGitHubActions && repoName ? `/${repoName}/` : '/'
  }
})
