// 1. 왜 variable-5 가 콘솔에 5번 찍혔을까?

/**
`var` . `let` 함수스코프와 블록스코프 사이에서 발생하는 문제때문이다.
var로 선언된 변수가 호이스팅에 의해 함수 최상단으로 끌어올려져, undefined로 초기화 된다. 
그리고 for루프에 setTimeout에 의해 비동기적으로 실행되어 i의 마지막값을 참조하게 된다. 

 */

// 2. for문, setTimeout을 지우지 않고 수정해서 0부터 4까지 출력되도록 만들기.
for (var i = 0; i < 5; i++) {
  (function(x) {
    setTimeout(function() {
      console.log('variable-' + x);
    }, 100);
  })(i);
}

