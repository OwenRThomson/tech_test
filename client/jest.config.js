/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // '^.+\\.svg$': '<rootDir>/svg_transform.js' TODO: I'm not sure what this is but it was breaking the npm test command
  },
};
