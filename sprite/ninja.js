class Ninja {
    constructor() {
        this.x = 100;
        this.y= 100;
        this.w = 30;
        this.h = 45;
        this.s = 10;
    }
    show(){

       

        strokeWeight(0.1);
        fill(252, 222, 162);
        rect(this.x, this.y, this.w, this.h);
    }

}