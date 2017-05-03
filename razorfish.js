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

let count = 0;

let prevImg = document.querySelector('.gallery-prev');
let currImg = document.querySelector('.gallery-curr');
let nextImg = document.querySelector('.gallery-next');

function setUp(){
	const prev = count-1 < 0 ? info.photos.length-1 : count-1;
	const next = count+1 >= info.photos.length ? 0 : count+1;
	console.log(prev);
	console.log(next);
	prevImg.src = info.photos[0].image;
	currImg.src = info.photos[1].image;
	nextImg.src = info.photos[2].image;	
	prevImg.classList.remove('gallery-prev-curr');
	nextImg.classList.remove('gallery-next-curr');
	currImg.classList.remove('gallery-curr-prev', 'gallery-curr-next');
}

window.onload = function clickForward(){
	document.getElementById('forward').onclick = function goForward(){
		nextImg.classList.add('gallery-next-curr');
		currImg.classList.add('gallery-curr-prev');
		count = count >= info.photos.length-1 ? 0: count+1;

		//currImg.addEventListener('transitionend', setUp)
	}
}

window.onload = function clickBackward(){
	document.getElementById('back').onclick = function goBackward(){
		prevImg.classList.add('gallery-prev-curr');
		currImg.classList.add('gallery-curr-next');
		count = count <= 0 ? info.photos.length-1 : count -1;
	}

}

setUp();