const ignore = ['node_modules']

module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ignore,
  testPathIgnorePatterns: ignore,
  setupFilesAfterEnv: ['./jest.setup.js'],
}
