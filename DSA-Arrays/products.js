const product = (arr) => {
    let output = [];


    for(let i = 0; i < arr.length; i++){
        let current = 1;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] !== arr[j]) {
                current = current * arr[j];
            }
        }
        output.push(current);
    }

    console.log(output);
}

product([1, 3, 9, 4]);