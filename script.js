function playSound(audioName){
    let audio=new Audio(audioName);
    audio.loop=true;
    audio.play();
}
playSound("pacman_beginning.wav");

function buttonClicked(prop) {
  // alert('Button Clicked!');
  document.getElementById('loader-overlay').style.display = 'flex';

  switch (prop) {
    case 'Projects' :
      console.log("project Clock")
      window.location.href = 'projects/index.html';
      break;
    
    case 'Experience' :
      console.log("Experience Clock")
      window.location.href = 'expandcerti/index.html';
      break;

    case 'Skills' :
      window.location.href = 'skills/index.html';
      console.log("Skills Clock")
      break;

    case 'Contact' :
      console.log("Contact Clock")
      window.location.href = 'feedback/index.html';
      break;
  }
}

window.onload = function() {
  document.getElementById('loader-overlay').style.display = 'none';
};