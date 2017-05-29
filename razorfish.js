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
	document.getElementById('forward').addEventListener('click', () => goForward(info));
	document.getElementById('back').addEventListener('click', () => goBackward(info));
	for (let x = 0; x < info.photos.length; x++){
		document.getElementById(x).addEventListener('click', () => change(info, x));
	}
}

function goForward(info) {
	count >= info.photos.length-1 ? change(info, 0) : change(info, count+1);
}

function goBackward(info){
	count <= 0 ? change(info, info.photos.length-1) : change(info, count-1);
}

function change(info, count_){
	for (let x = 0; x < info.photos.length; x++){
		document.getElementById(x).classList.remove('highlight');
	}
	document.querySelector('.gallery-curr').src = info.photos[count_].image;
	document.querySelector('figure figcaption h2').textContent = info.photos[count_].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count_].date+' in '+info.photos[count_].location;
	for (let i = count_; i < info.photos.length; i++){
		document.getElementById([i]).src = info.photos[i].thumb_url;
	}
	document.getElementById([count_]).classList.add('highlight');
	count = count_
}