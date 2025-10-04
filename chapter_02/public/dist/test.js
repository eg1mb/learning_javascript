// 원래 저자의 의도는 이 파일을 실행하면 es6 문법 지원이 안되어 오류가 나야함
// 하지만 최신의 node는 es6+ 지원 완료
'use strict';

var sentences = [{
  subject: "JavaScript",
  verb: "is",
  object: "great"
}, {
  subject: "Elephants",
  verb: "are",
  object: "large"
}];
function say(_ref) {
  var subject = _ref.subject,
    verb = _ref.verb,
    object = _ref.object;
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
}
for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}