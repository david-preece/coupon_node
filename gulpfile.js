var gulp = require("gulp");
var babel = require("gulp-babel");
var clean = require('gulp-rimraf');

gulp.task('clean', [], function() {
    console.log("Clean all files in dist folder");

    return gulp.src("dist/*", { read: false })
        .pipe(clean());
});

gulp.task("default", ['clean'], function () {
    return gulp.src([
            "!src/*_test.js",
            "src/*.js",
            "src/*/*.js"
        ])
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});