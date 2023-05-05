module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme`
  extends: ["dino"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
