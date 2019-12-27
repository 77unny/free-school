const data = [
    { title: 'hello', content: '아저씨', price: 1000 },
    { title: 'baekCo', content: '올드보이', price: 3000 },
    { title: 'codesquad', content: '신세계', price: 2000 }
];
const priceData = [100, 200, 300];

// forEach
data.forEach(function(v) {
    console.log(v.title, v.price);
});

// map : 새로운 데이를 반환 해준다.
const newData = data.map(function(v) {
    return v.price * 1.1;
});
console.log(newData);
const newPriceData = priceData.map(function(v) {
    return v * 10;
});
console.log(newPriceData);
const newPriceData2 = priceData.map(function(v) {
    let obj = { name: v.name, content: v.content, price: v * 10 };
    return obj;
});
console.log(newPriceData2);

// filter : 조건에 맞는 배열을 반환
const newFilter = data.filter(function(v) {
    return v.price > 1500;
});
console.log(newFilter);
// filter + map 응용
const newFilter2 = data.filter(function(v) {
    return v.price > 1500;
}).map(function(v){
    let obj = { name: v.title, content: v.content, price: v.price+'' };
    return obj;
});
console.log(newFilter2);