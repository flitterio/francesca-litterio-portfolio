const maxSum = (arr) =>{
    sum = 0;
    largest = 0

    for (let i=0; i < arr.length; i++){
        sum = sum + arr[i];

        if(sum > largest){
            largest = sum;
        }
    }

    console.log(largest);
}

maxSum([4, 6, -3, 5, -2, 1]);