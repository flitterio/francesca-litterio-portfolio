const sheepCount = (sheep) => {
    for(let i = sheep; i >= 0; i--){ 
        
    if(i === 0){
            return 'All sheep jumped over the fence';
        }  

    console.log( i  + ': Another Sheep jumps over the fence');  
    }
}

console.log(sheepCount(3))