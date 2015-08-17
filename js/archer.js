soundManager.setup({
  url: '../soundManager/swf/',
  onready: function() {
    var mySound = soundManager.createSound({
      id: 'aSound',
      url: 'archer/sterling-sounds/22-black.mp3'
    });

  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});

button1.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: '22-black',
  url: 'archer/sterling-sounds/22-black.mp3'
});
	mySound.play();

});

button2.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'Cant-Or-Wont-Either',
  url: 'archer/sterling-sounds/Cant-Or-Wont-Either.mp3'
});
	mySound.play();

});

button3.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'Exercise-terminated!',
  url: 'archer/sterling-sounds/Exercise-terminated!.mp3'
});
	mySound.play();

});

button4.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'jenga-is-a-game',
  url: 'archer/sterling-sounds/jenga-is-a-game.mp3'
});
	mySound.play();

});

button5.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'lame-codename',
  url: 'archer/sterling-sounds/lame-codename.mp3'
});
	mySound.play();

});

button6.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'pay-for-lunch',
  url: 'archer/sterling-sounds/pay-for-lunch.mp3'
});
	mySound.play();

});

button7.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'ugly-cry',
  url: 'archer/sterling-sounds/ugly-cry.mp3'
});
	mySound.play();

});

button8.addEventListener('click', function(){
	mySound = soundManager.createSound({
		id: 'whore-island',
  url: 'archer/sterling-sounds/whore-island.mp3'
});
	mySound.play();

});

