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

/*function loadJSON(callback) {
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

init();*/

/*function XHR(file, callback){
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200){
			callback(xhr.responseText);
		}
	}
	xhr.open('GET', file, true);
	xhr.send();
}

function print(response){
	console.log(response);
}

XHR('gallery_json.json', print);*/

let info = {
  "album": {
    "name": "Intel 2013 Conference Moments"
  },
  "photos": [
    {
      "id":"1",
      "image":"assets/image_1.jpg",
      "thumb_url":"assets/thumb_1.jpg",
      "title":"Experimental Projects at Intel",
      "date":"June 17, 2013",
      "location":"Richmond, Virginia"
    },
    {
      "id":"2",
      "image":"assets/image_2.jpg",
      "thumb_url":"assets/thumb_2.jpg",
      "title":"The Keynote Address Surprised Many",
      "date":"June 18, 2013",
      "location":"Raleigh, North Carolina"
    },
    {
      "id":"3",
      "image":"assets/image_3.jpg",
      "thumb_url":"assets/thumb_3.jpg",
      "title":"Jonathan Mathers",
      "date":"July 16, 2013",
      "location":"Austin, Texas"
    },
    {
      "id":"4",
      "image":"assets/image_4.jpg",
      "thumb_url":"assets/thumb_4.jpg",
      "title":"Next Generation Chipsets",
      "date":"August 1, 2013",
      "location":"New York, New York"
    },
   {
      "id":"5",
      "image":"assets/image_5.jpg",
      "thumb_url":"assets/thumb_5.jpg",
      "title":"Operating Systems of the Future",
      "date":"September 3, 2013",
      "location":"Chicago, Illinois"
    },
    {
      "id":"6",
      "image":"assets/image_6.jpg",
      "thumb_url":"assets/thumb_6.jpg",
      "title":"Sponsors of Tomorrow Booth",
      "date":"September 14, 2013",
      "location":"San Francisco, California"
    }
  ]
}

function print(obj){
	document.getElementById('photo').src = obj.photos[5].image;
	document.querySelector('.gallery figure figcaption h1').textContent = obj.photos[5].title;
	document.querySelector('.gallery figure figcaption p').textContent = 'This photo was taken in '+obj.photos[5].location+' on '+obj.photos[5].date;
}

window.onload = function goForward(){
	document.getElementById('forward').onclick = function fun(){
		console.log('clicked!');
	}
}

function goBackward(){

}

print(info);