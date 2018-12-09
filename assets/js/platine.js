//create a div.player_wrapper element with a passed file
function createPlayerWrapper(file)
{
  var fileName = file.name;

  var playerWrapper = document.createElement('div');
  playerWrapper.classList.add('player_wrapper');

  //create label element
  var label = document.createElement('label');
  label.innerText = fileName;
  label.htmlFor = fileName;

  //create an URL object from the file blob received within input
  var audioUrl = URL.createObjectURL(file);

  //create a new Audio object using the created URL
  var audio = new Audio(audioUrl);
  audio.id = fileName;
  audio.controls = true;
  audio.classList.add('jukeBox');

  //appending elements to wrapper
  playerWrapper.appendChild(label);
  playerWrapper.appendChild(audio);

  return playerWrapper;
}

//execute once DOM is loaded - avoid some get before loaded errors
document.addEventListener('DOMContentLoaded', function () {
  //basic selectors
  var displayer = document.querySelector('#displayer');
  var audioInput = document.querySelector('#audio_in');

  //execute once file input has changed
  audioInput.addEventListener('change', function (event) {
    var files = this.files;

    //create a player wrapper and append to displayer for each file
    for (var i = 0; i < files.length - 1; i++) {
      var playerWrapper = createPlayerWrapper(files[i]);

      //append to displayer
      displayer.appendChild(playerWrapper);
    }
  });
});
