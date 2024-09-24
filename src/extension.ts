
import { commands, ExtensionContext, languages, workspace } from "vscode";
import {
	convertToStateNotifierBuilder,
	convertToDoubleSourceBuilder,
	convertToTripleSourceBuilder,
	wrapWithStateNotifierBuilder,
	wrapWithEntityStateNotifierBuilder,
	wrapWithDoubleSourceBuilder,
	wrapWithTripleSourceBuilder,
} from "./commands";
import { ElementaryCodeActionProvider } from "./code-actions";

const DART_MODE = { language: "dart", scheme: "file" };

export function activate(_context: ExtensionContext) {


	_context.subscriptions.push(

		commands.registerCommand(
			"extension.convert-statenotifierbuilder",
			convertToStateNotifierBuilder
		),

		commands.registerCommand(
			"extension.convert-doublesourcebuilder",
			convertToDoubleSourceBuilder
		),
		commands.registerCommand(
			"extension.convert-triplesourcebuilder",
			convertToTripleSourceBuilder
		),
		commands.registerCommand(
			"extension.wrap-statenotifierbuilder",
			wrapWithStateNotifierBuilder,
		),
		commands.registerCommand(
			"extension.wrap-entitystatebuilder",
			wrapWithEntityStateNotifierBuilder
		),
		commands.registerCommand(
			"extension.wrap-doublesourcebuilder",
			wrapWithDoubleSourceBuilder
		),
		commands.registerCommand(
			"extension.wrap-triplesourcebuilder",
			wrapWithTripleSourceBuilder
		),
		languages.registerCodeActionsProvider(
			DART_MODE,
			new ElementaryCodeActionProvider()
		)
	);
}
