enum Check{
    A,
    B=19,
    c,
}
// console.log(`${Check.A},${Check.B}\n ${Check.c}`);
console.log(`${Check[0]}\n${Check[19]}\n${Check[20]}`);