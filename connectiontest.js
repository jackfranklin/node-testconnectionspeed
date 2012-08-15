var request = require("request");

//download the file
//check every 5 milliseconds to see when its done
//calculate speed
//jquery file is 93KB
//

var url = "http://code.jquery.com/jquery.js";
var done = false;
var timer = 0;
var timeOut;
var size = 252;


var checkStatus = function() {
  if(done == true) {
    clearInterval(timeOut);
    console.log("DONE");
    console.log("Downloaded", size, "KB in", timer, "milliseconds");
    console.log(timer/size, "milliseconds/kb");
  } else {
    timer++;
  };
};

var timeOut = setInterval(function() {
  checkStatus();
}, 1);

request(url, function(err, resp, body) {
  done = true;
});

