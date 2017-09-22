
$(document).ready(function() {


  var yourNumber = 0;

  // Generates the random "target number" we will try to reach.
  var randomNum = createRandom();

  var wins = 0;
  var losses = 0;
  var crystals;

  // Function that generates random values for our crystals and returns our crystals object.
  function randomCrystals() {
    // Crystals object.
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

  // Function that resets the game.
  function setGame() {
    // Make our current total number 0.
    yourNumber = 0;
    // Generate random crystal values.
    crystals = randomCrystals();
    // Generate a random target number and render it to the page.
    randomNum = createRandom();
    $("#random-number").html("<p>" + randomNum + "</p>");
  }

  // Function that handles updating the page.
  function refresh(didUserWin) {
    $("#wins-losses").empty();

    // If the user won...
    if (didUserWin === true) {
      // Show victory message, restart the game, and render the new "current guess" number.
      $("#wins-losses").append($("<p>").text("You won!!"));
      setGame();
      renderMatchingNumber();
    }
    // If the user lost...
    else if (didUserWin === false) {
      // Show defeat message, restart the game, and render the new "current guess" number.
      $("#wins-losses").append($("<p>").text("You lost!!"));
      setGame();
      renderMatchingNumber();
    }

    // Building our win/loss display and appending it to the page.
    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(losses);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#wins-losses").append(pWins);
    $("#wins-losses").append(pLosses);
  }

  // Function to render our crystals to the page.
  function renderCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystals").append(crystalDiv);
    }
  }

  // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.
  function updateMatchingNumber(crystal) {
    // Update our "current guess" number based on which crystal was clicked.
    yourNumber += crystals[crystal.attr("data-name")].points;
  }

  // Function that will render your "current guess" number to the page.
  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").html("<p>" + yourNumber + "</p>");
    $("#total").html();
    $("#total").html(scoreNumDiv);
  }

  // Call our functions to start the game!
  setGame();
  refresh();
  renderCrystals();
  renderMatchingNumber();

  // Here we create an on.click event for the crystals.
  $(".crystals-button").on("click", function(event) {
    // Update our "current guess" number and re-render it.
    updateMatchingNumber($(this));
    renderMatchingNumber();

    // Check to see if we have won or lost.
    // If our current guess number equals the target number..
    if (yourNumber === randomNum) {
      // Increment wins, restart the game, and update the page.
      wins++;
      setGame();
      refresh(true);
    }
    // If our guess number exceeded our target number...
    else if (yourNumber > randomNum) {
      // Increment losses, restart the game, and update the page.
      losses++;
      setGame();
      refresh(false);
    }
  });

});