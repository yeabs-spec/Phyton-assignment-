function doit() {
    let num = 98
    let sq = num * num
    console.log(sq)
}

doit();

function greet(namee1,age) {
    console.log("Hey there"+namee1,+age)
}
greet('buddy',34);

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
swap(76,15);

function getusername(){
    let username =( prompt("enter ur name"))
}
getusername();

