// function starts dataupload
function startDataUpload() {
	// implement alert
	alert ("start data upload");
	// assign field entries to variables
	var loc = document.getElementById("location").value;
	var question = document.getElementById("question").value;
	var correct = document.getElementById("correct").value;
	var answer1 = document.getElementById("answer1").value;
	var answer2 = document.getElementById("answer2").value;
	var answer3 = document.getElementById("answer3").value;
	// create poststring
	var postString = "location="+loc +"&question="+question + "&correct="+correct +"&answer1="+answer1 +"&answer2="+answer2 +"&answer3="+answer3;
	//call processing function on poststring
	processData(postString);
	// implement another alert
	alert (postString);
}

var client;
// create functino to process data
function processData(postString) {
	client = new XMLHttpRequest();
	// call /uploadData functionality
	client.open('POST','http://developer.cege.ucl.ac.uk:30299/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}
// wait for response from data server
// process response when received
function dataUploaded() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
	// change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}

