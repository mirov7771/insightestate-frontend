module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3, // Включает поддержку современных CSS-фич (Stage 3)
    },
    autoprefixer: {}, // Автопрефиксы
    cssnano: { preset: 'default' }, // Минификация CSS
  },
};
