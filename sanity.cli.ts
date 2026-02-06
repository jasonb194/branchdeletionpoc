import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'j7d4pgce',
    dataset: 'production'
  },
  // Use SANITY_STUDIO_HOSTNAME env var for branch-based deployments in CI/CD
  // Falls back to undefined for local development (will prompt for hostname)
  studioHost: process.env.SANITY_STUDIO_HOSTNAME,
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
