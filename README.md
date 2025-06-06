# Valentia GP Clinic Website

This repository contains the source code for the Valentia GP Clinic website built with **Next.js** and **TypeScript**. The project uses Tailwind CSS and Shadcn UI components for styling and layout.

## Development

1. Install dependencies using [pnpm](https://pnpm.io/):
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Open `http://localhost:3000` in your browser to view the site.

## Production Build

To create a production build and start the server:

```bash
pnpm build
pnpm start
```

## Project Structure

- **app/** – Next.js app directory containing pages and global styles.
- **components/** – Reusable UI components and layout pieces.
- **public/** – Static assets such as images and the sitemap/robots.txt.
- **styles/** – Additional global CSS (duplicated with `app/globals.css`).

## License

See [LICENSE](LICENSE) for licensing details.
