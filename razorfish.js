function XHR(file, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
        	let info = JSON.parse(xhr.responseText);
            callback(info);
        }
    }
    xhr.open('GET', file, true);
    xhr.send();
}

XHR('/data.json', setUp);

let count = 0;

function setUp(info){
	change(info, count);
	document.getElementById('forward').addEventListener('click', goForward(info));
	document.getElementById('back').addEventListener('click', () => goBackward(info));
	// document.querySelector('.thumbnails').addEventListener('click', changePhoto);
}

function goForward(info) {
	return function() {
		document.getElementById([count]).classList.remove('highlight');
		count = count >= info.photos.length-1 ? 0 : count+1;
		change(info, count);
	}
}

function goBackward(info){
	document.getElementById([count]).classList.remove('highlight');
	count = count <= 0 ? info.photos.length-1 : count-1;
	change(info, count);
}

function change(info, count){
	document.querySelector('.gallery-curr').src = info.photos[count].image;
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
	for (let i = count; i < info.photos.length; i++){
		document.getElementById([i]).src = info.photos[i].thumb_url;
	}
	document.getElementById([count]).classList.add('highlight');
}

function changePhoto(e){
	console.log(e);
	let targetElement = e.target || e.srcElement;
	console.log(e.path[0]);
	document.querySelector('.gallery-curr').src = targetElement.getAttribute('src');
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}