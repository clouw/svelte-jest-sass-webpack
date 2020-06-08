module.exports = {
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.(js|mjs)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules", "cypress", "__sapper__"],
  bail: false,
  verbose: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};