"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // node-copy-paste https://github.com/xavi-/node-copy-paste
    const ncp = require("copy-paste");
    const disposable = vscode.commands.registerCommand("extension.copyPlainText", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor.
        }
        if (!editor.selection.isEmpty) {
            ncp.copy(editor.document.getText(editor.selection));
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map