  // Mostrar/ocultar según el scroll
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('#btnSubir').fadeIn();
      } else {
          $('#btnSubir').fadeOut();
      }
  });
