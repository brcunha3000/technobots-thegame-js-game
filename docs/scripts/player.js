class Player {
    constructor(gameScreen,left,top,width,height,idleImage,runningLeftImage, runningRightImage){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.gravity = 0;
        this.isJumping = false;

        this.idleImage = idleImage;
        this.runningLeftImage = runningLeftImage;
        this.runningRightImage = runningRightImage;
        this.facingDirection = "right";
        this.container = document.createElement("div");
        this.container.style.position = "absolute";
        this.container.style.left = `${this.left}px`;
        this.container.style.top = `${this.top}px`;
        this.container.style.width = `${this.width}px`;
        this.container.style.height = `${this.height}px`;
        this.playerImage = document.createElement("img");
        this.playerImage.src = this.idleImage;
        this.playerImage.style.position = "absolute";
        this.playerImage.style.width = `${this.width}px`;
        this.playerImage.style.height = `${this.height}px`;
        this.container.appendChild(this.playerImage);
        this.gameScreen.appendChild(this.container);
    }
   
    updatePlayerImage() {
        if (this.facingDirection === "left") {
            this.playerImage.src = this.runningLeftImage;
        } else if (this.facingDirection === "right") {
            this.playerImage.src = this.runningRightImage;
        } else {
            this.playerImage.src = this.idleImage;
        }
    }
    
    move(){
        this.top += this.directionY;
        this.left += this.directionX;

        // Handling the top part
        if (this.top < 300) {
            this.top = 300;
        }
        else if (this.top >= 300 && this.isJumping){
            this.gravity +=1;
            this.top += this.gravity;
        }

        // Handling the bottom part
        if (this.top > 450 && this.isJumping) {
            this.top = 449;
            this.gravity = 0;
            this.isJumping = false;
        }

        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        } else if (this.left < 0) {
            this.left = 0;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.container.style.left = `${this.left}px`;
        this.container.style.top = `${this.top}px`;
    }

    jump(){
        this.gravity = -18;
        this.isJumping = true;
    }

    didCollide(obstacle) {
        const playerRect = this.container.getBoundingClientRect();
        const obstacleRect = obstacle.container.getBoundingClientRect();
        
        if (playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left && playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacleRect.top) {
            return true;
        } else {
            return false;
        }
    }
}







