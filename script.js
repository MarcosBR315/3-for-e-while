let x;
let y = 1;
let z;
let par;

for(x = 1; x <= 10; x +=1 ){
    console.log('Contar até dez (FOR): '+x);
}

console.log("\n");

y = 1;

while(y<11){
    console.log('Contar até dez (WHILE): '+y);
    y +=1;
}

console.log("\n");

for(z = 1; z <= 100; z+=1){
    if(z%2 !== 0){
        console.log("Contar números ímpares: "+z);
    }
}

console.log("\n");

for(par = 1; par <= 100; par+=1){
    if(par%2 === 0){
        console.log("Contar números pares: "+par);
    }
}