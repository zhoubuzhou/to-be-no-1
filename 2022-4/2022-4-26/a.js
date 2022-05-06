let message ='jack';
let somewon='hi';
const heihei=`hello ${somewon} ${2+2} ${message}`;
const get=`${10/5}`;
console.log(heihei);//此时是hello hi 4 jack

somewon=2;
message ='2';
console.log(get*100*somewon*message); //800

// bigint
somewon=2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;
message =2000000000000000000000000000000000000000000000000000000000000000000000000000000n;
console.log(somewon+message);

// null
somewon=null;
console.log(somewon);

// undefined
let dd;
console.log(dd);

