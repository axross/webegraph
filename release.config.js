module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        publishCmd:
          "flyctl deploy --access-token=${process.env.FLY_IO_TOKEN} --app=${FLY_IO_APP_NAME} --image-label=${nextRelease.version}",
      },
    ],
  ],
};
