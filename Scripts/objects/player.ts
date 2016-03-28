module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _leftBounds: number;
        private _rightBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("rabbit"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.height * 0.75;
            this._rightBounds = config.Screen.HEIGHT - (this.height * 0.75);

            this.x = 120;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._leftBounds) {
                this.y = this._leftBounds;
            }

            if (this.y > this._rightBounds) {
                this.y = this._rightBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}