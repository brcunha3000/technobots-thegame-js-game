window.onload = function () {
    const startButton = document.getElementById("button-start");
    const creditsButton = document.getElementById("button-credits");
    const creditsScreen = document.getElementById("creditsScreen");
    
    
    startButton.addEventListener("click", function () {
      startGame();

    });
    
    let game;
  
    creditsButton.addEventListener("click", function() {
      startScreen.style.display = "none";      
      creditsScreen.style.display = "block";
    })

    const returnButton = document.querySelector(".return-arrow")
    returnButton.addEventListener("click", function () {
      creditsScreen.style.display = "none";
      startScreen.style.display = "block";
      restartGame();
    })

    let returnStartMenu = document.querySelector(".button-return-startScreen")
    returnStartMenu.addEventListener("click", function () {
      gameEndScreen.style.display = "none";
      startScreen.style.display = "block";
      location.reload();
    })

    const restartButton = document.querySelector(".button-restart")
    restartButton.addEventListener("click", function () {
      gameEndScreen.style.display = "none";
        
      startGame();
      
    })

    const returnStartMenuFromVictory = document.querySelector(".button-return-startScreen-2")
    returnStartMenuFromVictory.addEventListener("click", function () {
      victoryScreen.style.display = "none";
      startScreen.style.display = "block";
      restartGame();
    })

    function restartGame(){
      location.reload();
    }
    
    function startGame() {
        console.log("start game");
    
        game = new Game();
        ;
    
        game.start();
        
    }

    function handleKeyDown (event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",

        ]
    
        // Check if the pressend key belong to the array of possible keys
        if (possibleKeystrokes.includes(key)) {
          // prevent the default actions from happening
          event.preventDefault();
    
          // Only when we have a game loaded, we can move the player
          if (game) {
            switch(key){
                case "ArrowLeft": 
                game.player.directionX = -5;
                break;
              case "ArrowUp": 
                game.player.directionY = -10;
                console.log('here')
                break;
              case "ArrowRight": 
                game.player.directionX = 5;
                break;
            }
          }
        }
      }
    
      function handleKeyUp (event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight"
        ]
    
        // Check if the pressend key belong to the array of possible keys
        if (possibleKeystrokes.includes(key)) {
          // prevent the default actions from happening
          event.preventDefault();
    
          // Only when we have a game loaded, we can move the player
          if (game) {
            switch(key){
                case "ArrowLeft": 
                game.player.directionX = 0;
                break;
              case "ArrowUp": 
                game.player.directionY = 10;
                break;
              case "ArrowRight": 
                game.player.directionX = 0;
                break;
            }
          }
        }
      }
      // Function that handles keyup (releasing the key) events
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);









}