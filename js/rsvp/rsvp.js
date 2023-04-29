(function($) {
  "use strict";

  $.fn.ajaxrsvp = function(options) {
    var defaults = {
      messageWrapper: "#message",
      scrollAfterSubmit: true,
    };

    var settings = $.extend({}, defaults, options);

    var form_id = this.attr("id");

    this.submit(function(event) {
      event.preventDefault();

      var ajax_input_element = $(this).find(".ajax-input");
      var action_url = $(this).attr("action");

      var all_id = [];
      var all_err = [];
      var post_data = {};

      $.each(ajax_input_element, function(_, element) {
        all_id.push(element.id);
        var this_input_value = $(this).val();

        // validate input
        if (this_input_value == null || this_input_value.length == 0) {
          if ($(this).attr("data-required")) {
            $(this).closest("div").addClass("has-error");
            all_err.push(element.getAttribute("data-required"));
          }
        } else {
          $(this).closest("div").removeClass("has-error");
          post_data[element.id] = this_input_value;
        }
      });

      if (all_err.length != 0) {
        return
      }

      // disable submit button
      var submit_value = $('input[type="submit"]#submitButton').val();
      $('input[type="submit"]#submitButton').prop("disabled", true);
      $('input[type="submit"]#submitButton').val("SENDING ...");

      $.post(
        action_url,
        post_data,
        function(response) {
          var output = "";

          if (response.result == "error") {
            output = '<div class="bg-danger">' + response.message + "</div>";
          }
          else {
            output = '<div class="bg-success">' + response.message + "</div>";

            // reset input values
            $("#" + form_id)
              .find("input[type='text']")
              .val("");
            $("#" + form_id)
              .find("input[type='email']")
              .val("");
            $("#" + form_id)
              .find("textarea")
              .val("");
            $("#" + form_id)
              .find("input[type='radio']")
              .prop("checked", false);
            $("#" + form_id)
              .find($(".ajax-radio .btn"))
              .removeClass("active-icon active");
            $("#" + form_id)
              .find("input[type='checkbox']")
              .attr("checked", false);
            $("#" + form_id)
              .find($(".ajax-checkbox .btn"))
              .removeClass("active-icon active");
            $("#" + form_id)
              .find("select")
              .prop("selectedIndex", 0);
            $("#" + form_id)
              .find("select[multiple]")
              .prop("selectedIndex", -1);
          }

          // enable submit button
          $('input[type="submit"]#submitButton').prop("disabled", false);
          $('input[type="submit"]#submitButton').val(submit_value);

          // output message
          $(settings.messageWrapper).hide().html(output).slideDown();

          if (settings.scrollAfterSubmit) {
            $("html, body").animate(
              {
                scrollTop: $(settings.messageWrapper).offset().top - 200,
              },
              1000
            );
          }
        },
        "json"
      );
    });
  };
})(jQuery);
