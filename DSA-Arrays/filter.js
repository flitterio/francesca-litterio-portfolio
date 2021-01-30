const filter = (arr) => {
    let newArr =[]
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 5){
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9])