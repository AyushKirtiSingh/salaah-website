# Salaah — The Mentor Community

Website for Salaah, the mentor community at ABES Engineering College, Ghaziabad.

Live site: https://salaah-website.vercel.app

## Tech stack
React, Vite, plain CSS with variables, Lucide icons. No backend.

## Run locally
    npm install
    npm run dev

## Build
    npm run build
    npm run preview

## Project structure
- src/data.js holds the repeated content: initiatives, posters and links
- src/components has one file per page section
- src/index.css holds the design system and all styles
- public/images has the six official Salaah posters

## Design system
Colours, fonts and spacing are CSS variables at the top of src/index.css.
Cream, burgundy, peach and charcoal are proposed website colours inspired by the Salaah posters, not official brand codes.

## Accessibility
- Semantic landmarks and a skip link
- Keyboard-accessible mobile menu and poster modal (Escape closes it, focus returns to the poster)
- Visible focus styles and reduced-motion support

## Deployment
Deployed on Vercel from the main branch. Vercel detects Vite automatically: build command npm run build, output directory dist. Every push to main triggers a new deployment.
