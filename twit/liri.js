var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");


var spotify = new Spotify({
  id: "6bf0b04cf83d4ad5be1c26108a3b710f",
  secret: "820ee43a0a324a24979f6c021f756a0a"
});
