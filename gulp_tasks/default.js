const { task, watch, series } = require('gulp');

const paths = require('../gulpfile');

/*
- Наблюдение за изменением SCSS
- Компиляция в CSS и перенос в временный каталог
*/

task('default', () => {
  watch(paths.styles.watch, series('scss'))
  watch(paths.layout.src, series('include'))
});
