const { task, src, dest } = require('gulp');

const useref = require('gulp-useref');
const htmlMin = require('gulp-htmlmin');

const paths = require('../gulpfile');

/*
- Переименовывание ассетов
- Минификация и сортировка разметки
*/

task('layout', () => src(paths.html.src)
  .pipe(useref({ noAssets: true }))
  .pipe(htmlMin({
    sortAttributes: true,
    sortClassName: true,
    removeComments: false, // Отключить, если требуется посадка верстки на CMS
    collapseWhitespace: false, // Отключить, если требуется посадка верстки на CMS
  }))
  .pipe(dest(paths.html.dist)));
