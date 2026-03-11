const vscode = require("vscode");
const http = require("http");
const fs = require("fs");
const path = require("path");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

let server = null;
let serverPort = 5500;

function startServer(rootPath) {
  return new Promise((resolve, reject) => {
    if (server) {
      resolve(serverPort);
      return;
    }

    server = http.createServer((req, res) => {
      const safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, "");
      let filePath = path.join(rootPath, safePath);

      if (filePath.endsWith(path.sep) || safePath === "/") {
        filePath = path.join(filePath, "index.html");
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
      });
    });

    server.listen(0, "127.0.0.1", () => {
      serverPort = server.address().port;
      console.log(`simple-preview: server running on port ${serverPort}`);
      resolve(serverPort);
    });

    server.on("error", reject);
  });
}

function activate(context) {
  console.log("simple-preview: activated");

  const cmd = vscode.commands.registerCommand("simplePreview.open", async (uri) => {
    if (!uri) {
      vscode.window.showWarningMessage("Simple Preview: no file selected.");
      return;
    }

    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
      vscode.window.showErrorMessage("Simple Preview: no workspace folder open.");
      return;
    }

    try {
      const port = await startServer(workspaceFolder.uri.fsPath);
      const relativePath = vscode.workspace
        .asRelativePath(uri, false)
        .replace(/\\/g, "/");

      const url = `http://127.0.0.1:${port}/${relativePath}`;
      console.log("simple-preview: opening", url);
      vscode.commands.executeCommand("simpleBrowser.show", url);
    } catch (err) {
      vscode.window.showErrorMessage(`Simple Preview: ${err.message}`);
    }
  });

  context.subscriptions.push(cmd);
}

function deactivate() {
  if (server) {
    server.close();
    server = null;
  }
}

module.exports = { activate, deactivate };
