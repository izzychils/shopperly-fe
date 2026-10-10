# Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- Node.js 16+ installed
- npm or yarn package manager
- Git (for version control)

## Local Development

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- react & react-dom
- typescript
- vite & @vitejs/plugin-react
- lucide-react (icons)
- All necessary dev dependencies

### Step 2: Run Development Server

```bash
npm run dev
```

Your app will be available at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Step 4: Preview Production Build

```bash
npm run preview
```

Test your production build locally before deploying.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

**Or use Vercel Dashboard:**
- Connect your GitHub repository
- Select this project
- Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or use Netlify Dashboard:**
- Drag and drop the `dist` folder
- Or connect your Git repository

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Upload `dist` folder to S3 bucket

3. Configure S3 for static website hosting

4. (Optional) Set up CloudFront for CDN

5. Update bucket policy for public access

### Option 5: Docker

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Build and run:
```bash
docker build -t shopperly-website .
docker run -p 80:80 shopperly-website
```

### Option 6: Traditional Web Hosting

1. Build the project:
```bash
npm run build
```

2. Upload contents of `dist` folder to your web host via FTP/SFTP

3. Configure your web server to serve the files

## Environment Variables

If you need environment variables:

1. Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Shopperly
```

2. Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

3. Set environment variables in your deployment platform

## Performance Optimization

### Before Deployment

1. **Optimize Images**: Compress images in `/public`
2. **Code Splitting**: Already handled by Vite
3. **Tree Shaking**: Automatic with Vite
4. **Minification**: Built into production build

### After Deployment

1. **Enable Gzip/Brotli compression** on server
2. **Set up CDN** for static assets
3. **Configure caching headers**
4. **Enable HTTPS**

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (SPA)

If you get 404 errors on refresh, configure your server:

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Nginx**: Add to config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Vercel Analytics
- Performance monitoring tools

## Continuous Deployment

Set up CI/CD with GitHub Actions:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Custom Domain

1. Purchase domain from registrar
2. Add custom domain in deployment platform
3. Update DNS records:
   - Type: A or CNAME
   - Name: @ or www
   - Value: (provided by platform)
4. Wait for DNS propagation (24-48 hours)

---

Need help? Check the README.md for more information!
