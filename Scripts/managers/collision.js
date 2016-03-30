//*********************************************************************
//Source file: collision.ts                                           *
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
var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            var isCollided = false;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's an egg hit
                if (object.name === "egg") {
                    isCollided = true;
                    console.log("egg hit!");
                }
                // check if it's a cloud hit
                if (object.name === "eagle") {
                    console.log("eagle hit!");
                    isCollided = true;
                }
                // check if it's a super egg hit
                if (object.name === "superegg") {
                    isCollided = true;
                    console.log("superegg hit!");
                }
            }
            return isCollided;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));

//# sourceMappingURL=collision.js.map
