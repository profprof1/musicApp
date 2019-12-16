// Object References
let playpause = document.querySelector("#playpause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let repeat = document.querySelector("#repeat");
let volumeslider = document.querySelector("#volumeslider");
let speaker = document.querySelector("#speaker");
let audio = new Audio();
let songindex = 0;

const songs = [
	{
		artist: '',
		year: 2019,
		imageUrl: '/',
		track: 'audio/01.mp3'
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/02.mp3'
	},
	{
		artist: 'Akon',
		year: 2017,
		imageUrl: '/',
		track: 'audio/03.mp3'
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/04.mp3'
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/05.mp3'
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
	//repeat.addEventListener("click", repeatSingle);
	volumeslider.addEventListener("mousemove", setVolume);
	speaker.addEventListener("click", mute);
	audio.addEventListener("ended", nextTrack);
	repeat.addEventListener("click", repeatSingle);
}
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
	}
	else{
		songindex++;	
	}
	audio.src = songs[songindex].track;
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
function mute() {
	if(audio.muted) {
		volumeToggler();
		audio.muted = false;
	}
	else{
		audio.muted = true;
		volumeToggler();
	}
}
//////////////////////////////
function volumeToggler(){
	if(speaker.classList.contains("fa-volume-up")) {
		speaker.classList.remove("fa-volume-up");
		speaker.classList.add("fa-volume-down");
	}
	else{
		speaker.classList.remove("fa-volume-down");
		speaker.classList.add("fa-volume-up");
	}
}
//////////////////////////////
function setVolume() {
	audio.volume = volumeslider.value / 100;
}
//////////////////////////////

// function repeatAll() {
// 	if(audio.play() && repeatSingle == false){ 
// 		return songs[songindex].track.loop = true 
// 	}
// 	else return songs[songindex].track.loop = false
// }

//////////////////////////////
function repeatSingle(){
	if(audio.loop) {
		audio.loop = false;
		repeat.style.backgroundColor = '';
		repeat.style.borderRadius = '';
		repeat.style.width = '';
		repeat.style.height = '';
	}
	else {
		repeat.style.backgroundColor = 'rgb(61, 51, 51)';
		repeat.style.borderRadius = '50%';
		repeat.style.width = '25px';
		repeat.style.height = '25px';
		audio.loop = true;
	}
}
//////////////////////////////
window.addEventListener("load", initAudioPlayer)
