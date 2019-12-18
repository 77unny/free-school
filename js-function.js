/*
반지름을 입력받아 원의 넓이를 계산하는 함수를 만든다.
=> 원의 넓이 = PI * 지름(반지름 * 2);

필요한 인자를 입력받아 사각형의 넓이를 계산하는 함수를 만든다.
필요한 인자를 입력받아 사다리꼴의 넓이를 계산하는 함수를 만든다.
필요한 인자를 입력받아 원기둥의 넒이를 계산하는 함수를 만든다.
숫자가 아니면 에러를 반환하도록 구현한다.
인자의갯수가 부족하면 에러를 반환한다.
*/

// 숫자가 아니면 에러
const 숫자에러 = function() {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return alert('숫자를 입력하세요.');
        }
    }
};
const 인자갯수 = () => {
    for (let i = 0; i < arguments.length; i++) {}
};

// 반지름
const radius = radius => {
    숫자에러(radius);
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

// 사다리꼴
const 사다리꼴 = (a, b, h) => {
    return (a + b) * h * 0.5;
};

// 원기둥
const 원기둥 = (a, b) => {
    const 원넓이 = a * a * Math.PI;
    const 옆넓이 = a * 2 * Math.PI * b;
    return 원넓이 * 2 + 옆넓이;
};

console.log(radius(5)); //31.41..
console.log(square(5)); //25
console.log(rectangle(5, 10)); //50
console.log(사다리꼴(12, 20, 15)); //240
console.log(원기둥(5, 8));
