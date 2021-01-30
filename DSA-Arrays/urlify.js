const urlify = (url) => {
    let newUrl = [];
    for (let i = 0; i < url.length; i++){
        if(url[i] === ' '){
            newUrl.push('%20')

        }
        else{
            newUrl.push(url[i]);
        }
    }

    return newUrl.join('');
    
}


console.log(urlify('hello friend'));