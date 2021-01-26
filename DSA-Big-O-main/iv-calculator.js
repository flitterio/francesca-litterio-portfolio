const powerCalculator = function(base, exponent) {
    if(base && exponent >=0){
        for(let i=exponent; i > 1; i--){
            base = base * base
        }
        return base;
    }
    else{
        return 'exponent shold be >= 0';
    }
}

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));