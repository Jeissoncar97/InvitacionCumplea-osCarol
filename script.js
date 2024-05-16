let sound = new Audio("./Assents/vals.mp3")
sound.volume = 0.5

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const progress = document.querySelector('.progress')

play.addEventListener('click', () =>{
    sound.play()
    play.style.display = "none"
    pause.style.display = "block"
    updateProgressBar();
})

pause.addEventListener('click', () =>{
    sound.pause()
    play.style.display = "block"
    pause.style.display = "none"
})

function updateProgressBar() {
    setInterval(() => {
        const progressValue = (sound.currentTime / sound.duration) * 100;
        progress.value = progressValue;
    }, 100);
}

simplyCountdown('#count', {
    year: 2024, // required
    month: 7, // required
    day: 20, // required
    hours: 19, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Día', plural: 'Días' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Min', plural: 'Min' },
        seconds: { singular: 'Seg', plural: 'Seg' }
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });