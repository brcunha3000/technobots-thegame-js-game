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
        this.element.style.top = `${this.top}px`
    }

    move(){        
        this.left -= 3;
        this.updatePosition();
    }
}
