
function Character(name, profession, gender, age, strength, HitPoints, PrintStats) {

	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.PrintStats = function() {
		console.log("name: " + this.name + "profession: " + this.profession + "gender: " + this.gender + "age: " + this.age + "strength: " + this.strength + "HitPoints: " + this.HitPoints);
	}
}

var dude = new Character("dude", "stuff", "male", 50, 80 )
console.log(dude);

