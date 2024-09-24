"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithTripleSourceBuilder = exports.wrapWithDoubleSourceBuilder = exports.wrapWithEntityStateNotifierBuilder = exports.wrapWithStateNotifierBuilder = void 0;
const utils_1 = require("../utils");
const stateNotifierBuilderSnippet = (widget) => {
    return `StateNotifierBuilder<\${1:Type}>(
  listenableState: \${2:value}Listenable,
  builder: (_, \${2:value}) {
    return ${widget};
  },
)`;
};
const entityStateNotifierBuilderSnippet = (widget) => {
    return `EntityStateNotifierBuilder<\${1:Type}>(
  listenableEntityState: \${2:value}Listenable,
  loadingBuilder: (_, \${2:value}) => const SizedBox(),
  errorBuilder: (_, e, __) => const SizedBox(),
  builder: (_, \${2:value}) {
    return ${widget};
  },
)`;
};
const doubleSourceBuilderSnippet = (widget) => {
    return `DoubleSourceBuilder<\${1:Type}, \${2:Type}>(
  firstSource: \${3:value}Listenable,
  secondSource: \${4:value}Listenable,
  builder: (_, \${3:value}, \${4:value}) {
    return ${widget};
  },
)`;
};
const tripleSourceBuilderSnippet = (widget) => {
    return `TripleSourceBuilder<\${1:Type}, \${2:Type}, \${3:Type}>(
  firstSource: \${4:value}Listenable,
  secondSource: \${5:value}Listenable,
  thirdSource: \${6:value}Listenable,
  builder: (_, \${4:value}, \${5:value}, \${6:value}) {
    return ${widget};
  },
)`;
};
const wrapWithStateNotifierBuilder = async () => (0, utils_1.wrapWith)(stateNotifierBuilderSnippet);
exports.wrapWithStateNotifierBuilder = wrapWithStateNotifierBuilder;
const wrapWithEntityStateNotifierBuilder = async () => (0, utils_1.wrapWith)(entityStateNotifierBuilderSnippet);
exports.wrapWithEntityStateNotifierBuilder = wrapWithEntityStateNotifierBuilder;
const wrapWithDoubleSourceBuilder = async () => (0, utils_1.wrapWith)(doubleSourceBuilderSnippet);
exports.wrapWithDoubleSourceBuilder = wrapWithDoubleSourceBuilder;
const wrapWithTripleSourceBuilder = async () => (0, utils_1.wrapWith)(tripleSourceBuilderSnippet);
exports.wrapWithTripleSourceBuilder = wrapWithTripleSourceBuilder;
//# sourceMappingURL=wrap-with.command.js.map