
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './**/**/**/**/**/*.tsx',
      './**/**/**/**/*.tsx',
      './**/**/**/*.tsx',
      './**/**/*.tsx',
      './**/*.tsx',
      './*.tsx',
    ],
    keyframes:true,
    css:[
      "./style/index.css",
      './**/**/*.css',
      './**/**/**/*.css',
      './**/**/**/**/*.css',
      './**/**/**/**/**/*.css',
      './**/**/*.less',
      './**/**/**/*.less',
      './**/**/**/**/*.less',
      './**/**/**/**/**/*.less',
  ],
    whitelist:["html","body"],
    rejected: true,
    defaultExtractor: content => {
      
      const result = content.match(/[\w-/:]+(?<!:)/g) || []
      // console.log(result,'content')
      return result
    }
  })
  module.exports = {
    plugins: [
      'tailwindcss',
      ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
      'postcss-preset-env'
    ],

  }