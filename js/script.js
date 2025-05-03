$("#search-button").on("click", function () {
  $.ajax({
    url: "http://omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "7e195fe4",
      s: $("#search-input").val(),
    },
    success: function (result) {
      console.log(result);
    },
  });
});
