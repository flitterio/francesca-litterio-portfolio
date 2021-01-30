const toZero = (array) => {
    for(let i = 0; i < array.length; i++ ){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] === 0){
                //array[i][j] = 'z';
                array[i][0] = 'z';
                array[0][j] = 'z';
            }
        }
    }
    for(let a = 1; a < array[0].length; a++){
        if(array[0][a] === 'z'){
            array[a][1] = 'hi';
        }
    }
    for(let b = 0; b < array.length; b++ ){
        if(array[b][0] === 'z'){
            array[b].fill(0);
        }
    }

    console.log(array);
}

toZero(
    [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
])