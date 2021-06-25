export const dva = {
  config: {
    onError(e) {
      e.preventDefault();
      console.error('hhhhhh', e.message);
    },
  },
  plugins: [
    // require('dva-logger')(),
  ],
};