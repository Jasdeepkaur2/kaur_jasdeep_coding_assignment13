 UI Component Library - Assignment 13



## Tech Stack
- React 19 with TypeScript (TSX)
- Storybook 10
- ESLint + Prettier
- Husky pre-commit hooks
- GitHub Actions CI/CD
- Docker + Nginx



### Step 1 - Clone the repository
```bash
git clone https://github.com/Jasdeepkaur2/kaur_jasdeep_coding_assignment13.git kaur_jasdeep_ui_garden_build_checks
cd kaur_jasdeep_ui_garden_build_checks
```

### Step 2 - Install dependencies
```bash
npm install
npm install --save-dev typescript @types/react @types/react-dom @types/node @types/jest --legacy-peer-deps
```

### Step 3 - Install ESLint and Prettier
```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin@^5.62.0 @typescript-eslint/parser@^5.62.0 --legacy-peer-deps
```

### Step 4 - Install Husky and lint-staged
```bash
npm install --save-dev husky lint-staged --legacy-peer-deps
npx husky init
```

### Step 5 - Convert all components from JSX to TSX
```bash
for f in src/components/**/*.jsx; do mv "$f" "${f%.jsx}.tsx"; done
mv src/App.js src/App.tsx
mv src/index.js src/index.tsx
mv src/App.test.js src/App.test.tsx
```

### Step 6 - Run Prettier on all files
```bash
npx prettier --write "src/**/*.{js,jsx,ts,tsx,css}"
```

### Step 7 - Run ESLint
```bash
npx eslint "src/**/*.{ts,tsx}" --max-warnings=0
```

### Step 8 - Run Tests
```bash
CI=true npm test -- --watchAll=false
```

### Step 9 - Build production build
```bash
CI=false npm run build
```

## Configuration Files

### .eslintrc.json
Configures ESLint with TypeScript and Prettier support.

### .prettierrc
Configures Prettier code formatting rules:
- Double quotes
- Semicolons enabled
- 2 space tabs
- 80 character print width

### tsconfig.json
TypeScript configuration with strict mode enabled and Jest types included.

### .husky/pre-commit
Pre-commit hook that runs automatically before every git commit:
1. Prettier check - blocks commit if formatting is wrong
2. ESLint check - blocks commit if lint errors exist
3. Jest tests - blocks commit if any test fails

## Husky Pre-Commit Hooks
Every commit automatically runs three checks:
- **Prettier**: Ensures consistent code formatting
- **ESLint**: Catches code quality issues
- **Tests**: Ensures all Jest tests pass

If any check fails, the commit is blocked automatically.

### Demo - Breaking a commit (Husky in action)
```bash
echo "const x=1" >> src/App.tsx
git add .
git commit -m "bad code"
# Commit will be BLOCKED by Husky - Prettier check fails
```

### Demo - Fixing and committing
```bash
npx prettier --write src/
git add .
git commit -m "fixed code"
# Commit succeeds - all checks pass
```

## GitHub Actions CI/CD
A GitHub Actions workflow runs on every push and pull request.
It runs the same three checks as Husky:
1. Prettier check
2. ESLint check
3. Jest tests

If any check fails, GitHub marks the build as failed and notifies the developer.
This ensures that even if Husky pre-commit hooks are bypassed locally, the same checks run on GitHub.

Workflow file location: `.github/workflows/ci.yml`

## Components
The UI Component Library includes the following TypeScript components:
- **Button** - Primary and disabled states
- **Card** - Title and description
- **Label** - Text label
- **Text** - Paragraph text
- **HeroImage** - Full width image banner
- **Img** - Image with width control
- **Dropdown** - Select dropdown
- **RadioButton** - Radio input
- **Table** - Table container
- **TableHeader** - Table header (thead)
- **TableRow** - Table row (tr)
- **TableCell** - Table cell (td)
- **TableFooter** - Table footer (tfoot)

## Run Locally with Docker

### Step 1 - Build the React app
```bash
CI=false npm run build
```

### Step 2 - Build the Docker image
```bash
docker build -t kaur_jasdeep_coding_assignment13 .
```

### Step 3 - Run the container
```bash
docker run -p 8018:8018 kaur_jasdeep_coding_assignment13
```

### Step 4 - Open in browser
```
http://localhost:8018
```

## Docker Details
- Container name: kaur_jasdeep_coding_assignment13
- Working directory: kaur_jasdeep_ui_garden_build_checks
- Port: 8018
- Base image: node:18-alpine (build), nginx:alpine (serve)
- The production build is served via Nginx on port 8018

## GitHub Repository
https://github.com/Jasdeepkaur2/kaur_jasdeep_coding_assignment13
