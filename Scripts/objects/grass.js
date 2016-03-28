var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GRASS CLASS ++++++++++++++++++++++++++++++++++++
    var Grass = (function (_super) {
        __extends(Grass, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Grass() {
            _super.call(this, "grass");
            this._speed.x = -5; //grass speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Grass.prototype._checkBounds = function (value) {
            // check to see if the right bound of the grass is met the right bound of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the grass offscreen
        Grass.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Grass.prototype.update = function () {
            // scroll the grass 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-640);
        };
        return Grass;
    }(objects.GameObject));
    objects.Grass = Grass;
})(objects || (objects = {}));

//# sourceMappingURL=grass.js.map
