require('readline')
    .createInterface({input:process.stdin,output:process.stdout})
    .on('line',l=>i=l.split(' '))
    .on('close',_=>{console.log(`a = ${i[0]}\nb = ${i[1]}`)})