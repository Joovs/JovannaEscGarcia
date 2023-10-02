/*

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos HTML
    const btnIncrementar = document.getElementById('incrementar');
    const btnDecrementar = document.getElementById('decrementar');
    const contadorElement = document.getElementById('contador');


    // Inicializar contador
    let contador = 0;


    // Función para incrementar el contador
    function incrementar() {
        contador++;
        actualizarContador();
    }


    // Función para decrementar el contador
    function decrementar() {
        contador=0;
        actualizarContador();
    }


    // Función para actualizar el texto del contador
    function actualizarContador() {
        contadorElement.textContent = contador;
    }


    // Asignar eventos a los botones
    btnIncrementar.addEventListener('click', incrementar);
    btnDecrementar.addEventListener('click', decrementar);
});

*/

document.addEventListener('DOMContentLoaded', function() {
    const btnIncrementar = document.querySelectorAll('.incrementar'); 
    const btnDecrementar = document.getElementById('decrementar');
    const contadorElement = document.getElementById('contador');
    
    let contador = 0;


    function incrementar() {
        contador++;
        actualizarContador();
    }

    function decrementar() {
        contador=0;
        actualizarContador();
    }

    function actualizarContador() {
        contadorElement.textContent = contador;
    }


    // Iterar sobre cada botón de incremento y agregar el evento
    btnIncrementar.forEach(function(btn) {
        btn.addEventListener('click', incrementar);
    });
    btnDecrementar.addEventListener('click', decrementar);
});