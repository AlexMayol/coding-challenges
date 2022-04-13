module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/lib"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
