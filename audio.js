var audio = new Audio('sound.mp3');
audio.oncanplay = function() {
  if (document.getElementById("audio").checked) this.play()
}
function Myaudio(el) {    
  if (el.checked) {
    audio.load();
  }
}