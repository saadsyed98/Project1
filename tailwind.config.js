module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const { src, dest } = require('gulp')
const concat = require('gulp-concat')
const postcss = require('gulp-postcss')

function tailwind() {
    return src('styles.css')
        .pipe(postcss([
            require('tailwindcss'),
            require('autoprefixer')
        ]))
        .pipe(concat('tailwind.css'))
        .pipe(dest('./css'))
}


exports.tailwind = tailwind

purgecss({
  content: ['./*.html'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})