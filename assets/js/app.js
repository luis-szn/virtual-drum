'use strict';

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('buttons-container').appendChild(div);
}

const produceSoundButton = (sounds) => {
    Object.keys(sounds).forEach(createDiv);
}

produceSoundButton(sounds);

const playSound = (letter) => {
    const audio = new Audio(`./assets/sounds/${sounds[letter]}`);
    audio.play();
}

const addEffect = (letter) => document.getElementById(letter).classList.add('active');

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive)
};
const activateDiv = (event) => {
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase();

    const validLetter = sounds.hasOwnProperty(letter)
    if(validLetter){
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
}

document.getElementById('buttons-container').addEventListener('click', activateDiv);

window.addEventListener('keydown',activateDiv)