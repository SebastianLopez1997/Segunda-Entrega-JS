/// Creo array con productos
const ArrayMisProductos = [
    {
        nombre: "Taza polimero",
        id: 0,
        precio: 250
    },
    {
        nombre: "Taza Plastica",
        id: 1,
        precio: 150
    },
    {
        nombre: "Termo",
        id: 2,
        precio: 450
    },
    {
        nombre: "Remera",
        id: 3,
        precio: 850
    },
    {
        nombre: "Babero",
        id: 4,
        precio: 650
    }
]
/// Muestro por consola todos los elementos del array
for (let i = 0; i < ArrayMisProductos.length; i++) {
    console.log(ArrayMisProductos[i]);
}
/// Muestro mi array por consola
console.log(ArrayMisProductos);
/// Pido al usuario un ID del prodcuto que le gusto
let opcionElegida = parseInt(prompt("Escribe el ID de la opcion elegia"));
/// Busco el elemento que el usuario pidio con el metodo .find
const found = ArrayMisProductos.find(elemento => elemento.id === opcionElegida) /// Buscamos que se encuentre
const ArrayProductosSeleccionados = ArrayMisProductos.filter((el) => el.id == opcionElegida) /// si lo encuentra se crea un array nuevo con lo encontrado
/// preguntamos al sistema si se encuentra y que nos diga por un alert si lo encontro o no
if (found != undefined) {
    console.log(found)
    alert("Producto agregado al carrito")
} else {
    alert("Producto no encontrado")
}
/// mostramos el "carrito"
console.log(ArrayProductosSeleccionados);

