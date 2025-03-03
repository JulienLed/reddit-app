module.exports = {
  plugins: {
    autoprefixer: {},
    "@fullhuman/postcss-purgecss": {
      content: ["./src/**/*.html", "./src/**/*.js"], // Analyse ces fichiers
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
};
