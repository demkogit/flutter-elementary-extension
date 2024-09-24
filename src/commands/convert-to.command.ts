import { convertTo } from "../utils";

const stateNotifierBuilderSnippet = (widget: string, child: string) => {
  return `StateNotifierBuilder<\${1:Type}>(
  listenableState: \${2:value}Listenable,
  builder: (_, \${2:value}) {${child}},
)`;
};

const doubleSourceBuilderSnippet = (widget: string, child: string) => {
  return `DoubleSourceBuilder<\${1:Type}, \${2:Type}>(
  firstSource: \${3:value}Listenable,
  secondSource: \${4:value}Listenable,
  builder: (_, \${3:value}, \${4:value}) {${child}},
)`;
};
const tripleSourceBuilderSnippet = (widget: string, child: string) => {
  return `TripleSourceBuilder<\${1:Type}, \${2:Type}, \${3:Type}>(
  firstSource: \${4:value}Listenable,
  secondSource: \${5:value}Listenable,
  thirdSource: \${6:value}Listenable,
  builder: (_, \${4:value}, \${5:value}, \${6:value}) {${child}},
)`;
};

export const convertToStateNotifierBuilder = async () =>
  convertTo(stateNotifierBuilderSnippet);

export const convertToDoubleSourceBuilder = async () =>
  convertTo(doubleSourceBuilderSnippet);

export const convertToTripleSourceBuilder = async () =>
  convertTo(tripleSourceBuilderSnippet);
