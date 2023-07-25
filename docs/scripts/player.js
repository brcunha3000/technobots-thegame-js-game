class Player {
    constructor(gameScreen,left,top,width,height,imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width=`${width}px`;
        this.element.style.height=`${height}px`;
        this.element.style.left=`${left}px`;
        this.element.style.top=`${top}px`;

        this.gameScreen.appendChild(this.element);
    }
    
    move(){
        this.top+=this.directionY;
        this.left+=this.directionX;
        
        if (this.top < 300) {
            this.top = 300;
        } else if (this.top > 450) {
            this.top = 450;
        } 
        
        
        if (this.left + this.width > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - this.width;
        } else if (this.left < 0) {
            this.left = 0;
        }

        this.updatePosition();
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
        let collision = false;

        if (playerRect.left < obstacleRect.right && playerRect.right > obstacleRect.left && playerRect.top < obstacleRect.bottom && playerRect.bottom > obstacleRect.top) {
            collision = true;
            return true;
        } else {
            
            return false;
        }
    }
}






