function playSound(audioName){
    let audio=new Audio(audioName);
    audio.loop=true;
    audio.play();
}
playSound("102 Story Music Box.mp3");