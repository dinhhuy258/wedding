(function($) {
  "use strict";

  $.fn.ajax_wishes = function() {
    $.get(
      "https://script.google.com/macros/s/AKfycbwsTMbaEG_QEWNIq8h1N8i3GYcV5Uietch3wvYqpkPlAxxduJ1vdV7k28NEbRNbym6e/exec",
      function(response) {
        if (response.result != "success") {
          return
        }

        var wishes = response.data;
        wishes.forEach(function(wish) {
          var wishHtml = '<div class="item">' +
            '<b class="wish-name">' + wish.name + '</b>' +
            '<p class="wish-message">' + wish.message + '</p>' +
            '</div>';

          $('#friends-wishes').append(wishHtml);
        });


        $("#friends-wishes").owlCarousel({
          items: 3,
          autoPlay: 2000,
          stopOnHover: true,
          pagination: false,
          navigation: false,
        });

        if (device.tablet() || device.mobile()) {
          var owl_logo = $("#friends-wishes").data('owlCarousel');
          owl_logo.stop()
        }
      }
    );
  };
})(jQuery);
