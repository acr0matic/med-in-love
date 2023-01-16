const { task, src, dest } = require('gulp');
const { stream } = require('browser-sync');

const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
const paths = require('../gulpfile');

/*
- Компиляция SCSS фрагментов в CSS код
- Генерация sourcemap
*/

task('include', () => src(paths.layout.src)
  .pipe(fileinclude({
    prefix: '@@',
    basepath: paths.src
  }))
  .pipe(dest(paths.layout.temp))
  .pipe(stream({ match: 'layout/**/*.html' })));
