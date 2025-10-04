// 원래 저자의 의도는 이 파일을 실행하면 es6 문법 지원이 안되어 오류가 나야함
// 하지만 최신의 node는 es6+ 지원 완료
'use strict'

const sentences = [
  { subject: "JavaScript", verb: "is", object: "great" },
  { subject: "Elephants", verb: "are", object: "large" },
]

function say({ subject, verb, object }) {
  console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
  say(s);
}
