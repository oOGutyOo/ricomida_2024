$(document).ready(function () {
    $('div.indcarrusel button.botonI-1').addClass('vista-activa');
    $('#carouselExampleIndicators').on('slid.bs.carousel', function(){
       var numVista=$('div.carousel-inner div.carousel-item.active').index();
    
       
       if(numVista===0){
        $('div.indcarrusel button.botonI-1').addClass('vista-activa');
        $('div.indcarrusel button.botonI-2').removeClass('vista-activa');
       } else if(numVista===1){
        $('div.indcarrusel button.botonI-2').addClass('vista-activa');
        $('div.indcarrusel button.botonI-1').removeClass('vista-activa');
       }
    });
});

$(document).ready(function () {
    $(".t-ingredientes, .t-preparacion").on("dblclick", function () {
        $(this).css({
            "color": "red",
            /* "font-size": "2em" */
        });
    });

    $(".N, .NC").click(function () {
        $(".NC, .img-card").slideToggle();
    });

    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

