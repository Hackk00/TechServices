  $(document).ready(function() {
      // Mostrar/ocultar según el scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#btnSubir').fadeIn();
      } else {
        $('#btnSubir').fadeOut();
      }
    });

    $('.filtro').keyup(function() {
        var rex = new RegExp($(this).val(), 'i');
        $('.buscar tr').hide();
        $('.buscar tr').filter(function() {
            return rex.test($(this).text());
        }).show();
    });
      // Toggle sidebar modo "icon-only"
    $("#sidebarToggle").on("click", function() {
      $("#sidebar").toggleClass("collapsed");
    });
  });