class GameLoop extends Entity {
    constructor() {
        
    }
            
    start() {
        var gameLoop = function(dt)
        {
            
            requestAnimationFrame(gameLoop)  
        }

        requestAnimationFrame(gameLoop);
    } 
}