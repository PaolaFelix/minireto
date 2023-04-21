// JavaScript
function loadDoc() {
  var xhr = new XMLHttpRequest();
  var enlace = "https://www.16personalities.com/es/test-de-personalidad";
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = enlace;
    }
  };
  xhr.open("GET", enlace, true);
  xhr.send();
};

 $(document).ready(function() {
   $('.push').click(function() {
     var columna = $(this).closest('td');
     columna.find('.push-contenido').eq(0).toggle(); 
     columna.find('.push-contenido').eq(0).next('.push-contenido').toggle(); 
   });
 });


 


 