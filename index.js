
function playgame() {
    let playerscore = 0;
    let compscore = 0;
    let playbtn = document.querySelector('.playbtn');
    playbtn.addEventListener("click", () => {
        let intro = document.querySelector('.intro');
        let game = document.querySelector('.game');
        intro.style.display = 'none';
        game.style.display = 'flex';
    });
    
    let options = document.querySelectorAll(".choicebtn button");
    const playerhand = document.querySelector('.phand');
    const computerhand = document.querySelector('.chand');

    
    const computeroptions = ['rock', 'paper', 'scissors'];

    const hands = document.querySelectorAll('.hand img');

    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    });

    options.forEach(option => {
        option.addEventListener('click', function () {
            //computer choice
            const computernumber = Math.floor(Math.random() * 3);
            let computerchoice = computeroptions[computernumber];

            //animation
            playerhand.style.animation = 'playershake 2s ease';
            computerhand.style.animation = 'compshake 2s ease';

            setTimeout(()=>{
                //update the image of players hand
                playerhand.src = `pics/${this.textContent}.png`;
                //update the image of players hand
                computerhand.src = `pics/${computerchoice}.png`;
                winner(this.textContent, computerchoice);

            },1600);

            //calling the winner function
        });
    });

    // function updatepscore(playerscore){
    //     playerscore++;
    // }
    // function updatecscore(compscore){
    //     compscore++;
    // }


    //checks for who wins
    function winner(playerchoice, computerchoice) {
        const winner = document.querySelector('.winner');
        const pscore = document.querySelector('#pscore');
        const cscore = document.querySelector('#cscore');
        if (computerchoice === playerchoice) {
            winner.textContent = 'Its a tie!';
            winner.style.color = 'grey';
            // return;
        } else if (computerchoice === 'paper' && playerchoice === 'rock') {
            console.log(playerscore);

            compscore++;
            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';
            cscore.textContent = `Computer's score : ${compscore}`;
            // return;
        } else if (computerchoice === 'scissors' && playerchoice === 'paper') {
            console.log(playerscore);

            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';
            compscore++;
            cscore.textContent = `Computer's score : ${compscore}`;
            // return;
        } else if (computerchoice === 'rock' && playerchoice === 'scissors') {
            console.log(playerscore);

            winner.textContent = 'Computer wins!';
            winner.style.color = 'yellow';

            compscore++;
            cscore.textContent = `Computer's score : ${compscore}`;
            // return;
        } else {
            
            winner.textContent = 'You wins!';
            winner.style.color = '#00ff00';
            
            playerscore++;
            console.log(playerscore);
            pscore.textContent = `Player's score : ${playerscore}`;
            // return;
        }
    }
}
playgame();
