var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.play();
	let slower = document.querySelector("#myVideo").playbackRate = video.playbackRate * .9;
	console.log("New speed is");
	console.log(video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.play();
	let faster = document.querySelector("#myVideo").playbackRate = video.playbackRate / .9;
	console.log("New speed is");
	console.log(video.playbackRate);
	

});

document.querySelector("#skip").addEventListener("click", function() {
	video.play();
	let skip = document.querySelector("#myVideo").currentTime = video.currentTime + 5;
	console.log("Current location");
	console.log(video.currentTime);

	if (video.duration <= video.currentTime){
		video.currentTime = 0;
		console.log("Play from start ")
	} 

	else {console.log ("Skipped to " + video.currentTime)
	video.play()
	
	;}

});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		let mute = document.querySelector("#mute").innerHTML = "Unmute"
	}
	else
	{
		video.muted = false;
		let mute = document.querySelector("#mute").innerHTML = "Mute"
	}

});

document.querySelector("#old").addEventListener("click", function(){
	video.classList.add("oldTime");

});

document.querySelector("#original").addEventListener("click", function(){
	video.classList.remove("oldTime");

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
});
