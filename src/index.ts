import { Config } from "prettier";

const prettierConfig: Config = {
    bracketSpacing: true,
    printWidth: 100,
    quoteProps: "as-needed",
    requirePragma: false,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
    useTabs: false
};

export {
    prettierConfig
};