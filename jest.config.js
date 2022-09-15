const aliasHq = require('alias-hq');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: aliasHq.get('jest'),
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  setupFiles: ['jest-canvas-mock']
};