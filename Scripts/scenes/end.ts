// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
          private _endBackground: createjs.Bitmap;
        private _startButton: objects.Button;
          private _scoreText: objects.Label;
      
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
           //Add End background
              this._endBackground = new createjs.Bitmap(assets.getResult("endBackground"));
            this.addChild(this._endBackground); 
            
              this._scoreText = new objects.Label(
                "Score: " + totalScore.toString(),
                "35px Consolas",
                "#000000",
                 config.Screen.CENTER_X+30,
                 config.Screen.CENTER_Y,
                false);
            this.addChild(this._scoreText);
            // add the PLAY button to the End scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
           
            // START_OVER Button event listener
            this._startButton.on("click", this._startButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
           
            changeScene();
        }
    }
}