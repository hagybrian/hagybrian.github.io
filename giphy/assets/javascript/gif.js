
$(document).ready(function() {

 var shows = ["The Sopranos", "The Simpsons", "Breaking Bad", "Family Guy"];


  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".show-button", function() {
    $("#shows").empty();
    $(".show-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=4mDC9ez5rltWKLfi0i0wtYZMWm5nCAsR&limit=20";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .done(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var showDiv = $("<div class=\"show-result\">");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;

        var showImage = $("<img>");
        showImage.attr("src", still);
        showImage.attr("data-still", still);
        showImage.attr("data-animate", animated);
        showImage.attr("data-state", "still");
        showImage.addClass("show-image");

        showDiv.append(p);
        showDiv.append(showImage);

        $("#shows").append(showDiv);
      }
    });
  });

  $(document).on("click", ".show-image", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
    
  });

  $("#add-show").on("click", function(event) {
    event.preventDefault();
    var newshow = $("input").eq(0).val();

    if (newshow.length > 2) {
      shows.push(newshow);
    }

    populateButtons(shows, "show-button", "#show-buttons");

  });

  populateButtons(shows, "show-button", "#show-buttons");
});
