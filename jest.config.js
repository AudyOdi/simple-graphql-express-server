"use strict";

module.exports = {
  globals: {
    "ts-jest": {
      babelConfig: {
        presets: ["@babel/preset-env"],
      },
    },
  },
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  setupFiles: ["<rootDir>/node_modules/regenerator-runtime/runtime"],
  testPathIgnorePatterns: [
    "<rootDir>/e2e/",
    "<rootDir>/dist/",
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
  ],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
