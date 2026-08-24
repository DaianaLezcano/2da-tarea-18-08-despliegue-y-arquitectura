let matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ["j1", 0, 0, 0, 0, 0, 0, 0, 0,"j2"]
];

//*console.log(matriz[0][0]);*//

let semilla = 12345;

function dado() {
  semilla = (semilla * 9301 + 49297) % 233280;
  return semilla / 233280; 
}

let casas = 0;

while (casas <5) {
    let x = Math.floor (dado () * 10);
    let y = Math.floor (dado () * 10);
    if (matriz [y][x] === 0) {
        matriz [y][x] = "c";
        casas = casas + 1;
    }
}

//console.table (matriz);//

//function tirarDado() {
    //let resultado= 1+ Math.floor(dado()*3);
   // return resultado;
//}

//let Pasos=(tirarDado());
//console.log (Pasos);*/



    let num = Math.random();
    let num2 = num * 3;
    let DadoMovimiento = Math.ceil(num2);
    console.log(DadoMovimiento);
