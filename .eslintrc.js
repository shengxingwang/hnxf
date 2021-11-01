module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/essential", "standard", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    eqeqeq: "off",
    "no-unused-vars": "off",
    "prettier/prettier": "error",
    "no-undef": "off",
    camelcase: ["error", { ignoreDestructuring: true }],
    "no-debugger": "error",
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "no-use-before-define": ["error", { functions: false }],
    "no-useless-constructor": "error",
    "prefer-const": "error",
    "no-fallthrough": "off",
  },
};
