class Game {
    constructor(){
        this.startScreen = document.getElementById("startScreen");
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
            "./images/player-idle-right.gif"

        );
        
        // obstacles
        this.obstacles = [];

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
        this.player.move();

        for (let i=0; i < this.obstacles.length; i++){
            const obstacle = this.obstacles[i];
            obstacle.move();
        }


        if (!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true;
            setTimeout(() => {
                this.obstacles.push(new ObstacleBottom(this.gameScreen));
                this.isPushingObstacle = false;
            }, 500);
        }
    }
}


  