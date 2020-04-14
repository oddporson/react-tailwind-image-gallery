const tailwindcss = require('tailwindcss');

module.exports = {
  pluggins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}
