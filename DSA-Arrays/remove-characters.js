const remove = (string, removed) => {
    let newString = ''
    for (let i = 0; i < removed.length; i++){
        for(let j = 0; j < string.length; j++){
            if(string[j] === removed[i]){
               newString= string.replace(removed[i], '');
            }
        }
    }
    console.log(newString);
}

remove('Battle of the Vowels: Hawaii vs. Grozny', 'a');
