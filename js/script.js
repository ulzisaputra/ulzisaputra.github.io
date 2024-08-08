$(document).ready(function () {
  setTimeout(function () {
    $.each($(".bar-value"), function (i, e) {
      console.log(e);

      $(this).css("width", $(this).attr("data-percentage") + "%");
    });
  }, 500);
});
