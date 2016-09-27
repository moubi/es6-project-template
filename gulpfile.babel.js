'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import shell from 'gulp-shell';
import del from 'del';

const SOURCE_DIRECTORY = './src';

/**
 * Compile scss files into css
 */
gulp.task("compile-scss", () => {
  return gulp.src("assets/scss/**/*.scss")
    .pipe(sass({ outputStyle: 'compressed' })
    .on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("dist/css/"));
});

/**
 * Watching for changes in scss files
 */
gulp.task("watch-scss", () => {
  gulp.watch("assets/scss/**/*.scss", ["compile-scss"]);
});

/**
 * Bundle the new code
 */
gulp.task("deploy", ["clean-dist"], () => {
  gulp.src("./").pipe(shell(["webpack"]));
});

/**
 * Clean old html and js from dist
 */
gulp.task("clean-dist", (cb) => {
  del(["dist/*.js", "dist/*.html"]);
  cb();
});

/**
 * Watching for index.html changes
 */
gulp.task("watch-deploy", ['deploy'], () => {
  gulp.watch("index.html", ["deploy"]);
});
