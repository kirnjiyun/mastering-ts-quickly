function myfunc(x) {
    var array = [];
    array[0] = x;
}
myfunc(123);
//편하다고 막쓰면안됨
//1.narrowing 할때 쓴다.
var 유니이름 = "kimjiyun";
// 유니이름 as number;
//이렇게 변경할때 쓰는 게 아니다.
//2.무슨 타입이 들어올지 100프로 확실할때쓴다.
//3.비상용
