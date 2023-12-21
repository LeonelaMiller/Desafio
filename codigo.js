const productos = [{ 
        id:1,
        nombre: "Teclado Mecanico",
        precio: 4640
    },
    { 
        id: 2,
        nombre: "Mouse Gamer",
        precio: 2990
    },
    { 
        id: 3,
        nombre: "Auricular Gamer",
        precio: 4660
    },
    { 
        id: 4,
        nombre: "Joystick Pc/android",
        precio: 9030
    },
    {
        id: 5, 
        nombre: "Parlante Gamer",
        precio: 9670
    }
];
let carrito = []
let seleccion = prompt("hola desa comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion =prompt ("hola desea comprar algo si o no")
}
if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre +" " + producto.precio + "$")
    alert(todoslosProductos.join("-"))
}else if(seleccion == "no"){
    alert("gracias por venir hasta pronto!!")
}

while(seleccion != "no"){
    let producto =prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Teclado Mecanico" || producto == "Mouse Gamer" || producto == "Auricular Gamer" || producto == "Joystick Pc/android" || producto == "Parlante Gamer"){
        switch(producto){
            case "Teclado Mecanico": precio = 4640
            break
            case "Mouse Gamer": precio = 2990
            break
            case "Auricular Gamer": precio = 4660
            break
            case "Joystick Pc/android": precio = 9030
            break
            case "Parlante Gamer": precio = 9670
            break
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
        carrito.push ({producto, unidades, precio})
        console.log (carrito)
    }else{
        alert ("no tenemos ese producto")
    }
    seleccion = prompt ("desea seguir comprando??")
    while(seleccion === "no"){
        alert("gracias por la comrpa !!")
        carrito.forEach((carritoFinal) => {
            console.log (`producto:${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total} `)//*
console.table(productos);
function filtrarPorPrecioMax(preciomaximo){
    const filtrados = productos.filter((producto)=> producto.precio <= preciomaximo)
    console.table(filtrados)
}