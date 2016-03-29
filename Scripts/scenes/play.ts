// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass: objects.Grass;
        private _egg: objects.Egg;
        private _superegg: objects.SuperEgg;
        private _eagles: objects.Eagle[];
        private _eagleCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
      
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Eagle Count
            this._eagleCount = 3;
            
      
            
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
            for(var eagle:number = 0; eagle < this._eagleCount; eagle++) {
                this._eagles[eagle] = new objects.Eagle();
               this.addChild(this._eagles[eagle]);
            }
            
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
                this._collision.check(eagle);
            });
            
            this._collision.check(this._egg);
             this._collision.check(this._superegg);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}