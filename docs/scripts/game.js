class Game {
    constructor(){
        this.startScreen = document.getElementById("startScreen");
        this.creditsScreen = document.getElementById("creditsScreen")
        this.gameScreen = document.getElementById("gameScreen");
        this.gameEndScreen = document.getElementById("gameEndScreen");
        this.victoryScreen = document.getElementById("victoryScreen");

        // player
        this.player = new Player(
            this.gameScreen,
            50,
            450,
            100,
            150,
            "./docs/images/player-idle-right.gif",
            "./docs/images/running-left.gif",
            "./docs/images/running-right.gif"
        );
        
        // obstacles
        this.obstacleImages = [
            "./docs/images/bottom-obstacle.gif",
            "./docs/images/bottom-obstacle2.gif",
            "./docs/images/bottom-obstacle3.gif",
        ];
        this.obstacles = [];
        this.isPushingObstacle = false;

        // Round limiting
        this.lives = 5;
        this.timer = 0;
        this.gameIsOver = false;

        this.updateGrayScaleLevel();
    }

    start(){
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        
        // Round timer
        let timer = document.getElementById("timer");
        timer.innerHTML = `Round time: ${this.timer}`
        
        const updateTimer = () => {
            this.timer++;
            timer.innerHTML = `Round time: ${this.timer}`;
        }

        setInterval(() => {
            if (this.lives > 0) {
                this.victoryGame();}
        }, 60000);

        setInterval(updateTimer, 1000);
        introMusic.pause();
        robotTalk.play();

        // Start the game loop
        this.gameLoop();
    }
        
    gameLoop(){
        console.log("Game Loop");

        // Check if the game is over to interrupt the game loop
        if (this.gameIsOver) {
            inGameMusic.pause();
            return;
        }      
                
        this.update();       
    
        window.requestAnimationFrame(() => this.gameLoop());
    }  

    update(){    

        let lives = document.getElementById("lives");
        lives.innerHTML = `Lives: ${this.lives}`;

        this.player.move();
    
        for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
        mushVoice.play();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove(); // Remove the obstacle's
                this.obstacles.splice(i, 1);
                this.lives--;
                this.updateGrayScaleLevel();
                robotHit.play();
                mushVoice.pause()

                // Update the displayed lives in the DOM
                lives.innerHTML = `Lives: ${this.lives}`;

                if (this.lives === 0) {
                    this.endGame();
                    inGameMusic.pause();
                    robotMove.pause();
                    robotDead.play();
                }
                } else if (obstacle.left < 0) {
                    obstacle.element.remove(); // Remove the obstacle's
                    this.obstacles.splice(i, 1);
            } 
        }    

    
            if(!this.obstacles.length && !this.isPushingObstacle){
            this.isPushingObstacle = true;
        
            setTimeout(() => {
                const newObstacle = new ObstacleBottom(this.gameScreen, this.obstacleImages,);
                this.obstacles.push(newObstacle);
                for (let i =0; i< this.obstacles.length; i++){
                    this.obstacles[i].getRandomObstacleImage();
                }
                this.isPushingObstacle = false;
            }, 100);
        }
    }
    
    // Getting variations of the obstacles
    getRandomObstacleImage() {
        const randomIndex = Math.floor(Math.random() * this.obstacleImages.length);
        return this.obstacleImages[randomIndex];
    }

    updateGrayScaleLevel() {
        const backgroundElement = document.getElementById("gameScreen");
        backgroundElement.classList.remove('grayscale-0', 'grayscale-1', 'grayscale-2', 'grayscale-3', 'grayscale-4');
    
        if (this.lives === 1) {
            backgroundElement.classList.add('grayscale-0');
        } else if (this.lives === 2) {
            backgroundElement.classList.add('grayscale-1');
        } else if (this.lives === 3) {
            backgroundElement.classList.add('grayscale-2');
        } else if (this.lives === 4) {
            backgroundElement.classList.add('grayscale-3');
        } else if (this.lives === 5) {
            backgroundElement.classList.add('grayscale-4');
        }    
    }

    victoryGame(){
        this.player.container.remove();
        this.obstacles.forEach(obstacle => {
            obstacle.element.remove();
        });
      
        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.victoryScreen.style.display = "block";

        inGameMusic.pause();
        robotMove.pause();
        victoryMusic.play();
    }

    endGame() {
        this.player.container.remove();
        this.obstacles.forEach(obstacle => {
        obstacle.element.remove();
        inGameMusic.pause();
        robotDead.play();
        robotMove.pause();
    });
  
    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    }
}
