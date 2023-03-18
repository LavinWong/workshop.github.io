/**
 * Functionality specific SmartBlock
 *
 * Provides helper functions to enhance the U experience.
 */

(function ($) {

  $(".include").each(function () {
    if (!!$(this).attr("file")) {
      var $includeObj = $(this);
      $(this).load($(this).attr("file"), function (html) {
        $includeObj.after(html).remove();
      });
    }
  });

  $("#nav-placeholder").load("nav.html");


})(jQuery);