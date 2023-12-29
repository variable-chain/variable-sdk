module.exports = {
    // Specify the environments where your code will run
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    // Specify the parser options
    parserOptions: {
      ecmaVersion: 2021, // or the version you are using
      sourceType: 'module',
    },
    // Specify the plugins you want to use
    plugins: [
      // Add any specific plugins you need, for example:
      // 'react',
      // 'vue',
    ],
    // Specify the rules for your code
    rules: {
      // Add your specific rules here
      // For example:
      // 'no-console': 'warn',
      // 'no-unused-vars': 'error',
    },
  };