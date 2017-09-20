

$(document).ready(function() {


	var yourNumber = 0;
	var random = random();

	var wins = 0;
	var losses = 0;
	var crystals = 0;
	var i = "";

	var images = ["assets/images/blue_stuff.png", "assets/images/crist-all.jpg", "assets/images/lotr.jpeg", "assets/images/crystal.jpg"];

     
	function random() {
		return Math.floor(Math.random() * (102)) + 19;
	};


	function displayImage() {
  $("#crystal-images").html(images[i]);

	}

 



	function crystalRandom(){
		return {
			blue: { 
				    points: Math.floor(Math.random() * 12) + 1,
	        		imageUrl: "assets/images/blue_stuff.png"
			},
			cristal: {
				    points: Math.floor(Math.random() * 12) + 1,
	        		imageUrl: "assets/images/crist-all.jpg"			
			},
			lotr: {
				    points: Math.floor(Math.random() * 12) + 1,
	        		imageUrl: "assets/images/lotr.jpeg"			
			},
			crystal: {
				    points: Math.floor(Math.random() * 12) + 1,
	        		imageUrl: "assets/images/crystal.jpg"			
			},
		}
	
	}




	function reset() {
		yourNumber = 0;
		crystals = crystalRandom();
		random = random();
		("#random-number").html("<p>" + random + "</p>");
		console.log(random);
	}

	$("#random-number").html("<p>" + random + "</p>");


displayImage();



});








