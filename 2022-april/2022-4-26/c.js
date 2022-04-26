let a = '100';
let b = 10;
console.log(a + b);
console.log((+a) + b);
console.log(b + +a);
console.log(String(b) * String(a));
let c = 2;
console.log(a + b - c);
console.log(b + a - c);
e = a + b;
console.log(typeof e);

let d = '分割线';
console.log(d);

let out = 100;//number
console.log(out = d + out);//分割线100
console.log(typeof out);//string
console.log(out - a);//NaN，在15行已经变量
console.log(a = b = c);//2
c = 'abc';
console.log(a = b = c);//abc
console.log(typeof b);

console.log(d);

let r = 10;
r++;
console.log(r);//11(10+1)
r--;
console.log(r);//10(11-1)
r += 10;
console.log(r);//20(10+10)
r *= 10;
console.log(r);//200(20*10)

let n = '10';
n = -'10';
console.log(n);
console.log(typeof n);
n = +'10';
console.log(n);
console.log(typeof n);

let y = '10';
// y++;
// console.log(y);
// console.log(typeof y);
y += 1;
console.log(y);
console.log(typeof y);

let o = 10;

console.log( (o++) );






