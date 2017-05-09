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

XHR('http://localhost:8000/Documents/Code-2017/razorfish/data.json', setUp);

let count = 0;

function setUp(info){
	change(info, count);
}

document.getElementById('forward').addEventListener('click', goForward);
document.getElementById('back').addEventListener('click', goBackward);
document.querySelector('.thumbnails').addEventListener('click', changePhoto);

function goForward(info) {
	console.log(info)
	count = count >= info.photos.length-1 ? 0 : count+1;
	change(info, count);
}

function goBackward(info){
	count = count <= 0 ? info.photos.length-1 : count-1;
	change(info, count);
}

function changePhoto(e){
	console.log(e);
	let targetElement = e.target || e.srcElement;
	console.log(e.path[0]);
	document.querySelector('.gallery-curr').src = targetElement.getAttribute('src');
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
}

function change(info, count){
	document.querySelector('.gallery-curr').src = info.photos[count].image;
	document.querySelector('figure figcaption h2').textContent = info.photos[count].title;
	document.querySelector('figure figcaption p').textContent = 'This photo was taken on '+info.photos[count].date+' in '+info.photos[count].location;
	document.getElementById('one').classList.add('meow');
}