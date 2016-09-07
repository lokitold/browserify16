var gulp = require('gulp');

gulp.task('browserify', function() {
    return browserify('./source/scripts/app.main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));
});