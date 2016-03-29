module objects {
    // EAGLE CLASS ++++++++++++++++++++++++++++++++++++
    export class Eagle extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("eagle");
            
           this._reset(this._rightBounds);
           this.name = "eagle";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the eagle is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the eagle offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 6;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds; 
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the eagle down the screen and check wheather it is visible
            this.x -= this._speed.x;
            console.log(this._speed.y);
            this.y += this._speed.y;
            this._checkBounds(this._leftBounds);
        }
    }
}