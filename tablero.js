/*let tablero [
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9]

]*/


/*let matriz = [
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

//console.log(matriz[0][0]);//

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

console.table (matriz);


function crearTablero(filas = 10, columnas = 10) {
  const tablero = [];
  for (let i = 0; i < filas; i++) {
    const fila = new Array(columnas).fill(0); // llena la fila con ceros
    tablero.push(fila);
  }
  return tablero;
}
*/


let tablero = [
  ["T", "C", "A", "D", "R", "A", "C", "T"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["t", "c", "a", "d", "r", "a", "c", "t"],
];

console.log(tablero.join("\n") + "\n\n");

// Adelantar dos posiciones el peón de rey
tablero[4][4] = tablero[6][4];
tablero[6][4] = " ";
console.log(tablero.join("\n"));


