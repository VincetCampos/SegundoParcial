document.getElementById('carga').addEventListener('click', function(event){

    function solicitudHttpAjax(){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (xhttp.readyState === 4 && xhttp.status === 200){
                console.log(xhttp.responseText)
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
        xhttp.send()
    }

    let elemento = document.getElementById('content');
    let numRamdom = (Math.floor(Math.random()*16777215));
    let numeroHex = numRamdom.toString(16);
    elemento.innerHTML = numeroHex;

    setInterval(function(){
        solicitudHttpAjax()
        document.body.style.backgroundColor = "#" + numeroHex;
      }, 5000)

})