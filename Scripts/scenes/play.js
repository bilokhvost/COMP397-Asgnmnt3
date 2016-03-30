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
            //set initial score and number of lifes
            this._score = 0;
            this._life = 100;
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
            //add scoreText label to the scene
            this._scoreText = new objects.Label("Score: " + this._score.toString(), "35px Consolas", "#000000", 10, 25, false);
            this.addChild(this._scoreText);
            //add lifeText label to the scene
            this._lifeText = new objects.Label("Lives: " + this._life.toString(), "35px Consolas", "#000000", 420, 25, false);
            this.addChild(this._lifeText);
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
            //if the player hits the eagle, 1 life is deducted
            this._eagles.forEach(function (eagle) {
                eagle.update();
                if (_this._collision.check(eagle)) {
                    _this._life -= 1;
                    createjs.Sound.play("bell");
                    _this.checkLife(_this._life);
                    _this._lifeText.text = "Lives: " + _this._life;
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
            //if the player hits the super egg, add 50 points and 10 lives
            if (this._collision.check(this._superegg)) {
                this._score += 50;
                this._life += 10;
                this.removeChild(this._superegg);
                createjs.Sound.play("superPick");
                console.log(this._score);
                this._scoreText.text = "Score: " + this._score;
                this._lifeText.text = "Lives: " + this._life;
                this._superegg = new objects.SuperEgg();
                this.addChild(this._superegg);
            }
        };
        //check the amount of lives, if it is 0, the game is over
        Play.prototype.checkLife = function (value) {
            if (value <= 0) {
                createjs.Sound.play("eagleEat");
                totalScore = this._score;
                // Switch to the Game Over Scene
                scene = config.Scene.END;
                changeScene();
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
