let audio = document.getElementById ("audio");

function stop(){
    audio.pause();
    audio.currentTime = 0;


}
 
function play(){
    audio.play();
}
function pause(){
    audio.pause();
}
function speedUp(){
    audio.playbackRate += 0.3;

}
function slowDown(){
    audio.playbackRate -= 0.3;


}