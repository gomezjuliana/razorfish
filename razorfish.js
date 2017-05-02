/*function fetchJSONFile(path, callback){
	let httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
				if (callback) callback(data);
			}
		}
	};
	httpRequest.open('GET', path);
	httpRequest.send();
}

fetchJSONFile('gallery_json.js', function(data){
	console.log(data);
});*/

function loadJSON(callback) {
	let jsonResponse = new XMLHttpRequest();
		jsonResponse.overrideMimeType("application/json");
	jsonResponse.open('GET', 'gallery_json.json', true);
	jsonResponse.onreadystatechange = function () {
		if (jsonResponse.readyState == 4 && jsonResponse.status == "200") {
			callback(jsonResponse.responseText);
		}
	};
	jsonResponse.send(null);
}

function init(){
	loadJSON(function(response){
		console.log(JSON.parse(response));
	});
}

init();