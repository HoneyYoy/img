const board = document.getElementById('board');
const cardsArray = [
    'img/1.png', 'img/1.png',
    'img/2.png', 'img/2.png',
    'img/3.png', 'img/3.png',
    'img/4.png', 'img/4.png',
    'img/5.png', 'img/5.png',
    'img/6.png', 'img/6.png',
    'img/7.png', 'img/7.png',
    'img/8.png', 'img/8.png',
    'img/9.png', 'img/9.png',
    'img/10.png', 'img/10.png',
    'img/11.png', 'img/11.png',
    'img/12.png', 'img/12.png',
    'img/13.png', 'img/13.png',
    'img/14.png', 'img/14.png',
    'img/15.png', 'img/15.png',
    'img/16.png', 'img/16.png',
    'img/17.png', 'img/17.png',
    'img/18.png', 'img/18.png',
    'img/19.png', 'img/19.png',
    'img/20.png', 'img/20.png',
    'img/21.png', 'img/21.png',
    'img/22.png', 'img/22.png',
    'img/23.png', 'img/23.png',
    'img/24.png', 'img/24.png'
    
    
];

cardsArray.sort(() => Math.random() - 0.5);

let firstCard = null;
let secondCard = null;
let canClick = true;

cardsArray.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = 'img/back.png';
    img.dataset.src = src;
    img.id = 'card' + index;
    img.onclick = () => flipCard(img);
    board.appendChild(img);
});

function flipCard(img) {
    if (!canClick || img.src.includes(img.dataset.src)) return;
    
    img.src = img.dataset.src;

    if (!firstCard) {
        firstCard = img;
    } else {
        secondCard = img;
        canClick = false;
        setTimeout(checkMatch, 800);
    }
}
     function checkMatch() {
    if (firstCard.dataset.src === secondCard.dataset.src) {
        pairsFound++;

        if (pairsFound === 12) {
            clearInterval(timerInteral);
            alert('Победа! Твое время: ' + time + ' c');
        }

        
    } else {

        firstCard.src = 'img/back.png';
        secondCard.src = 'img/back.png';
    }
    firstCard = null;
    secondCard = null;
    canClick = true;

 let time = 0;
 let timerInterval = null;

 function startTimer() {
     timerInterval = setInterval (() =>{
        time++;
        document.getElementById('timer').innerText = 'Время' + time + ' с';
     }, 1000);
 }
 startTimer();
}