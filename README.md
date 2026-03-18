# Preview in Simple Browser

[![Open VSX Version](https://img.shields.io/open-vsx/v/evey-vendetta/simple-preview)](https://open-vsx.org/extension/evey-vendetta/simple-preview)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/evey-vendetta/simple-preview)](https://open-vsx.org/extension/evey-vendetta/simple-preview)
[![GitHub Stars](https://img.shields.io/github/stars/Evey-Vendetta/simple-preview)](https://github.com/Evey-Vendetta/simple-preview/stargazers)
[![License](https://img.shields.io/github/license/Evey-Vendetta/simple-preview)](LICENSE)

Right-click any HTML file in the Explorer to preview it in VS Code's built-in Simple Browser.

No external browser. No Live Server dependency. Zero config.

## Features

- **Context menu** — right-click `.html` or `.htm` files in the Explorer sidebar
- **Built-in static server** — spins up a lightweight HTTP server on a random port, serves your workspace files
- **Simple Browser** — opens directly inside VS Code/VSCodium as an editor tab
- **Auto-cleanup** — server stops when the extension deactivates

## Usage

1. Open a workspace containing HTML files
2. Right-click any `.html` file in the Explorer
3. Click **"Preview in Simple Browser"**

The file opens in a new editor tab via Simple Browser, served through a local HTTP server so relative paths, CSS, JS, and images all work correctly.

## Why not Live Server?

Live Server is great, but it opens an external browser by default. This extension keeps everything inside the editor — ideal for quick previews, design work, and staying focused.

## Requirements

- VS Code 1.80+ or VSCodium equivalent

## License

MIT
