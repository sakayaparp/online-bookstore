module.exports = {
    preset: "ts-jest",
    testMatch: ["./**/*.test(.js|.jsx|.ts||.tsx)"],
    clearMocks: true,
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/"],
    verbose: true,
  };
  