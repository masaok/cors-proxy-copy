// Project-wide Babel configuration
// https://stackoverflow.com/a/60349119/15521015
module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
      },
    ],
  ],
}
