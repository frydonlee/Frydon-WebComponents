module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    //"../../webcomponents/**/dist/stories/**/*.stories.@(js|jsx|ts|tsx)",
    //"../../webcomponents/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../packages/webcomponents/**/dist/stories/**/*.stories.@(ts|tsx)",
    "../../packages/webcomponents/**/stories/**/*.stories.@(js|jsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}