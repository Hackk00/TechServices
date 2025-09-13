  $(document).ready(function() {
      // Mostrar/ocultar según el scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#btnSubir').fadeIn();
      } else {
        $('#btnSubir').fadeOut();
      }
    });
      // Toggle sidebar modo "icon-only"
    $("#sidebarToggle").on("click", function() {
      $("#sidebar").toggleClass("collapsed");
    });
  });