module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: true,
    styled: true,
    themes: ['forest'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
