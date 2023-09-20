$(function () {
  "use strict";
  // showing modal with effect
  $(".modal-effect").on("click", function (e) {
    e.preventDefault();
    var effect = $(this).attr("data-effect");
    $("#addDishModal").addClass(effect);
  });
  // hide modal with effect
  $("#addDishModal").on("hidden.bs.modal", function (e) {
    $(this).removeClass(function (index, className) {
      return (className.match(/(^|\s)effect-\S+/g) || []).join(" ");
    });
  });
});

$(document).ready(function () {
  $(".select2-show-search").select2({
    minimumResultsForSearch: "",
    placeholder: "Search",
    width: "100%",
  });
});
