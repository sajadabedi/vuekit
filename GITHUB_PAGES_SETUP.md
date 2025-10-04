# GitHub Pages Setup for Storybook

This guide explains how to set up GitHub Pages for your Vue component library's Storybook.

## What's Already Configured

✅ **GitHub Actions Workflow** (`.github/workflows/storybook.yml`)

- Automatically builds and deploys Storybook on every push to `main` branch
- Uses pnpm for dependency management
- Caches dependencies for faster builds
- Deploys to GitHub Pages using the official GitHub Actions

✅ **Storybook Configuration** (`.storybook/main.ts`)

- Configured for GitHub Pages deployment
- Output directory set to `storybook-static`
- Build stories JSON enabled for better performance

✅ **Build Scripts** (`package.json`)

- `build-storybook` script already configured
- Uses Storybook's built-in build process

✅ **GitHub Pages Files**

- `.nojekyll` file created to prevent Jekyll processing
- Ensures all files are served correctly

## Setup Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### 2. Repository Permissions

Make sure your repository has the following permissions enabled:

- **Actions**: Read and write permissions
- **Pages**: Write permissions
- **Contents**: Read permissions

### 3. Deploy Your Storybook

Once you push your code to GitHub:

1. **Push to main branch**:

   ```bash
   git add .
   git commit -m "Add GitHub Pages setup for Storybook"
   git push origin main
   ```

2. **Check the Actions tab** in your GitHub repository to see the deployment progress

3. **Access your Storybook** at: `https://[your-username].github.io/[repository-name]`

## Local Development

### Running Storybook Locally

```bash
pnpm run dev
```

This starts Storybook on `http://localhost:6006`

### Building Storybook Locally

```bash
pnpm run build-storybook
```

This creates a `storybook-static` directory with the built files.

## Workflow Details

The GitHub Actions workflow:

1. **Triggers** on pushes to `main` branch and pull requests
2. **Builds** the Storybook using pnpm
3. **Caches** dependencies for faster subsequent builds
4. **Deploys** the built files to GitHub Pages
5. **Uses** the official GitHub Pages deployment action

## Troubleshooting

### Common Issues

1. **Build fails**: Check the Actions tab for detailed error logs
2. **Pages not updating**: Ensure the workflow completed successfully
3. **404 errors**: Verify the repository name in the URL matches exactly

### Manual Deployment

If you need to manually trigger a deployment:

1. Go to **Actions** tab in your repository
2. Select the "Deploy Storybook to GitHub Pages" workflow
3. Click **Run workflow**

## Customization

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `storybook-static` directory
2. Configure your domain in GitHub Pages settings

### Base Path

If your repository is not at the root level, update the Storybook configuration in `.storybook/main.ts`:

```typescript
const config: StorybookConfig = {
  // ... other config
  outputDir: 'storybook-static',
  features: {
    buildStoriesJson: true
  }
  // Add this if your repo is in a subdirectory
  // managerHead: (head) => `<base href="/your-repo-name/">`
};
```

## File Structure

```
.github/
  workflows/
    storybook.yml          # GitHub Actions workflow
.storybook/
  main.ts                  # Storybook configuration
  preview.ts               # Storybook preview config
.nojekyll                  # Prevents Jekyll processing
storybook-static/          # Built Storybook (generated)
  index.html               # Main Storybook page
  assets/                  # CSS, JS, and other assets
  # ... other built files
```

## Next Steps

1. Push your changes to GitHub
2. Enable GitHub Pages in repository settings
3. Wait for the first deployment to complete
4. Share your Storybook URL with your team!

Your Storybook will be automatically updated every time you push changes to the `main` branch.
