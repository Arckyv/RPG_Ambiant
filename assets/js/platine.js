function play(recordPlayer) { recordPlayer.play(); }

function pause(recordPlayer) { recordPlayer.pause(); }

document.addEventListener('DOMContentLoaded', function () {
  var displayer = document.querySelector('#displayer');
  var audioInput = document.querySelector('#audio_in');

  audioInput.addEventListener('change', function (event) {
    var file = this.files[0];
    var fileName = file.name;

    var playerWrapper = document.createElement('div');
    playerWrapper.classList.add('player_wrapper');

    //create label element
    var label = document.createElement('label');
    label.innerText = fileName;
    label.htmlFor = fileName;

    //create an URL object from the file blob received within input
    var audioUrl = URL.createObjectURL(this.files[0]);

    //create a new Audio object using the created URL
    var audio = new Audio(audioUrl);
    audio.id = fileName;
    audio.controls = true;
    audio.classList.add('jukeBox');

    playerWrapper.appendChild(label);
    playerWrapper.appendChild(audio);

    displayer.appendChild(playerWrapper);
  });

  console.log(audioInput);
});
