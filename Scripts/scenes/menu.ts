// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       private _menuBackground: createjs.Bitmap;
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Menu background
              this._menuBackground = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._menuBackground);  
            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X+180,
                config.Screen.CENTER_Y, false);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
              // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X-260,
                config.Screen.CENTER_Y, false);
            this.addChild(this._instructionsButton);
            
            // Start Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
         // START Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            // Switch to the Instructions Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }

    }
}