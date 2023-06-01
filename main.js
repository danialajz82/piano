const pianoKeys = document.querySelectorAll(".piano-keys .key");
voloumsidebar = document.querySelector(".volume-slider input")
keyscheckbox = document.querySelector(".keys-checkbox input")

let allkeys = [], 
 audio = new Audio("tunes/a.wav");


const playTune = (key) =>{
    audio.src =`tunes/${key}.wav`;
    audio.play();


    const clickedKey = document.querySelector(`[data-key="${key}"]`);

    clickedKey.classList.add("active");
setTimeout(() => {
    clickedKey.classList.remove("active");
},150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click" , ()=> playTune(key.dataset.key))
    
});

const handelvoloume = (e) =>{

    audio.volume = e.target.value;
}

const showHidekeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedkey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);
};

keyscheckbox.addEventListener("click" , showHidekeys)
voloumsidebar.addEventListener("input" , handelvoloume)
document.addEventListener("keydown" , pressedkey);

