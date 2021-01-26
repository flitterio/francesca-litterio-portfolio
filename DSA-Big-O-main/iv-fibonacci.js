const fibonacci = (n) => {
    let fibArr = [];
    let current = 0;
    for(let i = 0; i <= n; i++){
        if(i<3){
            fibArr.push(1);
        }
        else{
            current = fibArr[i-1] + fibArr[i-2];
            fibArr.push(current);
        }
    }
    return fibArr[n];
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));