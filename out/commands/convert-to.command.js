"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToTripleSourceBuilder = exports.convertToDoubleSourceBuilder = exports.convertToStateNotifierBuilder = void 0;
const utils_1 = require("../utils");
const stateNotifierBuilderSnippet = (widget, child) => {
    return `StateNotifierBuilder<\${1:Type}>(
  listenableState: \${2:value}Listenable,
  builder: (_, \${2:value}) {${child}},
)`;
};
const doubleSourceBuilderSnippet = (widget, child) => {
    return `DoubleSourceBuilder<\${1:Type}, \${2:Type}>(
  firstSource: \${3:value}Listenable,
  secondSource: \${4:value}Listenable,
  builder: (_, \${3:value}, \${4:value}) {${child}},
)`;
};
const tripleSourceBuilderSnippet = (widget, child) => {
    return `TripleSourceBuilder<\${1:Type}, \${2:Type}, \${3:Type}>(
  firstSource: \${4:value}Listenable,
  secondSource: \${5:value}Listenable,
  thirdSource: \${6:value}Listenable,
  builder: (_, \${4:value}, \${5:value}, \${6:value}) {${child}},
)`;
};
const convertToStateNotifierBuilder = async () => (0, utils_1.convertTo)(stateNotifierBuilderSnippet);
exports.convertToStateNotifierBuilder = convertToStateNotifierBuilder;
const convertToDoubleSourceBuilder = async () => (0, utils_1.convertTo)(doubleSourceBuilderSnippet);
exports.convertToDoubleSourceBuilder = convertToDoubleSourceBuilder;
const convertToTripleSourceBuilder = async () => (0, utils_1.convertTo)(tripleSourceBuilderSnippet);
exports.convertToTripleSourceBuilder = convertToTripleSourceBuilder;
//# sourceMappingURL=convert-to.command.js.map