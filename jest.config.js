// See https://nextjs.org/docs/testing
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
