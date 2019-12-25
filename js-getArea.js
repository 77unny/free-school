const getCircle = a => {
    const result = Math.PI * a;
    console.log(result);
    return result;
};
const getRect = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
};

const getTrapezoid = (a, b, h) => {
    const result = (a + b) * h * 0.5;
    console.log(result);
    return result;
};

const getArea = (type, ...prmt) => {
    const arryPrmt = [...prmt];
    // arryPrmt.push(...prmt); push를 안해도 배열로 들어가짐
    const shape = type;
    switch (shape) {
        case 'circle':
            console.log('circle');
            getCircle(arryPrmt[0]);
            break;
        case 'rect':
            console.log('rect');
            getRect(arryPrmt[0], arryPrmt[1]);
            break;
        case 'trapezoid':
            console.log('trapezoid');
            getTrapezoid(arryPrmt[0], arryPrmt[1], arryPrmt[2]);
            break;
        default:
            console.log('해당 도형이 없습니다.');
    }
};

getArea('circle', 10, 10);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
