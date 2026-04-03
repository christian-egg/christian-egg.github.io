## Overview
This project modernizes my personal website with Next.js App Router while keeping deployment simple through static export. Developing this portfolio website was an excellent opportunity to show off my front-end development skills while creating a place to store my past projects.

## Problem
The previous site, which I made during my undergraduate years using JQuery, was very rudimentary, containing only basic information about myself and some links to other platforms. I realized that, if I wanted a clean portfolio website that I could maintain long-term, I needed an implementation with structure, reusable components, and a more modernized tech stack.

## Solution
Instead of restructuring my existing website, I basically rebuilt my website from the ground up using React/Next.js. I introduced a reusable page shell, semantic design tokens, and content modules so pages can scale without repeating structure or hardcoded styling decisions. In order to make project documentation simpler, projects were structured into modular components with their main body content rendered from markdown files.

## Tech Stack Notes
The site uses static export mode for GitHub Pages compatibility and avoids server-only features so everything builds to plain static assets.

## Highlights
- Built a shared sidebar + main content shell for consistent navigation.
- Established semantic color tokens to support easy palette swaps.
- Configured GitHub Actions to build and deploy the exported site.
