import { wrapWith } from "../utils";

const stateNotifierBuilderSnippet = (widget: string) => {
  return `StateNotifierBuilder<\${1:Type}>(
  listenableState: \${2:value}Listenable,
  builder: (_, \${2:value}) {
    return ${widget};
  },
)`;
};

const entityStateNotifierBuilderSnippet = (widget: string) => {
  return `EntityStateNotifierBuilder<\${1:Type}>(
  listenableEntityState: \${2:value}Listenable,
  loadingBuilder: (_, \${2:value}) => const SizedBox(),
  errorBuilder: (_, e, __) => const SizedBox(),
  builder: (_, \${2:value}) {
    return ${widget};
  },
)`;
};

const doubleSourceBuilderSnippet = (widget: string) => {
  return `DoubleSourceBuilder<\${1:Type}, \${2:Type}>(
  firstSource: \${3:value}Listenable,
  secondSource: \${4:value}Listenable,
  builder: (_, \${3:value}, \${4:value}) {
    return ${widget};
  },
)`;
};

const tripleSourceBuilderSnippet = (widget: string) => {
  return `TripleSourceBuilder<\${1:Type}, \${2:Type}, \${3:Type}>(
  firstSource: \${4:value}Listenable,
  secondSource: \${5:value}Listenable,
  thirdSource: \${6:value}Listenable,
  builder: (_, \${4:value}, \${5:value}, \${6:value}) {
    return ${widget};
  },
)`;
};


export const wrapWithStateNotifierBuilder = async () => wrapWith(stateNotifierBuilderSnippet);
export const wrapWithEntityStateNotifierBuilder = async () => wrapWith(entityStateNotifierBuilderSnippet);
export const wrapWithDoubleSourceBuilder = async () => wrapWith(doubleSourceBuilderSnippet);
export const wrapWithTripleSourceBuilder = async () => wrapWith(tripleSourceBuilderSnippet);

