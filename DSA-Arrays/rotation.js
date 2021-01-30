let list = [];

const rotation = (rotate) => {
 let newWord = rotate[rotate.length -1] + rotate.substring(0, rotate.length -1);
    list.push(newWord)
    if(rotate.length > list.length){
        rotation(newWord)
    }

}

const rotationCheck = (str1, str2) => {
    list.push(str1);
    rotation(str1);

    let match = false
    for(let i = 0; i < list.length; i++){
        if(list[i] === str2){
            match = true;
        }
        
    }
    console.log(match);

}

rotationCheck('amazon',' azonma');
rotationCheck('amazon', 'azonam');