# GitHub Pages Deployment Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `happy_lips` (or your preferred name)
3. **DO NOT** initialize it with a README, .gitignore, or license
4. Copy the repository URL (e.g., `https://github.com/YOUR_USERNAME/happy_lips.git`)

## Step 2: Update package.json Homepage

Replace `YOUR_USERNAME` in `package.json` with your actual GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/happy_lips"
```

## Step 3: Install gh-pages and Deploy

Run these commands in your terminal:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add the remote repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/happy_lips.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **gh-pages** branch
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/happy_lips`

## Note

- The first deployment may take a few minutes
- After deployment, you can update the code and run `npm run deploy` again to update the live site
- Make sure to commit and push changes before deploying
