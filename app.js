// Object References
let playpause = document.querySelector("#playpause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let repeat = document.querySelector("#repeat");

let audio = new Audio();
// songs array should be filled with the name of the songs in your playlist
// this is temporary, as we will fetch the songs from an API in the future
const songs = [
	{
	  id: 1,
	  artist: 'Burna Boy',
	  year: 2019,
	  imageUrl: '/',
	  track: '/audio/01 Mark My Words.mp3'
	},
	{
		id: 2,
		artist: 'Olamide',
		year: 2019,
		imageUrl: '/',
		track: '/audio/07 No Pressure.mp3'
	  },
	  {
		id: 3,
		artist: 'Wizkid',
		year: 2019,
		imageUrl: '/',
		track: '/audio/09 The Feeling.mp3'
	  }
	]
// array containing names of artists in ur playlist

let artists =[];  
let ext = ".mp3";
let songIndex = 0;
let artistIndex = 0;


// Functions 
function initAudioPlayer() {
	audio.src = "audio/"+songs[songIndex]+ext;
	// audio.src = songs[songIndex].track       ......!!!!check this
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
		// audio.src = songs[songIndex].track       .......!!! check this
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
		// audio.src = songs[songIndex].track       .......!!! check this
	}
	else{
		songindex--;
		audio.src = "audio/"+songs[songindex]+ext;
		// audio.src = songs[songIndex].track       .......!!! check this
	}
	audio.play();
}
//////////////////////////////



window.addEventListener("load", initAudioPlayer);