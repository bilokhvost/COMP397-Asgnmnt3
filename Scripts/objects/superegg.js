var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // SUPEREGG CLASS ++++++++++++++++++++++++++++++++++++
    var SuperEgg = (function (_super) {
        __extends(SuperEgg, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function SuperEgg() {
            _super.call(this, "superegg");
            // PRIVATE INSTANCE VARIABLES +++++++++++++++++
            this.countFrame = 0;
            this._speed.x = -30; //superegg speed         
            this._reset(this._rightBounds);
            this.name = "superegg";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        SuperEgg.prototype._checkBounds = function (value) {
            // check to see if the right part of the superegg is outside the viewport         
            if (Math.floor(value % 100) == 0) {
                this._reset(this._rightBounds);
            }
        };
        // reset the superegg offscreen
        SuperEgg.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            console.log(this._topBounds);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        SuperEgg.prototype.update = function () {
            // scroll the egg 5 px per frame
            this.x += this._speed.x;
            this.countFrame += 0.5;
            // this._checkBounds(this._leftBounds);
            this._checkBounds(this.countFrame);
        };
        return SuperEgg;
    }(objects.GameObject));
    objects.SuperEgg = SuperEgg;
})(objects || (objects = {}));

//# sourceMappingURL=superegg.js.map
