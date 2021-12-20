module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '<rootDir>/pages/**',
    '!<rootDir>/pages/_app.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coverageDirectory: 'jest-coverage',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/server/',
    '<rootDir>/__tests__/integration/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['text-summary', 'json', 'text', 'html', 'cobertura'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@(Test)(.*)$': '<rootDir>/test/$2',
    '^@(Server)(.*)$': '<rootDir>/server/$2',
    '^@(Pages)(.*)$': '<rootDir>/pages/$2',
    '^@([A-Z].*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest/presets/js-with-babel',
};
