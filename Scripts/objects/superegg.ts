module objects {
    // SUPEREGG CLASS ++++++++++++++++++++++++++++++++++++
    export class SuperEgg extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("superegg");            
           this._speed.x = -50; //superegg speed
           this._reset(this._rightBounds);
           this.name = "superegg";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right part of the superegg is outside the viewport         
            if(this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the superegg offscreen
        protected _reset(value:number):void {          
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds; 
            console.log(this._topBounds);          
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the egg 5 px per frame
            this.x += this._speed.x;          
            this._checkBounds(this._leftBounds);
        }
    }
}