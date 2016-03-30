var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: instructions.ts                                        *
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
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        ;
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //Add Instructions background
            this._instructionsBackground = new createjs.Bitmap(assets.getResult("instructionsBackground"));
            this.addChild(this._instructionsBackground);
            // add the Start button to the INSTRUCTIONS scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X + 20, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INSTRUCTIONS Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Instructions.prototype._startButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
