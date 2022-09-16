/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1'
  },
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  setupFiles: ['jest-canvas-mock']
};