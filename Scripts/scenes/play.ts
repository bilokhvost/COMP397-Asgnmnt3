// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass: objects.Grass;
        private _egg: objects.Egg;
        private _superegg: objects.SuperEgg;
        private _eagles: objects.Eagle[];
        private _eagleCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreText: objects.Label;
        private _lifeText: objects.Label;
        public _score: number;
        private _life: number;
   
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // Set Eagle Count
            this._eagleCount = 3;
            
            //set initial score and number of lifes
            this._score = 0;
            this._life = 100;
          
            // Instantiate Eagle array
            this._eagles = new Array<objects.Eagle>();
                
            // added grass to the scene
            this._grass = new objects.Grass();
            this.addChild(this._grass);

            // added egg to the scene
            this._egg = new objects.Egg();
            this.addChild(this._egg);

            // added super egg to the scene
            this._superegg = new objects.SuperEgg();
            this.addChild(this._superegg);   
          

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added Eagles to the scene
            for (var eagle: number = 0; eagle < this._eagleCount; eagle++) {
                this._eagles[eagle] = new objects.Eagle();
                this.addChild(this._eagles[eagle]);
            }
              
            //add scoreText label to the scene
            this._scoreText = new objects.Label(
                "Score: " + this._score.toString(),
                "35px Consolas",
                "#000000",
                10,
                25,
                false);

            this.addChild(this._scoreText);
            
            //add lifeText label to the scene
            this._lifeText = new objects.Label(
                "Lives: " + this._life.toString(),
                "35px Consolas",
                "#000000",
               420,
                25,
                false);

           this.addChild(this._lifeText);
      
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            
            this._grass.update();
            this._egg.update();
            this._superegg.update();
            this._player.update();
            this._eagles.forEach(eagle => {
                eagle.update();
                if (this._collision.check(eagle)) {
                    this._life -= 1;
                    createjs.Sound.play("bell"); 
                    this.checkLife(this._life);                                    
                    this._lifeText.text = "Lives: " + this._life;
                }
            });
        
            if (this._collision.check(this._egg)) {
                this._score += 10;
                this.removeChild(this._egg);
                createjs.Sound.play("eggPick");
                this._scoreText.text = "Score: " + this._score;
                console.log(this._score);
                this._egg = new objects.Egg();
                this.addChild(this._egg);

            }
            if (this._collision.check(this._superegg)) {
                this._score += 50;
                this._life+=10;
                this.removeChild(this._superegg);
                createjs.Sound.play("superPick");
                console.log(this._score);
                 this._scoreText.text = "Score: " + this._score; 
                  this._lifeText.text = "Lives: " + this._life;              
                this._superegg = new objects.SuperEgg();
                this.addChild(this._superegg);
                
               
            }
        }
        //check the amount of lives, if it is 0, the game is over
        private checkLife(value:number){
            if (value<=0){
                 createjs.Sound.play("eagleEat");
                    // Switch to the Game Over Scene
                    scene = config.Scene.END;
                    changeScene();
            }
        }
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}