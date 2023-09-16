function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

document.getElementById('tablas').addEventListener('click', function(event){
    let formulario = document.querySelector('#content');
    let nombreText = document.createElement('input')
    nombreText.type = "text";
    nombreText.name = "nombre";
    formulario.appendChild(nombreText);

    let cursoText = document.createElement('input');
    cursoText.type = "text";
    cursoText.name = "curso";
    formulario.appendChild(cursoText);

    let botonEnviar = document.createElement('input');
    botonEnviar.type = "button";
    botonEnviar.name = "Enviar";
    botonEnviar.innerText = "Enviar"
    botonEnviar.id = "boton";
    formulario.appendChild(botonEnviar)
})