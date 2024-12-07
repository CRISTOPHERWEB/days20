document.getElementById('cambiarTxt').addEventListener('click', function () {
    const mensajenuevo =document.getElementById('cambioTxt');
    mensajenuevo.textContent="El texto se ha cambiado correctamente";
    mensajenuevo.style.color = "green";
});

document.getElementById('abrir/ocultar').addEventListener('click', function(){
    const abrirOcultarSection=document.getElementById('proyects');

    if (abrirOcultarSection.style.display === "none"){
        abrirOcultarSection.style.display = "block";
        abrirOcultarSection.style.color = "Green";
    }else {
        abrirOcultarSection.style.display = "none";
    }
});

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío real del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre && email) {
        alert(`Gracias ${nombre} , estaremos en contacto.`);
    } else {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
    }
});