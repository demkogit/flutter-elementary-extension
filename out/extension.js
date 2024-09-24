"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const commands_1 = require("./commands");
const code_actions_1 = require("./code-actions");
const DART_MODE = { language: "dart", scheme: "file" };
function activate(_context) {
    _context.subscriptions.push(vscode_1.commands.registerCommand("extension.convert-statenotifierbuilder", commands_1.convertToStateNotifierBuilder), vscode_1.commands.registerCommand("extension.convert-doublesourcebuilder", commands_1.convertToDoubleSourceBuilder), vscode_1.commands.registerCommand("extension.convert-triplesourcebuilder", commands_1.convertToTripleSourceBuilder), vscode_1.commands.registerCommand("extension.wrap-statenotifierbuilder", commands_1.wrapWithStateNotifierBuilder), vscode_1.commands.registerCommand("extension.wrap-entitystatebuilder", commands_1.wrapWithEntityStateNotifierBuilder), vscode_1.commands.registerCommand("extension.wrap-doublesourcebuilder", commands_1.wrapWithDoubleSourceBuilder), vscode_1.commands.registerCommand("extension.wrap-triplesourcebuilder", commands_1.wrapWithTripleSourceBuilder), vscode_1.languages.registerCodeActionsProvider(DART_MODE, new code_actions_1.ElementaryCodeActionProvider()));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map