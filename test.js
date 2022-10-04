// let은 메모리셀안에있는 데이터재할당 가능 & 값 변경가능
let a = 1;
a = 2;
console.log(a); //2


// const는 메모리셀안에있는 데이터재할당 불가 & 값 변경가능
const text = 'hello';// (상수)변수
/* text = 'hi'; 
console.log(text); //에러발생 (TypeError: Assignment to constant variable.) */

//상수 - 상수는 항상대문자로, 단어와 단어사이는 _ 로 분리
const MAX_FRUITS = 5; // 한번값이 정해지면 절대 바뀌지 않음!

//(상수)변수 - 재할당 불가
const apple = {//apple이라는 변수에는 오브젝트가있다.
    name:'apple', color:'red',display:'이모지사과모양',
};
//apple={내용 블라블라 써봤자, const라 지금이내용 할당안됨 = apple에 다른 메모리주소를 담을수없음}
//but, apple에는 결국 메모리주소가 할당된것이기때문에, 값변경은 가능
console.log(apple); //{name:'apple', color:'red',display:'이모지사과모양'}
apple.name = 'orange';
console.log(apple); //{name:'orange', color:'red',display:'이모지사과모양'}

