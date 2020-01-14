$(document).ready(function() {
  $("p").click(function() {
    $("#highlite").addClass("border");

    $("p").click(function() {
      $(".border").removeClass();
    });
  });
});