function discount(price){
    return function(dis){
        return dis*price
    }
}

let fivePercentDis = discount(.05)
let fiftyPercentDis = discount(.1)

console.log(fivePercentDis(100));
console.log(fiftyPercentDis(1000));