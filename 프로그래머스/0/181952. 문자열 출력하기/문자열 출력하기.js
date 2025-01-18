require('readline')
   .createInterface(process.stdin, process.stdout)
   .on('line', l => console.log(l))
   .on('close', _ => {});