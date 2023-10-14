// Funcion If
let Verdad = true;

if (Verdad == true) {
    console.log("En efecto fue verdad esto");
} else {
    console.log("No fue verdad pipipi")
}
// Switch
let Color = prompt ("Escoga un color in inglish")

switch(Color) {
    case "Red":
        console.log("Es rojo como mi nombre")
        break;


    case "Green":
        console.log("Es Verde como las plantas")
        break;

    case "Yellow":
        console.log("Es Amarillo como las girasoles")
        break;

    case "Blue":
        console.log("Es azul como el agua una bebida de los dioses")
        break;

    case "Void":
        console.log("49 74 20 73 63 61 72 65 73 20 6d 65 2c 20 49 20 63 61 6e 74 20 72 75 6e 2c 20 54 68 65 20 73 6d 69 6c 65 73 20 6d 61 6b 65 20 6d 65 20 77 61 6e 74 20 74 6f 20 65 6e 64 20 6d 79 20 56 69 73 69 6f 6e 2e 2e 2e 20 41 6d 20 69 20 74 72 61 70 70 65 64 20 69 6e 20 61 20 76 6f 69 64 3f 20")
        break;

    default:
        console.log("Ese no es un numero escogido o no tiene mayusculas lol")
        break;
}