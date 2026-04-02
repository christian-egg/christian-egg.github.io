## Overview
This project modernizes my personal website with Next.js App Router while keeping deployment simple through static export.

## Problem
The previous site made content updates and layout evolution harder over time, especially for sections that should share visual patterns.

## Solution
I introduced a reusable page shell, semantic design tokens, and content modules so pages can scale without repeating structure or hardcoded styling decisions.

## Tech Stack Notes
The site uses static export mode for GitHub Pages compatibility and avoids server-only features so everything builds to plain static assets.

## Highlights
- Built a shared sidebar + main content shell for consistent navigation.
- Established semantic color tokens to support easy palette swaps.
- Configured GitHub Actions to build and deploy the exported site.
