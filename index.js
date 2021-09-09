let playbtn = document.querySelector('.playbtn');
let reset = document.querySelector('#reset');
playbtn.addEventListener("click", ()=> {
    let intro = document.querySelector('.intro');
    let game = document.querySelector('.game');
    intro.style.display = 'none';
    game.style.display = 'flex';
});

// reset.addEventListener("click", ()=> {
//     let intro = document.querySelector('.intro');
//     let game = document.querySelector('.game');
//     intro.style.display = 'flex';
//     game.style.display = 'none';
//     playgame();
// });
function playgame(){
    let playerscore = 0;
    let compscore = 0;
    let options = document.querySelectorAll(".choicebtn button");
    const playerhand = document.querySelector('.phand');
    const computerhand = document.querySelector('.chand');

    const computeroptions = ['rock', 'paper', 'scissors'];


    options.forEach( option=>{
        option.addEventListener('click', function(){        
            //computer choice
            const computernumber = Math.floor(Math.random()*3);
            let computerchoice =  computeroptions[computernumber];
            console.log(computerchoice);

            //update the image of players hand
            playerhand.src = `pics/${this.textContent}.png`;

            //update the image of players hand
            computerhand.src = `pics/${computerchoice}.png`;

            //calling the winner function
            winner(this.textContent, computerchoice);
        });
    }); 

    
    
    //checks for who wins
    function winner(playerchoice, computerchoice){
        const winner = document.querySelector('.winner');
        const pscore = document.querySelector('#pscore');
        const cscore = document.querySelector('#cscore');
        if(computerchoice === playerchoice){
            winner.textContent = 'Its a tie!';
            winner.style.color = 'grey';
            return;
        }else if(computerchoice === 'paper' && playerchoice === 'rock'){
            compscore++;
            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';
            cscore.textContent = `Computer's score : ${compscore}`;
            return;
        }else if(computerchoice === 'scissors' && playerchoice === 'paper'){
            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';
            compscore++;
            cscore.textContent = `Computer's score : ${compscore}`;
            return;
        }else if(computerchoice === 'rock' && playerchoice === 'scissors'){
            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';

            compscore++;
            cscore.textContent = `Computer's score : ${compscore}`;
            return;
        }else{
            winner.textContent = 'You wins!';
            winner.style.color = '#00ff00';

            playerscore++;
            pscore.textContent = `Player's score : ${playerscore}`;
            return;
        }
    }
}
playgame();
