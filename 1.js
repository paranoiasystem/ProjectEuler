const stop = 1000

var sum = 0

const start = async () => {
    for (i=1; i<stop; i++) {
        if(i%3 == 0 || i%5 == 0)
            sum = sum + i
    }
}

start();

console.log(sum)