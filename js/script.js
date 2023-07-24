window.onload = function () {
    const startButton = document.getElementById("button-start");
    const creditsButton = document.getElementById("button-credits");
  
    startButton.addEventListener("click", function () {
      startGame();
    });
  
    let game;
  
    /*creditsButton.addEventListener("click", function() {
      /location.reload();
    })*/

    function startGame() {
        console.log("start game");
    
        game = new Game();
    
        game.start();
        console.log(game)
    }

    function handleKeyDown (event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",
            "ArrowDown"
          
        ]
    
        // Check if the pressend key belong to the array of possible keys
        if (possibleKeystrokes.includes(key)) {
          // prevent the default actions from happening
          event.preventDefault();
    
          // Only when we have a game loaded, we can move the player
          if (game) {
            switch(key){
                case "ArrowLeft": 
                game.player.directionX = -1;
                break;
              case "ArrowUp": 
                game.player.directionY = -1;
                break;
              case "ArrowRight": 
                game.player.directionX = 1;
                break;
              case "ArrowDown": 
                game.player.directionY = 1;
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
            "ArrowRight",
            "ArrowDown"
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
                game.player.directionY = 0;
                break;
              case "ArrowRight": 
                game.player.directionX = 0;
                break;
              case "ArrowDown": 
                game.player.directionY = 0;
                break;
            }
          }
        }
      }
      // Function that handles keyup (releasing the key) events
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);









}