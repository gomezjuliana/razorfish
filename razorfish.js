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

function setUp(){
	document.querySelector('.gallery-curr').src = info.photos[count].image;	
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}

document.getElementById('forward').addEventListener('click', goForward);
document.getElementById('back').addEventListener('click', goBackward);
document.querySelector('.thumbnails').addEventListener('click', changePhoto);

function goForward() {
	count = count >= info.photos.length-1 ? 0 : count+1;
	document.querySelector('.gallery-curr').src = info.photos[count].image;
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}

function goBackward(){
	count = count <= 0 ? info.photos.length-1 : count-1;
	document.querySelector('.gallery-curr').src = info.photos[count].image;
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}

function changePhoto(e){
	console.log(e);
	let targetElement = e.target || e.srcElement;
	console.log(e.path[0]);
	document.querySelector('.gallery-curr').src = targetElement.getAttribute('src');
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}

setUp();