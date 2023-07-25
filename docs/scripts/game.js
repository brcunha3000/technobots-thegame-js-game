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
            "./docs/images/player-idle-right.gif"

        );
        
        // obstacles
        this.obstacles = [];
        this.isPushingObstacle = false;

        this.lives = 3;

        this.gameIsOver = false;

    }
    start(){
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        // Start the game loop
        this.gameLoop();
    }

        // Creating an animation function
    gameLoop(){
        console.log("Game Loop");
            
        // Check if the game is over to interrupt the game loop
         if (this.gameIsOver) {
            return;
        }
        this.update();
        
    
        window.requestAnimationFrame(() => this.gameLoop());
    }

  

    update(){    
        let lives = document.getElementById('lives');
        lives.innerHTML = this.lives;
        
        this.player.move();


      for (let i = 0; i < this.obstacles.length; i++) {
          const obstacle = this.obstacles[i];
          obstacle.move();

          if (this.player.didCollide(obstacle)) {
            obstacle.element.remove();
  
            this.obstacles.splice(i, 1);
            this.lives--;
          } 
  
        }
        
        if (this.lives === 0) {
          this.endGame();
        }
        
        if(!this.obstacles.length && !this.isPushingObstacle){
            this.isPushingObstacle = !this.isPushingObstacle;

            setTimeout(() => {
                this.obstacles.push(new ObstacleBottom(this.gameScreen));
                this.isPushingObstacle = !this.isPushingObstacle;
            }, 500);
        }
        


    }
  
    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => {
        });
      
        this.gameIsOver = true;
  
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}