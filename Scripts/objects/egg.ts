module objects {
    // EGG CLASS ++++++++++++++++++++++++++++++++++++
    export class Egg extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("egg");            
           this._speed.x = -5; //egg speed
           this._reset(this._rightBounds);
           this.name = "egg";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right part of the egg is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the egg offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) - Math.floor(Math.random() * this._topBounds);           
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the egg 5 px per frame
            this.x += this._speed.x;          
            this._checkBounds(this._leftBounds);
        }
    }
}