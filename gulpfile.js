const gulp = require('gulp')
const less = require('gulp-less')
const autoprefix = new (require('less-plugin-autoprefix'))({
  browsers: ['last 2 versions']
})
const server = require('gulp-server-livereload')

gulp.task('less', () => {
  return gulp.src('./styles/index.less')
             .pipe(less({
               plugins: [autoprefix]
             }))
             .pipe(gulp.dest('.'))
})

gulp.task('watch', () => {
  return gulp.watch('styles/*.less', ['less'])
})

gulp.task('build', ['less'])

gulp.task('server', ['watch', 'build'], () => {
  return gulp.src('.')
             .pipe(server({
               livereload: true
             }))
})
