

function watsonService(event) {
	// Prevents default submit action in your forms
	event.preventDefault();
	// Instantiates an Ajax object
	var req = new XMLHttpRequest();
	// Instantiates the payload
	var payload = {};
	payload
	// Asynchronous request settings
	req.open('POST', 
		'https://gateway.watsonplatform.net/natural-language-understanding/api', 
		true);
	// Tells Ajax that we're going to send JSON with the POST
	req.setRequestHeader('Content-Type', 'application/json');
	req.addEventListener('load', function() {
		if(req.status >= 200 && req.status < 400) {
			// Log the response to the text area
			document.getElementById("postResult").textContent = req.responseText;
		} else {
			console.log("Error in network request: " + 
				req.statusText);
		}
	});
	// Fires off the Ajax request, godspeed sir!
	req.send(JSON.stringify(payload));
}


function watsonService(event) {
	var username = document.getElementById('userName').textContent;
	var password = document.getElementById('passKey').textContent;
	var params = {};
	params['text'] = document.getElementById('inputText');
	params['features'] = {};
	params['features']['concepts'] = {};
	params['features']['concepts']['limit'] = 10;
	console.log(JSON.stringify(params));
	// JQuery and Ajax Code for network request
	$.ajax({
		url: "https://gateway.watsonplatform.net/natural-language-understanding/api",
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic" + 
				btoa(username + ":" + password));
		},
		type: 'PUT',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(params),
		success: function(response) {
			console.log(JSON.stringify(response));
		},
		error: function(response) {
			console.log("Error in network request: " + 
				response.statusText);
		}
	});
}


function watsonService(event) {
	event.preventDefault();
	var username = document.getElementById('userName').textContent;
	var password = document.getElementById('passKey').textContent;
	var urlString = document.getElementById('inputText').textContent;
	urlString = encodeURIcomponent(urlString);
	var req = new XMLHttpRequest();
	req.open('GET', 
		'https://gateway.watsonplatform.net/natural-language-understanding/api' + 
		'?url='+ urlString + '&' + ',us&units=imperial&APPID=' + apiKey, true);
	req.addEventListener('load', function() {
		if(req.status >= 200 && req.status < 400) {
			var response = JSON.parse(req.responseText);
			console.log(req.responseText);
		} else {
			console.log("Error in network request: " +
				req.statusText);
		}
	});
	req.send(null);
}


https://www.youtube.com/watch?v=P86N9FqNqso