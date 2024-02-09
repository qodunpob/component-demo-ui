/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '^.+\\.css$': '<rootDir>/__mocks__/cssMock.js',
    '^.+\\.svg$': '<rootDir>/__mocks__/fileMock.js'
  }
}
