let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "가"; //쌍따옴표, 호따옴표 둘 다 가능
let arr = [1, 2, "가"]; //let arr = []; 이렇게 초기화 가능 
let user = {
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: "ssar",
        password: "8087",
        balance: 50000
    }
}; //오브젝트 , 자바 또한 중괄호 안에 클래스.

console.log("n1 : " + n1);
console.log("n1 : ", n1);
console.log(`n1값은 ${n1} 입니다`); //서버에서 먼저 el표현식을 읽어버림...
console.log("arr : ", arr);
console.log("user : ", user);