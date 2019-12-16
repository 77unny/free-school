/*
반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
=> 원의 넓이 = PI * 지름(반지름 * 2);

필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
숫자가 아니면 에러를 반환하도록 구현한다.
인자의갯수가 부족하면 에러를 반환한다.
*/

// 반지름 
const radius = radius => {
    return Math.PI * (radius * 2);
};

// 정사각형
const square = w => {
    return w * w;
};

// 직사각형
const rectangle = (w, l) => {
    return w * l;
};

console.log(radius(5));
console.log(square(5));
console.log(rectangle(5,10));
