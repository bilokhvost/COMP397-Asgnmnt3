var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//*********************************************************************
//Source file: menu.ts                                                *
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
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Menu background
            this._menuBackground = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._menuBackground);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X + 160, config.Screen.CENTER_Y, false);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add the Instructions button to the MENU scene
            this._instructionsButton = new objects.Button("InstructionsButton", config.Screen.CENTER_X - 260, config.Screen.CENTER_Y, false);
            this.addChild(this._instructionsButton);
            // Start Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the Play Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            // Switch to the Instructions Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
