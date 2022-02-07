module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('autoprefixer'),
    require('postcss-custom-properties'),
    require('postcss-nested')
  ]
}