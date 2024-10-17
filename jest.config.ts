import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    cacheDirectory: "./ignored",
    collectCoverage: true,
    collectCoverageFrom: [ "src/main/**" ],
    coverageDirectory: "./ignored/coverage",
    moduleFileExtensions: [ "js", "ts" ],
    moduleNameMapper: {
      "^@/(.*)$": ["<rootDir>/src/main/$1"],
      "^@configuration/(.*)$": ["<rootDir>/src/main/configuration/$1"],
    },
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: [
      "/node_modules/",
      "/dist/"
    ],
    verbose: true,
  };
};
