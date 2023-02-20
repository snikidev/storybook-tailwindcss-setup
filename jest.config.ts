import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setup.ts'],
  testEnvironment: 'jsdom',
}

export default config
