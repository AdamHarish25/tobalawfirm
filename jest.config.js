// jest.config.js
export default {
  // The root of your source code, typically './src'
  roots: ["<rootDir>/src"],

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-jsdom",
  
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },

  // The setup files to run before each test file
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Mocks CSS imports
  },
};