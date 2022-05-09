// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//encriptar

function encriptar(fraseencripatada){ 
   var fraseencripatada = document.getElementsByTagName("input")[0].value; 
   fraseencripatada= fraseencripatada.replace(/e/igm,'enter');
   fraseencripatada= fraseencripatada.replace(/o/igm,'ober');
   fraseencripatada= fraseencripatada.replace(/i/igm,'imes');
   fraseencripatada= fraseencripatada.replace(/a/igm,'ai');
   fraseencripatada= fraseencripatada.replace(/u/igm,'ufat');
   
   document.getElementById("input").value = "";
   document.getElementById("muneco").style.display = "none";
   document.getElementById("sinMensaje").style.display = "none";
   document.getElementById("resultado").innerHTML = fraseencripatada;
   document.getElementById("resultado").innerHTML = fraseencripatada;
   document.getElementById("resultado").innerHTML = fraseencripatada;} 
   
   //desencriptar
   
   function desencriptar(fraseencripatada){ 
   
   var fraseencripatada = document.getElementsByTagName("input")[0].value; 
   fraseencripatada= fraseencripatada.replace(/enter/igm,'e');
   fraseencripatada= fraseencripatada.replace(/ober/igm,'o');
   fraseencripatada= fraseencripatada.replace(/imes/igm,'i');
   fraseencripatada= fraseencripatada.replace(/ai/igm,'a');
   fraseencripatada= fraseencripatada.replace(/ufat/igm,'u');
   
   document.getElementById("resultado").innerHTML = fraseencripatada;
   document.getElementById("input").value = "";
   document.getElementById("muneco").style.display = "none";
   document.getElementById("sinMensaje").style.display = "none";
   document.getElementById("resultado").innerHTML = fraseencripatada;
   document.getElementById("resultado").innerHTML = fraseencripatada;
   document.getElementById("resultado").innerHTML = fraseencripatada;} 

   





 
