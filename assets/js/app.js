$(document).ready(function(){
  var images = $('.carousel-list li').length;  //llamo a las imagenes y cuenta el total de ellas
 // console.log(images); muestra cuantas imagenes tengo

  for(i=1; i<=images ; i++) { // si la variable i es igual a 1, empieza de 1; i es menor o igual a images(cantidad de imagenes que hay); que aumente de a 1
    $('.buttons').append('<li><span class="fa fa-circle"></span></li>'); // todo esto es para que en caso de que se elimine o agregue una imagen más, automaticamente se agregara un circulo más
  }

  
  $('.carousel-list li').hide(); //se esconden las imágenes
  $('.carousel-list li:first').show(); //digo que la primera imagen se muestre
  $('.buttons li:first').css({'color':'grey'}); // darle color al primer circulo

  //funcion que al aparetar un circulo aparezca la imagen correspodiente a ese circulo.
  $('.buttons li').click(buttonsFunction);
 // $('right span').click(rightFunction);
  //$('left span').click(leftFunction);

  //Funciones
  function buttonsFunction() {
    var carouselPos = $(this).index() + 1; //numero de la posicion del elemento
    console.log(carouselPos);

    $('.carousel-list li').hide();
    $('.carousel.list li:nth-child('+ carouselPos +')').fadeIn();

  }

});