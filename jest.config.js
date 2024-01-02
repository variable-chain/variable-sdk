module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node', // or 'jsdom' for browser environment
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};
