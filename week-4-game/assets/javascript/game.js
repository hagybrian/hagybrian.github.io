
$(document).ready(function() {

  var yourNumber = 0;
  var randomNum = createRandom();

  var wins = 0;
  var losses = 0;
  var crystals;

  function randomCrystals() {
    return {
      red: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/blue_stuff.png"
      },
      blue: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crist-all.jpg"
      },
      yellow: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/lotr.jpeg"
      },
      green: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/crystal.jpg"
      }
    };
  }

  function createRandom() {
    return Math.floor(Math.random() * 102) + 19;
  }


  function reset() {
    yourNumber = 0;
    crystals = randomCrystals();
    randomNum = createRandom();
    $("#random-number").html("<p>" + randomNum + "</p>");
  }

  function refresh(didUserWin) {
    $("#wins-losses").empty();

    if (didUserWin === true) {
      $("#wins-losses").append($("<p>").text("You won!!"));
      reset();
      createNumber();
    }
    else if (didUserWin === false) {
      $("#wins-losses").append($("<p>").text("You lost!!"));
      reset();
      createNumber();
    }
    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(losses);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#wins-losses").append(pWins);
    $("#wins-losses").append(pLosses);
  }

  function createCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystals").append(crystalDiv);
    }
  }

  function updateNumber(crystal) {
    yourNumber += crystals[crystal.attr("data-name")].points;
  }

  function createNumber() {
    var scoreNumDiv = $("<div id='score-number'>").html("<p>" + yourNumber + "</p>");
    $("#total").html();
    $("#total").html(scoreNumDiv);
  }
  reset();
  refresh();
  createCrystals();
  createNumber();

  $(".crystals-button").on("click", function(event) {
    updateNumber($(this));
    createNumber();
    if (yourNumber === randomNum) {
      wins++;
      reset();
      refresh(true);
    }
    else if (yourNumber > randomNum) {
      losses++;
      reset();
      refresh(false);
    }
  });

});