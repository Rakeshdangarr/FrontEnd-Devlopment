/* encapsulation is an process where internal data will be hidden user can be interact with external data or see only external data that process is called encapsulations
or

wrapping up data in a single objects there we used encapsulations. 


*/

class employee 
{
    constructor(name,age,address)
    {
        this.name=name;
        this.age=age;
        this.address=address;
    }
}

class hr extends employee 
{
    constructor(name,age,address,department,designation,salary)
    {
        super(name,age,address)
        this.department=department;
        this.designation=designation;
        this.salary=salary;
    } 
}

class boss extends hr 
{
    constructor(name,age,address,department,designation,salary,bossname,address_boss)
    {
        super(name,age,address,department,designation,salary)
        this.bossname=bossname;
        this.address_boss=address_boss;
        
    }    
}

var ob=new boss("brijesh",35,"150 feet ring road rajkot","HR department","Head Hr",45800,"Mr ashish","sg highway");
console.log(ob);