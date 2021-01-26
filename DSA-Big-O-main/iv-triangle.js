const triangle = (n) => {
    let tri = 0
    for (let i= 0; i <= n; i++){
        tri = tri + i;
    }
    return tri;
}

console.log(triangle(1));
console.log(triangle(2));
console.log(triangle(3));
console.log(triangle(4));