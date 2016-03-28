var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var Island = (function (_super) {
        __extends(Island, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Island() {
            _super.call(this, "island");
            this._speed.x = -5; //island speed
            this._reset(this._leftBounds);
            this.name = "island";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Island.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x <= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the ocean offscreen
        Island.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._topBounds) + this._bottomBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Island.prototype.update = function () {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            console.log(this.x);
            this._checkBounds(this._leftBounds);
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));

//# sourceMappingURL=island.js.map
