// find the number of digits in a nonnegative integer n.


let num = prompt("Enter a number ")
let n = 1

function numberOfDigit(num) {
    while (num >= 10) {
        num = Math.floor(num / 10)
        n++
    }
    console.log(n)
}

// console.log(n, 'number of digits')
numberOfDigit(num)


// 2. We will call a number "mirror prime", if it is prime, and the number written in a reverse order is also prime.
//
//     Find the number of "mirror primes" from a to b.

let count = 0, x, m, z, y, num_arr=[];

function findeMirrorNumbers(a, b) {
    for (let i = a; i < b; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                break
            } else {
                x = i
                while (x >= 10) {
                    m = Math.floor(x / 10)
                    x = Math.floor(x % 10)
                    z = m * 10 + x
                    y = x * 10 + m
                    if (y < b && y===z) {
                        count = count + 1
                        num_arr.push(z,y)
                    }
                }
            }

        }
    }
    console.log(count, num_arr)
}


findeMirrorNumbers(10, 32);