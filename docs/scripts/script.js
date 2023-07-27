window.onload = function () {
    const startButton = document.getElementById("button-start");
    const creditsButton = document.getElementById("button-credits");
    const creditsScreen = document.getElementById("creditsScreen");
    const buttonHelp = document.getElementById("button-help");
    const buttonMusicOnOff = document.getElementById("button-music-on-off");
    const helpReturnButton = document.getElementById("helpScreen-return-button");
    const inGameMusic = document.getElementById("inGameMusic");
    const robotMove = document.getElementById("robotMove");
    const introMusic = document.getElementById("introMusic");
    const robotTalk = document.getElementById("robotTalk");
    const robotDead = document.getElementById("robotDead");
    const robotJump = document.getElementById("robotJump")

    startButton.addEventListener("click", function () {
      inGameMusic.play();
      inGameMusic.currentTime = 0; 
      startGame();
      introMusic.pause();
      robotTalk.play();
    });
    
    let game;

    buttonHelp.addEventListener("click", function() {
      helpScreen.style.display = "block";
    })

    buttonMusicOnOff.addEventListener("click", function() {
      introMusic.play();
    })

    helpReturnButton.addEventListener("click", function() {
      helpScreen.style.display = "none";
    })
  
    creditsButton.addEventListener("click", function() {
      startScreen.style.display = "none";      
      creditsScreen.style.display = "block";
      inGameMusic.pause();
      robotMove.pause();
    })

    const returnButton = document.querySelector(".return-arrow")
    returnButton.addEventListener("click", function () {
      creditsScreen.style.display = "none";
      startScreen.style.display = "block";
      inGameMusic.pause();
      robotMove.pause();
      restartGame();
    })

    let returnStartMenu = document.querySelector(".button-return-startScreen")
    returnStartMenu.addEventListener("click", function () {
      gameEndScreen.style.display = "none";
      startScreen.style.display = "block";
      restartGame()
      inGameMusic.pause();
    })

    const returnStartMenuFromVictory = document.querySelector(".button-return-startScreen-2")
    returnStartMenuFromVictory.addEventListener("click", function () {
      victoryScreen.style.display = "none";
      startScreen.style.display = "block";
      inGameMusic.pause();
      restartGame();
    })

    function restartGame(){
      location.reload();
      inGameMusic.pause();
    }
    
    function startGame() {
        console.log("start game");
    
        game = new Game();
        ;
    
        game.start();        
    }
    
    function handleKeyDown (event) {
       const playerImage = document.getElementById("player");
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",

        ]
    
        // Check if the pressed key belong to the array of possible keys
        if (possibleKeystrokes.includes(key)) {
          // prevent the default actions from happening
          event.preventDefault();
    
            if (game) {
              switch (key) {
                  case "ArrowLeft":
                      game.player.directionX = -5;
                      game.player.facingDirection = "left";
                      robotMove.play();
                      break;
                  case "ArrowRight":
                      game.player.directionX = 8;
                      game.player.facingDirection = "right";
                      robotMove.play();
                      break;
                  case "ArrowUp":
                    console.log("test");
                      if (game.player.top >= 449){
                        game.player.jump();
                        robotJump.play();
                        break;
                      }
                      
                      break;
              }
              game.player.updatePlayerImage();
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
    
        // Check if the pressed key belong to the array of possible keys
        if (game) {
          switch (key) {
              case "ArrowLeft":
              case "ArrowRight":
                  game.player.directionX = 0;
                  game.player.facingDirection = "idle";
                  robotMove.pause();
                  break;
              case "ArrowUp":
                  game.player.directionY = 0;
                  robotJump.pause();
                  break;
          }
          game.player.updatePlayerImage();
            }
          }
      
      // Function that handles keyup (releasing the key) events
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
}