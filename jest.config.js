/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  //   preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    // '^.+\\.tsx?$': 'ts-jest',
    // '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill)/)'],
  extensionsToTreatAsEsm: ['.ts'],
  moduleFileExtensions: ['js', 'mjs', 'ts', 'json'],
  //   modulePathIgnorePatterns: ['/node_modules/'],
  clearMocks: true,
  collectCoverage: false,
  //   coverageDirectory: 'coverage',
  //   coverageReporters: ['html'],
  moduleNameMapper: {
    '^(.+)\\.js$': '$1',
  },
//   setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = config;
