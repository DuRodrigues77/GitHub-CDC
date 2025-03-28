
const idadeMaria = 16;
const maiorIdade = 18; 


if (idadeMaria >= 18){
    console.log("Maria pode dirigir");
 }
 else  {
    const anosFaltantes = maiorIdade - idadeMaria;
    console.log("Maria nao pode dirigir!");
    console.log(`falta ${anosFaltantes} anos para Maria poder dirigir`);
 }