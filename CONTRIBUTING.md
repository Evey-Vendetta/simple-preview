# Contributing

Thanks for your interest in contributing to Preview in Simple Browser.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [VS Code](https://code.visualstudio.com/) 1.80+ (or VSCodium equivalent)

## Running Locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Evey-Vendetta/simple-preview.git
   cd simple-preview
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Open the folder in VS Code and press **F5** to launch the Extension Development Host. A new VS Code window opens with the extension loaded.

## Testing

Open an HTML file in the Extension Development Host workspace, right-click it in the Explorer sidebar, and verify **"Preview in Simple Browser"** appears and works correctly.

There are no automated tests at this time. Manual smoke-testing the context menu command covers the core path.

## Submitting a PR

1. Fork the repo and create a branch: `git checkout -b feat/your-feature`
2. Make your changes and verify the extension works end-to-end (F5 test run)
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, etc.
4. Push your branch and open a pull request against `main`
5. Describe what changed and why in the PR description

## Code Style

- Plain JavaScript, no build step required
- Keep the extension lean — avoid adding dependencies unless necessary
- Match the style of the existing `extension.js`
