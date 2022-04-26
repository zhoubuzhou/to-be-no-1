const bacc = prompt('请输入', 'jack');
console.log(bacc);

let acc = 10;
console.log(typeof acc);//number
// acc = String(acc);
console.log(typeof String(acc));//String

let abb = '10';//string
console.log(typeof abb);
abb = Number(abb);
console.log(typeof abb);

let bdd = true;//布尔值
console.log(typeof bdd);
let hgh = false;
console.log(typeof hgh);
bdd = Number(bdd);
console.log(bdd);//1
hgh = Number(hgh);
console.log(hgh);//0
console.log(bdd+hgh);//0+1


let daa = null;//null/object
console.log(typeof daa);
daa = Number(daa);
console.log(typeof daa);//0

let zoo = 'abc';
console.log(zoo);
zoo = Boolean(zoo);
console.log(zoo);

let poo = Boolean(0);
console.log(poo);
let ioo = Boolean(null);
console.log(ioo);
let uoo = Boolean(undefined);
console.log(uoo);
let yoo = Boolean(NaN);
console.log(yoo);
let too = Boolean('');
console.log(too);

let iuu = Number(false);
console.log(iuu);
iuu = Boolean(iuu);//依旧是false
console.log(iuu);

// let dww = String(0);
// console.log(dww);
// dww = Boolean(dww);//为true 因为是字符串0
// console.log(dww);

let dww = String(0);
console.log(dww);
dww = Number(dww);
console.log(dww)
dww = Boolean(dww);//为false 因为数字0
console.log(dww);



