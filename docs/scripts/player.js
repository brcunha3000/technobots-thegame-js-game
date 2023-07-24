class Player {
    constructor(gameScreen,left,top,width,height,imgSrc){
        this.gameScreen = gameScreen;
        // horizontal position of the player (via position absolute)
        this.left = left;
        // vertical position of the player (via position absolute)
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        // Create img tag for the player, define src and default styling
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        // set up default element's properties
        this.element.style.width=`${width}px`;
        this.element.style.height=`${height}px`;
        this.element.style.left=`${left}px`;
        this.element.style.top=`${top}px`;
        // Append player to the game screen
        this.gameScreen.appendChild(this.element);
    }
    
    move(){
        this.left+=this.directionX;
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        } else if (this.left < 0) {
            this.left = 0;
        }

        this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }

    didColide(){

    }
}






