/**
 * 配置文档：https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/get-started.md
 */
 module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-prettier"],
    /**
     * 配置文档：https://github.com/prettier/stylelint-prettier
     */
    plugins: ["stylelint-prettier"],
    rules: {
      // "prettier/prettier": true,
    },
  };
  