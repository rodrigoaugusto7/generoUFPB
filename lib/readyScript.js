//<!-- SCRIPT PARA REALIZAR A TRANSIÇÃO ENTRE AS PÁGINAS -->
$(document).ready(function() {
      $("body").css("display", "none");
      $("body").fadeIn(1000);
});

$(document).ready(function() {
$("body").css("display", "none");

$("body").fadeIn(1000);

$("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);      
});
   
function redirectPage() {
  window.location = linkLocation;
}
});

//-------------------------------------------------------------

//<!-- Script de suavização do dropdown -->
$(document).ready(function() {
  $('.ui.menu .ui.dropdown').dropdown({
    on: 'hover'
  });
  $('.ui.menu a.item')
    .on('click', function() {
        $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
      ;
    })
  ;
});
