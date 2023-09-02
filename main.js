// Función para mostrar un mensaje al usuario en la consola
function mostrarMensaje(pelicula, precio, formaPago) {
    console.log(`Has elegido la película "${pelicula}" de El Señor de los Anillos.`);
    console.log(`Precio: $${precio}`);
    
    if (formaPago === "arrepentirse") {
        console.log("Has decidido arrepentirte. ¡Vuelve a seleccionar una película!");
    } else {
        console.log(`Forma de pago: ${formaPago}`);
        console.log("Gracias por elegir nuestro cine. ¡Disfruta de la película!");

        // Ofrecer la opción de adquirir el libro de la película
        const adquirirLibro = prompt(`¿Quieres adquirir el libro de la película "${pelicula}"? (Sí/No)`);

        if (adquirirLibro.toLowerCase() === "si") {
            console.log(`¡Excelente elección! Puedes adquirir el libro de "${pelicula}" en nuestra tienda.`);
        } else {
            console.log("¡Esperamos que disfrutes de la película!");
        }
    }
}

// Función principal que se ejecuta cuando se selecciona una película
function seleccionarPelicula() {
    const peliculas = [
        { titulo: "La Comunidad del Anillo", precio: 10 },
        { titulo: "Las Dos Torres", precio: 12 },
        { titulo: "El Retorno del Rey", precio: 15 }
    ];

    let mensaje = "Selecciona una película de El Señor de los Anillos:\n\n";

    for (let i = 0; i < peliculas.length; i++) {
        mensaje += `${i + 1}. ${peliculas[i].titulo} - $${peliculas[i].precio}\n`;
    }

    const eleccionPelicula = parseInt(prompt(mensaje));

    if (eleccionPelicula >= 1 && eleccionPelicula <= peliculas.length) {
        const peliculaSeleccionada = peliculas[eleccionPelicula - 1].titulo;
        const precioPelicula = peliculas[eleccionPelicula - 1].precio;

        const formaPago = prompt("Selecciona una forma de pago:\n1. Mercado Pago\n2. Tarjeta de Crédito\n3. Efectivo\n4. Arrepentirse");

        switch (formaPago) {
            case "1":
                mostrarMensaje(peliculaSeleccionada, precioPelicula, "Mercado Pago");
                break;
            case "2":
                mostrarMensaje(peliculaSeleccionada, precioPelicula, "Tarjeta de Crédito");
                break;
            case "3":
                mostrarMensaje(peliculaSeleccionada, precioPelicula, "Efectivo");
                break;
            case "4":
                mostrarMensaje(peliculaSeleccionada, precioPelicula, "arrepentirse");
                seleccionarPelicula(); // Volver a seleccionar una película
                break;
            default:
                console.log("Opción no válida. Por favor, selecciona una opción válida.");
        }
    } else {
        console.log("Opción de película no válida. Por favor, selecciona un número válido.");
    }
}

// Llamar a la función principal para que comience la interacción
seleccionarPelicula();