// Object References
let playpause = document.querySelector("#playpause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let repeat = document.querySelector("#repeat");
let audio = new Audio();
let songindex = 0;
// songs array should be filled with the name of the songs in your playlist
// this is temporary, as we will fetch the songs from an API in the future
// let songs = ["01","fifth","husband","rabiu","djsnake"];
// let artists = ["Aerosmith","Wizkid","Eminem","Rabiu","Bieber"];
// let ext = ".mp3";
// let songindex = 0;
// let artistindex = 0;

const songs = [
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/01.mp3'
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/jaded.mp3'
	},
	{
		artist: 'Akon',
		year: 2017,
		imageUrl: '/',
		track: 'audio/unpredictable.mp3'
	}
]
// array containing names of artists in ur playlist

// Functions 
function initAudioPlayer() {
	//audio.src = "audio/"+songs[songindex]+ext;
	audio.src = songs[songindex].track
	audio.loop = false;
	// Event Handling
	playpause.addEventListener("click", playPause);
	next.addEventListener("click", nextTrack);
	prev.addEventListener("click", prevTrack);
	repeat.addEventListener("click", repeatSingle);
	repeat.removeEventListener('click', removeRepeat)

//////////////////////////////
function playPause(){
	if(audio.paused){
		audio.play();
		classToggler();
	}
	else{
		audio.pause();
		classToggler();
	}
}
//////////////////////////////
function classToggler(){
	if(playpause.classList.contains("fa-play")){
		playpause.classList.toggle("fa-pause");
	}
	else{
		playpause.classList.toggle("fa-play");
	}
}
//////////////////////////////
function nextTrack() {
	if(songindex == songs.length - 1){
		songindex = 0;
		audio.src = songs[songindex].track;
		//playPause();	
	}
	else{
		songindex++;
		audio.src = songs[songindex].track;
		// playPause();	
	}
	audio.play();
	playpause.classList.add("fa-pause");
}
//////////////////////////////
function prevTrack() {
	if(songindex == 0) {
		songindex = songs.length - 1;
		audio.src = songs[songindex].track;
	}
	else{
		songindex--;
		audio.src = songs[songindex].track;
	}
	audio.play();
	playpause.classList.add("fa-pause");
}
//////////////////////////////
// function repeatAll() {
// 	if(audio.play() && repeatSingle == false){ 
// 		return songs[songindex].track.loop = true 
// 	}
// 	else return songs[songindex].track.loop = false
// }

function repeatSingle(){
	let x = document.getElementById('repeat')
	x.style.backgroundColor = 'rgb(61, 51, 51)'
	x.style.borderRadius = '50%'
	x.style.width = '25px'
	x.style.height = '25px'
	return audio.loop = true;
}
function removeRepeat(){
	let y = document.getElementById('repeat')
	y.style.backgroundColor = 'none'
	return audio.loop = false
}

//////////////////////////////
window.addEventListener("load", initAudioPlayer)
}