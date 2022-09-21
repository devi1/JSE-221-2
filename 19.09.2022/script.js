let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = 'img/bird.png';
fg.src = 'img/fg.png';
bg.src = 'img/bg.png';
pipeUp.src = 'img/pipeUp.png';
pipeBottom.src = 'img/pipeBottom.png';

let fly = new Audio();
let scoreAudio = new Audio();

fly.src = 'audio/fly.mp3';
scoreAudio.src = 'audio/score.mp3';

// gap between pipes
let gap = 90;

// Our score counter
let score = 0;

// Bird coordinates
let xPos = 10;
let yPos = 150;
let gravity = 1.5

// Massive of pipes
let pipes = [];

pipes[0] = {
    x: cvs.width,
    y: 0
}

let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
}

let state = true;

// Call of function that will push up our dummy bird
document.addEventListener('keydown', moveUp);

// Ogranichenie
// document.addEventListener('keypress', cheating);

function moveUp() {
    yPos -= 25;
    fly.play();
}

function cheating() {
    gravity = 0;
    
}

function draw(){
    ctx.drawImage(bg, 0, 0); //set background

    for(let i = 0; i < pipe.length; i++){

        // Draw the pipes from up and bottom
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--; // Moving our pipes from right to left

        // generating new pipes
        if(pipe[i].x <= 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        // Looking for a touch
        if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            || yPos + bird.height >= cvs.height - fg.height){
                return false;
                
        }

        if(pipe[i].x + Math.floor(pipeUp.width/2) == xPos + Math.floor(bird.width/2)){
            score++;
            scoreAudio.play;
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += gravity

    ctx.fillStyle = '#000';
    ctx.font = '24px Arial';
    ctx.fillText(`Your score is ${score}`, 10, cvs.height - 20);

    requestAnimationFrame(draw);

    return true;
}

if(true){
    pipeBottom.onload = draw;
} 