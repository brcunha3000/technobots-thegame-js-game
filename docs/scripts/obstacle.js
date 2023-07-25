class ObstacleBottom {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 1100;
        this.top = 450;
        this.width = 100;
        this.height = 150;

        this.element = document.createElement("img");
        this.element.src = "./docs/images/bottom-obstacle.gif";
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.gameScreen.appendChild(this.element);
    }
    
    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

    move(){        
        this.left -= 3;
        this.updatePosition();
    }

    collidedWithPlayer(player) {
        const playerRect = player.element.getBoundingClientRect();
        const obstacleRect = this.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true; 
        }

        return false; 
    }
}
