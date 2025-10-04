// 트랜스컴파일
import gulp from "gulp";

// 새로운 eslint 설정 형식을 지원하는 패키지로 변경
import eslint from "gulp-eslint-new";

// gulp-babel 7+ 버전부터 @babel/core 필수
// 최신 프리셋은 @bable/preset-env
import babel from "gulp-babel";

// eslint의 일부 포맷팅 규칙은 더이상 지원되지 않을 예정
// 이를 해결하기 위해 prettier 사용
import prettier from "gulp-prettier";

gulp.task("default", function (done) {
  gulp
    .src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(prettier())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.fix());

  // 노드 소스
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));

  // 브라우저 소스
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));

  // gulp4 버전부터 비동기 완료를 알려야 함
  done();
});
