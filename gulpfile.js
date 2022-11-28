var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function () {
    gulp.src('*/css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('build'))
})