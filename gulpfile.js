const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('message', function () {
  console.log('gulp is running')
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css'))
});


gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);