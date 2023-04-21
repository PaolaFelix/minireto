// JavaScript
function loadDoc() {
  var xhr = new XMLHttpRequest();
  var url = "https://www.16personalities.com/es/test-de-personalidad";
  var link = document.getElementById("link");
  
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      link.href = url;
      link.innerHTML = "16 personalities test here";
      link.style.display = "block";
    }
  };
  
  xhr.open("GET", url, true);
  xhr.send();
}

 $(document).ready(function() {
   $('.push').click(function() {
     var columna = $(this).closest('td');
     columna.find('.push-contenido').eq(0).toggle(); 
     columna.find('.push-contenido').eq(0).next('.push-contenido').toggle(); 
   });
 });


 


 