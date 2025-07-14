module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/types/**',
    '!src/**/data/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/navigation/bottomTabNavigation.tsx', 
    'src/services/api.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
