function power(base:number, exponent:number):number{
    if(exponent === 0) return 1;
    if(exponent % 2 === 0){
        const half = power(base, exponent / 2);
        return half * half;
    }
    return base * power(base, exponent - 1);    
}
console.log(`${power(2, 10)}`);

