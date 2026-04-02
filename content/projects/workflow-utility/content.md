## Overview
Workflow Utility is a local-first CLI intended to remove repeated setup work when starting projects or running common maintenance tasks.

## Problem
Project bootstrapping and routine scripts often drift between repositories, which increases friction and introduces small but costly inconsistencies.

## Solution
The utility wraps common setup flows in declarative commands with preset templates, default checks, and optional prompts for project-specific details.

## Tech Stack Notes
TypeScript keeps command contracts explicit while Node.js APIs handle file operations and shell integration across development environments.

## Highlights
- Designing command interfaces around reusable templates.
- Adding validation so generated files stay predictable.
- Keeping outputs deterministic for easier CI integration later.
