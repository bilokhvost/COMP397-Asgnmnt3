var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Eagle Count
            this._eagleCount = 3;
            // Instantiate Eagle array
            this._eagles = new Array();
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
            for (var eagle = 0; eagle < this._eagleCount; eagle++) {
                this._eagles[eagle] = new objects.Eagle();
                this.addChild(this._eagles[eagle]);
            }
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._grass.update();
            this._egg.update();
            this._superegg.update();
            this._player.update();
            this._eagles.forEach(function (eagle) {
                eagle.update();
                _this._collision.check(eagle);
            });
            this._collision.check(this._egg);
            this._collision.check(this._superegg);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
