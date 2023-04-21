// JavaScript
function loadDoc() {
  var url = "https://www.16personalities.com/es/test-de-personalidad";
  var link = $("#link");
  
  $.ajax({
    url: url,
    type: "GET",
    async: true,
    success: function(response) {
      link.attr("href", url);
      link.html("16 personalities test here");
      link.css("display", "block");
      link.css("color","black");
    }
  });
}

 $(document).ready(function() {
   $('.push').click(function() {
     var columna = $(this).closest('td');
     columna.find('.push-contenido').eq(0).toggle(); 
     columna.find('.push-contenido').eq(0).next('.push-contenido').toggle(); 
   });
 });


 


 