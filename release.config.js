module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        publishCmd:
          "flyctl deploy --app=${process.env.FLY_APP_NAME} --image-label=${nextRelease.version}",
      },
    ],
  ],
};
