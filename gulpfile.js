const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function Html(done) {
  gulp
    .src("dist/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
  done();
}

function Js(done) {
  gulp.src("src/*.js").pipe(uglify()).pipe(gulp.dest("dist"));
  done();
}

function Images(done) {
  gulp.src("dist/*").pipe(imagemin()).pipe(gulp.dest("dist/"));
  done();
}

gulp.task("build", (done) => {
  Html(done);
  Js(done);
  Images(done);
});
