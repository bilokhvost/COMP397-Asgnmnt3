//*********************************************************************
//Source file: end.ts                                                 *
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
// END SCENE
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
                "45px Consolas",
                "#6c8df0",
                 config.Screen.CENTER_X-90,
                 config.Screen.CENTER_Y,
                false);
            this.addChild(this._scoreText);
            // add the PLAY button to the End scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X+30,
                config.Screen.CENTER_Y + 120, true);
            this.addChild(this._startButton);
           
            // START_OVER Button event listener
            this._startButton.on("click", this._startButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // END Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
           
            changeScene();
        }
    }
}