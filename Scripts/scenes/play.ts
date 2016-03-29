// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _grass: objects.Grass;
        private _egg: objects.Egg;
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 3;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added grass to the scene
            this._grass = new objects.Grass();
            this.addChild(this._grass);

            // added egg to the scene
            this._egg = new objects.Egg();
            this.addChild(this._egg);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
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
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._egg);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}