# kaur_jasdeep_ui_garden - Assignment 13

## Run Locally with Docker

1. Build the app:
   npm run build

2. Build the Docker image:
   docker build -t kaur_jasdeep_coding_assignment13 .

3. Run the container:
   docker run -p 8018:8018 kaur_jasdeep_coding_assignment13

4. Open in browser:
   http://localhost:8018

## Pre-commit Hooks (Husky)
Every commit automatically runs:
- Prettier format check
- ESLint lint check
- All Jest tests

If any check fails, the commit is blocked.

## GitHub Actions CI
On every push/pull request, GitHub Actions runs:
- Prettier check
- ESLint check
- All tests

Build status is reported on the GitHub repo.

## Demo: Breaking a commit
To test Husky is working, add a deliberate formatting error and try to commit:
   echo "const x=1" >> src/App.js
   git add .
   git commit -m "test"
   # Commit will be BLOCKED by Husky

## Fix formatting:
   npx prettier --write src/
   npx eslint src/ --fix
   git add .
   git commit -m "fixed formatting"
