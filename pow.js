//link: https://youtu.be/WU3fJqi-APw

var myPow = function (x, n) {
    if (n === 0) return 1.00000

    let num = x;
    let power = n < 0 ? n * -1 : n
    if( Math.abs(x)===1.00000){
        if(x<0){
        if((power-1)%2===0){
            return x
        }
        else return -x
        }
        else{
            return x
        }
    }
    for (let i = 1; i < power; i++) {

        x = (x * num)

    }
    x = n < 0 ? (1 / x) : x
    x = x.toString()
    x = x.slice(0, x.indexOf(".") + 6);
    x = Number(x)

    return x;

};

console.log(myPow(0.44894, -5))