class ObstacleBottom {
    constructor(gameScreen, obstacleImages) {
        this.gameScreen = gameScreen;
        this.left = 1300;
        this.top = 500;
        this.width = 70;
        this.height = 100;
        this.obstacleImages = obstacleImages;

        this.element = document.createElement("img");
        this.element.src = this.getRandomObstacleImage();

        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.element.src = this.getRandomObstacleImage();


      
        //this.element.src = "./docs/images/bottom-obstacle.gif"; - to remove this//
        this.gameScreen.appendChild(this.element);
    }
    
    getRandomObstacleImage() {
        const randomIndex = Math.floor(Math.random() * this.obstacleImages.length);
        return this.obstacleImages[randomIndex];
    } // random images function

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }

    move() {
        this.left -= 5;
        this.updatePosition();
    }

    collidedWithPlayer(player) {
        const playerRect = player.container.getBoundingClientRect();
        const obstacleRect = this.container.getBoundingClientRect();

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

