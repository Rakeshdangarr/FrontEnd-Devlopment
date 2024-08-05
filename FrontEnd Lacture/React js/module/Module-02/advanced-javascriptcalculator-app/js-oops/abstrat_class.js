/*
abstract class is used to access class properties by its child class
or 
whenever we create a class as abstract we never create an object of abstract class but we access by its child class
*/ 

abstract class A
{
constructor
{
    this.name;

}
}

class B extends A
{
    constructor(name,age)
    {
        super(name);
        this.age=age;

    }
}

var obj=new B ("Rakesh",27);
console.log(obj);


// note : abstract is only support by .ts properties meanse 