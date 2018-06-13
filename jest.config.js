module.exports = {
    transform:{
        ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        ".(js|jsx|ts|tsx)":"<rootDir>/node_modules/babel-jest",
        "^.+\\.js$": "babel-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    verbose: true,
    testResultsProcessor: "./node_modules/jest-junit",
    coveragePathIgnorePatterns: [".*\\.d\\.ts", "<rootDir>/node_modules"],
    modulePathIgnorePatterns: [".*\\.d\\.ts", "<rootDir>/node_modules"],
    globals: {
        Settings: true
    }
}