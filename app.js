// Object References
let playpause = document.querySelector("#playpause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let repeat = document.querySelector("#repeat");

let audio = new Audio();
// songs array should be filled with the name of the songs in your playlist
// this is temporary, as we will fetch the songs from an API in the future
let songs = [];
// array containing names of artists in ur playlist
let artists =[];
let ext = ".mp3";
let songindex = 0;
let artistindex = 0;


// Functions
function initAudioPlayer() {
	audio.src = "audio/"+songs[songindex]+ext;
	audio.loop = false;

	// Event Handling
	playpause.addEventListener("click", playPause);
	next.addEventListener("click", nextTrack);
	prev.addEventListener("click", prevTrack);
}
//////////////////////////////
function playPause(){
	if(audio.paused){
		audio.play();
	}
	else{
		audio.pause();
	}
}
//////////////////////////////
function nextTrack() {
	if(songindex == songs.length - 1){
		songindex = 0;
		audio.src = "audio/"+songs[songindex]+ext;
	}
	else{

		songindex++;
		audio.src = "audio/"+songs[songindex]+ext;
	}
	audio.play();
}
//////////////////////////////

function prevTrack() {
	if(songindex == 0) {
		songindex = songs.length - 1;
		audio.src = "audio/"+songs[songindex]+ext;
	}
	else{
		songindex--;
		audio.src = "audio/"+songs[songindex]+ext;
	}
	audio.play();
}
//////////////////////////////



window.addEventListener("load", initAudioPlayer);