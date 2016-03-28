var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("rabbit"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._leftBounds = this.height * 0.75;
            this._rightBounds = config.Screen.HEIGHT - (this.height * 0.75);
            this.x = 120;
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._leftBounds) {
                this.y = this._leftBounds;
            }
            if (this.y > this._rightBounds) {
                this.y = this._rightBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));

//# sourceMappingURL=player.js.map
