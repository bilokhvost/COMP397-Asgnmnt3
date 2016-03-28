module objects {
    // GRASS CLASS ++++++++++++++++++++++++++++++++++++
    export class Grass extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("grass");
            
           this._speed.x = -5; //grass speed
           this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the right bound of the grass is met the right bound of the scene
            
            if(this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the grass offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the grass 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(-640);
        }
    }
}