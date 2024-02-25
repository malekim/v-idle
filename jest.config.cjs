module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/test/unit/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.ts'],
  coverageReporters: ['text', 'html', 'json'],
  coverageDirectory: '<rootDir>/coverage/',
}
