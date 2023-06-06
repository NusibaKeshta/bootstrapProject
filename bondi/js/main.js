$("#our-work-filters [data-key]").on("click", function () {
  let key = $(this).data("key");
  let results = $("#filter-result > [data-filter]");

  for (let index = 0; index < results.length; index++) {
    let element = results[index];

    if (key === "All") {
      $(element).fadeIn(300);
    } else if ($(element).data("filter") === key) {
      $(element).fadeIn(300);
    } else {
      $(element).fadeOut(300);
    }
  } // end for

  $("#our-work-filters [data-key]").removeClass("active");
  $(this).addClass("active");
});