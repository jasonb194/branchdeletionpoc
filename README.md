# Branch-Based Studio Deployment POC

A proof of concept demonstrating automatic Sanity Studio deployment and cleanup based on Git branches.

## What This Does

This project automatically:

- **🚀 Deploys a new Sanity Studio** when you push to any branch
- **🗑️ Removes the Studio** when the branch is deleted (including after PR merges)

Each branch gets its own isolated Studio instance at a unique URL based on the branch name.

## How It Works

| Branch Name | Studio URL |
|-------------|------------|
| `main` | `branchdeletionpoc-main.sanity.studio` |
| `feature/new-design` | `branchdeletionpoc-feature-new-design.sanity.studio` |
| `fix/bug-123` | `branchdeletionpoc-fix-bug-123.sanity.studio` |

The GitHub Action workflow (`.github/workflows/studio-deploy.yml`) handles:

1. **On push**: Sanitizes the branch name → deploys to `branchdeletionpoc-{branch}.sanity.studio`
2. **On branch delete**: Undeploys the corresponding Studio

## Use Cases

This pattern is useful for:

- **Preview environments**: Give each feature branch its own Studio for testing
- **PR reviews**: Reviewers can access a dedicated Studio for the branch
- **Ephemeral environments**: Studios are automatically cleaned up when branches are deleted

## Limitations

- Sanity hostnames must start with a letter
- Branch names are sanitized (lowercased, special chars replaced with hyphens)
- Hostname length is limited, so very long branch names get truncated
