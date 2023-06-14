function tax (price){
    return function(tx){
        return price*tx
    }
}

let tenPercentTax = tax(.10)
let fifteenPercentTax = tax(.15)

console.log(tenPercentTax(10000));
console.log(fifteenPercentTax(20000));