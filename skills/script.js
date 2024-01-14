function playSound(audioName){
    let audio=new Audio(audioName);
    audio.loop=true;
    audio.play();
}
playSound("06. Birch Pokémon Lab.mp3");