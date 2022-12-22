module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  forceExit: true,
  maxWorkers: 1,
  setupFilesAfterEnv: ['./setupJest.js'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/migrations/*.ts',
    '!<rootDir>/src/**/test/*.ts',
  ],
  detectOpenHandles: true,
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@commons/(.*)': '<rootDir>/src/commons/$1',
  },
};
