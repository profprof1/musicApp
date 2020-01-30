// Object References
let playpause = document.querySelector("#playpause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let repeat = document.querySelector("#repeat");
let volumeslider = document.querySelector("#volumeslider");
let speaker = document.querySelector("#speaker");
let audio = new Audio();
let songindex = 0;
// let t1 = document.querySelectorAll('#track1')

  
const songs = [
	{
		artist: 'Justin Beiber',
		year: 2019,
		imageUrl: '/',
		track: `audio/02 I'll Show You.mp3`,
		id:1
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/06 Company.mp3',
		id:2
	},
	{
		artist: 'Akon',
		year: 2017,
		imageUrl: '/',
		track: 'audio/03 What Do You Mean.mp3',
		id:3
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/04 Sorry.mp3',
		id:4
	},
	{
		artist: 'Bieber',
		year: 2019,
		imageUrl: '/',
		track: 'audio/01 Mark My Words.mp3',
		id:5
	}
]



// Functions 
const initAudioPlayer = () => {
	//audio.src = "audio/"+songs[songindex]+ext;
	audio.src = songs[songindex].track
	audio.loop = false;
	// Event Handling
	playpause.addEventListener("click", playPause);
	next.addEventListener("click", nextTrack);
	prev.addEventListener("click", prevTrack);
	volumeslider.addEventListener("mousemove", setVolume);
	speaker.addEventListener("click", mute);
	audio.addEventListener("ended", nextTrack);
	repeat.addEventListener("click", repeatSingle);
	// Adding eventlistener to all row tracks to play songs
	// t1.forEach(item => {
	// 	item.addEventListener('click',clickRow) 
	// });
}

////////////////////////// 


//handle table row play track
// const clickRow = el =>  {
// 	if(songs[songindex]){
// 		audio.src = songs[songindex].track
// 		while(audio.paused){
// 			audio.play()
// 			classToggler()
// 		 }
// 	}	
// }

////////////////////////////
const playPause = () =>{
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
const classToggler = () =>{
	if(playpause.classList.contains("fa-play")){
		playpause.classList.toggle("fa-pause");
	}
	else{
		playpause.classList.toggle("fa-play");
	}
}
//////////////////////////////
const nextTrack = () => {
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
const prevTrack = () => {
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
const mute = () => {
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
const volumeToggler = () => {
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
const setVolume = () => {
	audio.volume = volumeslider.value / 100;
}
//////////////////////////////


const repeatSingle = () => {
	if(audio.loop) {
		audio.loop = false;
		repeat.style.color = '';
		repeat.style.borderRadius = '';
		repeat.style.width = '';
		repeat.style.height = '';
	}
	else {
		audio.loop = true;
		repeat.style.color = 'rgb(61, 51, 51)';
		repeat.style.borderRadius = '50%';
		repeat.style.width = '25px';
		repeat.style.height = '25px';
	}
}

//////////////////////////////
window.addEventListener("load", initAudioPlayer)
