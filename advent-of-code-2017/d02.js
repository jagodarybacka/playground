const i = `5 1 9 5
7 5 3
2 4 6 8`
let d02c=x=>x.split('\n').reduce((p,n)=>p+Math.max(...n=n.split(' ').map(Number))-Math.min(...n),0)
console.log(d02c(i));
