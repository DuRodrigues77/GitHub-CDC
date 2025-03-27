// AND / OR / NOT
// E   / OU / NEGAÇÃO 
// &&  / || /  !
console.log("Maria foi parada em uma blitz");


const idadeMaria = 18;
const mariaPossuiCNH = true;
// AND

console.log("Maria vai ser presa ? ", idadeMaria >= 18 && mariaPossuiCNH === false);

console.log("---------------------")

console.log("Maria foi para a balada e na entrada precisava mostrar o documento")

const mariaPossuiRg = true;

console.log("Maria levou seu RG?" , mariaPossuiRg);

console.log("Maria é maior de idade?", idadeMaria >= 18);

console.log("Maria conseguiu compravar que é maior de idade?", mariaPossuiCNH === true || mariaPossuiRg === true);

console.log("Marias entrou na balada!!");

console.log("-------------------------")

// NOT


const gostaDeBeber = true;


const mariaGostaDeBeber = !gostaDeBeber;

console.log("Maria gosta de bebr?", mariaGostaDeBeber);