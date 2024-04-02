const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark : 90000}, {
    highWaterMark: 90000
})

/**
 * by default, the size of the buffer is 64 kb
 * last buffer - remainder
 * highWaterMark - control size
 * const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
 * const stream = createReadStream('../content/big.txt', { encoding : 'utf8'})
 */

stream.on('data', (result) => {
    console.log(result);
})