module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("island");
            
           this._speed.x = -5; //island speed
           this._reset(this._leftBounds);
           this.name = "island";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // is outside the viewport         
            if(this.x <= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.y = value;
            this.x = Math.floor(Math.random() * this._topBounds) + this._bottomBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            console.log(this.x);
            this._checkBounds(this._leftBounds);
        }
    }
}