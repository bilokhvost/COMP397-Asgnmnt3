var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EAGLE CLASS ++++++++++++++++++++++++++++++++++++
    var Eagle = (function (_super) {
        __extends(Eagle, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Eagle() {
            _super.call(this, "eagle");
            this._reset(this._rightBounds);
            this.name = "eagle";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Eagle.prototype._checkBounds = function (value) {
            // check to see if the top of the eagle is outside the viewport         
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the eagle offscreen
        Eagle.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 6;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Eagle.prototype.update = function () {
            // scroll the eagle down the screen and check wheather it is visible
            this.x -= this._speed.x;
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return Eagle;
    }(objects.GameObject));
    objects.Eagle = Eagle;
})(objects || (objects = {}));

//# sourceMappingURL=eagle.js.map
