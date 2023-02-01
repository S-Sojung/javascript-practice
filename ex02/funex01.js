let sum = 10;
//자바 스크립트는 다중 스레드 안됨, 스레드 1
//제네릭? 타입이 없는데 제네릭이 있을리가

let gogo = function/*run*/(num) { //함수의 이름인 run이 gogo 로 될 것임. => 지워도됨! 그러면 이제 익명함수
    console.log(sum);
    console.log("run gogo " + num);
    return 10;
}
function run(num) {
    console.log("run gogo " + num + " size: ");
    return 10;
}
function run(num, size) {
    console.log("run gogo " + num + " size: " + size);
    return 10;
}
function hello(func) {
    func(20);
}
hello(gogo);

// run(50);
//let result = gogo(50);
// console.log("result:", result);
// run(50, 100);
