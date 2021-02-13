const startBtnbox = document.querySelector('.start_button_box');
const startBtn = document.querySelector('.start_button');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.count');
const gameBox = document.querySelector('.game_box');
const img = document.querySelector('img')
const bgm = document.querySelector('#bgm');
const winSound = document.querySelector('#win');
const loseSound = document.querySelector('#lose');



counter.innerText = 10;

let settime;
let setinterval;

function timerCounting () {
    const startTime = Date.now();
    const delay = 10000;
    const interval = 1000;
    const printLeftTime = () => {
        const msLeftTime = delay - (Date.now() - startTime);
        const minLeftItme = Math.round(msLeftTime / (1000*60));
        const secLeftTime = Math.round(msLeftTime / 1000); 
        timer.innerText = `${minLeftItme}:${secLeftTime}`
    }

    settime = setTimeout(() => {
        timer.innerText = `00:00`
        clearInterval(setinterval)
        showResult('Lose!')
        
    },delay);
    setinterval = setInterval(printLeftTime, interval)
    
};

function makeBtn () {
    const newStartBtn = document.createElement('div');
    newStartBtn.setAttribute('class', 'start_button');
    newStartBtn.innerText = '▶'
    startBtnbox.appendChild(newStartBtn)

}

function makeBugCarrot() {
    const bugImage = document.createElement('img');
    const carrotImage = document.createElement('img');

    bugImage.setAttribute('class', 'bug_image');
    carrotImage.setAttribute('class', 'carrot_image');

    bugImage.src='img/bug.png';
    carrotImage.src='img/carrot.png';

    bugImage.style.left = Math.random() * 720 + 'px'
    bugImage.style.top = Math.random() * 220 + 'px'
    
    carrotImage.style.left = Math.random() * 720 + 'px'
    carrotImage.style.top = Math.random() * 220 + 'px'

    gameBox.appendChild(bugImage);
    gameBox.appendChild(carrotImage);
}

function showResult(result) {
    gameBox.innerHTML = `
    <div class="result">
        <span>${result}!</span>
    </div>
    `
    bgm.pause()
    makeBtn()
    if (result=="Win") {
        winSound.play()
    } else {
        loseSound.play()
    }
    clearTimeout(settime);
    clearInterval(setinterval);
}

startBtnbox.addEventListener('click', event => {
    if (event.target.classList.contains('start_button')) {
        const startBtn = document.querySelector('.start_button')
        bgm.play();
        startBtn.remove()
        gameBox.innerHTML=``
        counter.innerHTML=`10`
        timer.innerText='0:10'
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()
        makeBugCarrot()

        timerCounting()
    }
})

function pullSound (object) {
    const sound = document.createElement('audio');
    sound.src = `sound/${object}_pull.mp3`;
    document.body.appendChild(sound);
    sound.play();
    sound.onended = function () {
        sound.remove();
    }
}
gameBox.addEventListener('click', event => {
    if(event.target.classList.contains('bug_image')) {
        event.target.remove();
        const object = 'bug';
        pullSound(object);
        const count_bug = document.querySelectorAll('.bug_image').length;
        counter.innerText = count_bug;
        if (count_bug == 0) {
            showResult('Win')
        }
    } else if (event.target.classList.contains('carrot_image')){
        const object = 'carrot';
        pullSound(object);
        showResult('Lose')
    }
})

