class ObstacleBottom {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 1100;
        this.top = 450;
        this.width = 100;
        this.height = 150;

        this.container = document.createElement("div");
        this.container.style.position = "absolute";
        this.container.style.left = `${this.left}px`;
        this.container.style.top = `${this.top}px`;
        this.container.style.width = `${this.width}px`;
        this.container.style.height = `${this.height}px`;

        this.element = document.createElement("img");
        this.element.src = "./docs/images/bottom-obstacle.gif";
        this.element.style.position = "absolute";
        this.element.style.top = `0px`;
        this.element.style.left = `0px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;

        this.container.appendChild(this.element);
        this.gameScreen.appendChild(this.container);
    }
    
    updatePosition() {
        this.container.style.left = `${this.left}px`;
    }

    move() {
        this.left -= 3;
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

