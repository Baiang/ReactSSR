const path = require('path')

const TEST_REGEX = '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$'


module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  setupFiles: ['<rootDir>/test/jest.setup.js'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(jsx|tsx)?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/build/'
  ],
  moduleFileExtensions: [
    'ts', 'tsx', 'js', 'jsx'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverage: true,
}
