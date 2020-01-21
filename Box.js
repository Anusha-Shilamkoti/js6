class Car{
    constructor(c){
        this.car=c
    }
    run(){
        console.log("Speed of Car is: "+this.car)
    }
}
class MaruthiSuzuki extends Car{
    /*constructor(s){
        super();
        this.speed=s
    }*/
    run(){
        super.run();
        console.log("Speed of MaruthiSuzuki is: "+this.speed+"kmph")
    }
}
class Maruti extends MaruthiSuzuki{
   /* constructor(ms){
        super();
        this.maruthiSpeed=ms
    }*/
    run(){
        super.run();
        console.log("Speed of Maruti is: "+this.maruthiSpeed+"kmph")
    }
}
/*var b=new Car(6)
b.run();*/
var m=new Maruti(250)
m.run();
