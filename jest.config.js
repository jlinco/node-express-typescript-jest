module.exports = {
  globals: {
    'ts-jest': {
      tsconfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    // '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
    '^.+\\.(ts|tsx)$': ['ts-jest']
  },
  testMatch: [
    '**/tests/**/*.test.(ts|js)'
  ],
  testEnvironment: 'node'
}