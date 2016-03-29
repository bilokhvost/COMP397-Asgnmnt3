var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //Add Menu Label
            this._menuLabel = new objects.Label("INSTRUCTIONS SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Instructions.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
