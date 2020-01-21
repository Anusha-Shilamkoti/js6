

class Shape {
    constructor(a){
        this.Area=a;
    } 
   display(){
        console.log("area of this shape is:"+this.Area)
   }
} 
class Circle extends Shape{
    constructor(a){
        super()
        this.Area=a
    }
    display(){
        console.log("Area of Circle: "+this.Area*this.Area)
    }
}
class Rectangle extends Shape{
    constructor(a,b){
        super();
        this.h=a
        this.w=b
    }
    display(){
        super.display();
        console.log("Area of Sqaure="+this.h*this.w)
    }
}

/*var c=new Circle(4)
c.display()

var obj=new Shape(28);
obj.display();*/
var r=new Rectangle(4,3)
r.display();