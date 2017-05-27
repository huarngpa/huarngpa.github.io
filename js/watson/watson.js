

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons() {
	document.getElementById('runWatson').addEventListener(
		'click', watsonService);
}

function watsonService(event) {
	event.preventDefault();
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
		url: "https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27",
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic" + 
				btoa(username + ":" + password));
		},
		type: 'GET',
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
