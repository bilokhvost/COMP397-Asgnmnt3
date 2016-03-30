//*********************************************************************
//Source file: play.ts                                                *
//Author name: Kateryna Bilokhvost                                    *
//Initial commit: March 26, 2016                                      *
//Last modified by: Kateryna Bilokhvost                               *
//Last date modified: March 29, 2016                                  *
//Commit history: 13 commits, GitHub Link:                            *
//https://github.com/bilokhvost/COMP397-Asgnmnt3/commits/master       *
//Program description: This is a simple side scrolling 2D arcade game *
// (left to right). The main purpose is to collect as many eggs as it *
// possible and to avoid eagles that steal player’s health..          *
//*********************************************************************
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
        private _healthText: objects.Label;
        public _score: number;
        private _health: number;
   
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
            this._health = 100;
          
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
                35,
                25,
                false);
            this.addChild(this._scoreText);
            
            //add lifeText label to the scene
            this._healthText = new objects.Label(
                "Health: " + this._health.toString(),
                "35px Consolas",
                "#000000",
               400,
                25,
                false);
           this.addChild(this._healthText);      
            
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
            //each time the player hits the eagle, points life are deducted
            this._eagles.forEach(eagle => {
                eagle.update();
                if (this._collision.check(eagle)) {
                    this._health -= 1;
                    createjs.Sound.play("bell"); 
                    this.checkLife(this._health);                                    
                    this._healthText.text = "Health: " + this._health;
                }
            });
            //if the player hits the egg, add 10 points
            if (this._collision.check(this._egg)) {
                this._score += 10;
                this.removeChild(this._egg);
                createjs.Sound.play("eggPick");
                this._scoreText.text = "Score: " + this._score;
                console.log(this._score);
                this._egg = new objects.Egg();
                this.addChild(this._egg);

            }
            //if the player hits the super egg, add 50 points and 10 health
            if (this._collision.check(this._superegg)) {
                this._score += 50;
                this._health+=10;
                this.removeChild(this._superegg);
                createjs.Sound.play("superPick");
                console.log(this._score);
                 this._scoreText.text = "Score: " + this._score; 
                  this._healthText.text = "Health: " + this._health;              
                this._superegg = new objects.SuperEgg();
                this.addChild(this._superegg);
                
               
            }
        }
        //check the amount of lives, if it is 0, the game is over
        private checkLife(value:number){
            if (value<=0){
                 createjs.Sound.play("eagleEat");
                 totalScore=this._score;
                    // Switch to the Game Over Scene
                    scene = config.Scene.END;
                    changeScene();
            }
        }
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}