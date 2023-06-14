// function discountCalculate(dis,price){
//     return dis*price;
// }

function discountCalculateCurry(discount){
    return function(price){
        return discount*price;
    }
}

// console.log(discountCalculate(.1,1000))
let tenPercentDis=discountCalculateCurry(.1);
let fifteenPercentDis = discountCalculateCurry(0.15);

console.log(typeof tenPercentDis)

console.log(tenPercentDis(1200))
console.log(fifteenPercentDis(1500));