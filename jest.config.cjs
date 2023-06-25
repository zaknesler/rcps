/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  moduleNameMapper: { '^~/(.*)$': '<rootDir>/src/$1' },
  coveragePathIgnorePatterns: ['/node_modules/'],
}

module.exports = config
