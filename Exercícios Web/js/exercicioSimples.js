function processa() {
    var t1 = document.getElementById("termo1");
    var t2 = document.getElementById("termo2");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("resposta").innerHTML = this.responseText;
    }
    xhttp.open("GET", "processa.php?t1="+t1+"&t2="+t2);
    xhttp.send();    
}      