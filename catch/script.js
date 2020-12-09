//Starting Point

var block     = document.getElementById('block'),
    brick     = document.getElementById('brick'),
    path      = document.getElementById('path'),
    gameover  = document.getElementById('gameover')
    enemy     = document.getElementById('enemy') 
    cube     = document.getElementById('cube') 

    var blockRect = block.getBoundingClientRect(),
    brickRect = brick.getBoundingClientRect()
var left = 10;
brick.style.left = 10;
brick.style.top = 380;
block.style.top = 10;
block.style.left = Math.floor((Math.random() * 390) + 5);
//block.style.backgroundColor = "purple";
gameover.style.top = 150;
gameover.style.left = 150

//Keys
document.onkeydown = function() {
    switch (window.event.keyCode) {
        case 37:
            moveleft(brick);
            break;
        case 39:
            moveright(brick);
            break;
    }
};

//Movement
function moveright(elem) {

    function frame() {
        left = left + 20
        elem.style.left = left + 'px'
        clearInterval(id)
    }
    var id = setInterval(frame, 4)
}

function moveleft(elem) {

    function frame() {
        left = left - 20 
        elem.style.left = left + 'px'
        clearInterval(id)
    }
    var id = setInterval(frame, 4) 
}

var colors = []

function movedown() {
    var top = 0
    function frame() {
        top++ 
        block.style.top = top + 'px'
        
        cube.style.top = top +'px'

        enemy.style.top = top + 'px'


        var blockRect = block.getBoundingClientRect(),
            brickRect = brick.getBoundingClientRect()
        if (block.style.top === '375px' && blockRect.right > brickRect.left && blockRect.left < brickRect.right) {
            clearInterval(id)
            updateScore()
            block.style.top = 10;
            block.style.left = Math.floor((Math.random() * 390) + 5);
            block.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];


            

            movedown()
        }
        if (top == 400) {
            clearInterval(id);
            document.getElementById("gameover").innerHTML="Purchase Through Starbucks to Unlock More Replays!";
        }




        var cubeRect = cube.getBoundingClientRect(),
            brickRect = brick.getBoundingClientRect()
        if (cube.style.top === '375px' && cubeRect.right > brickRect.left && cubeRect.left < brickRect.right) {
            clearInterval(id)
            updatedScore() 
            cube.style.top = 10;
            cube.style.left = Math.floor((Math.random() * 390) + 5);
            cube.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
            movedown()
        }
        if (top == 400) {
            clearInterval(id);
            document.getElementById("gameover").innerHTML="Purchase Through Starbucks to Unlock More Replays!";
        }




        var enemyRect = cube.getBoundingClientRect(),
        brickRect = brick.getBoundingClientRect()
    if (enemy.style.top === '375px' && enemyRect.right > brickRect.left && enemyRect.left < brickRect.right) {
        // clearInterval(id)
        // updatesScore() 
        clearInterval(id);
        document.getElementById("gameover").innerHTML="Purchase Through Starbucks to Unlock More Replays!";
        enemy.style.top = 10;
       enemy.style.left = Math.floor((Math.random() * 290) + 4);
        enemy.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
        movedown()
    }
    // if (top == 400) {
    //     // clearInterval(id);
    //     // document.getElementById("gameover").innerHTML="Purchase Through Starbucks to Unlock More Replays!";
    // }






    }
    var id = setInterval(frame, 2)
}

var score = 0
function updatedScore() {
    score+=5
    document.getElementById("score").innerHTML=score;
}



var score = 0
function updateScore() {
    score++
    document.getElementById("score").innerHTML=score;
}






function reset() {
    document.getElementById("gameover").innerHTML="";
    score = 0
    document.getElementById("score").innerHTML=score;
    
}

//Swipe Functionality
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            moveleft(brick)
            console.log('hi')
        } else {
            moveright(brick)
        }                       
    } 
    xDown = null;
    yDOwn = null;                                             
}