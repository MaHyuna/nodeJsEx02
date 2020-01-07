'use strict'

/* 
const	// 상수 - 한번 선언이 되면 수정할 수가 없음 (구조변경 x)
let		// 선언을 했지만 추후에 수정 가능
var
*/

// let를 사용해도 상관 없으나 배열사용할 때 const로 사용하면 메모리가 최적화 됨 
// 왜냐면 배열은 변하지 않기 때문임

const arr = []
//let arr = []	

for ( const i=0; i< 100; i++ ) {
	arr.push(i)
}

// Stack 스택 - 가장 마지막 입력된 데이터를 출력 함
arr.pop()	// 99를 리턴한다(반환한다)

// Queue 큐 - 가장 먼저 입력된 데이터를 출력 함
arr.shift()	// 0을 리턴한다 (반환한다)