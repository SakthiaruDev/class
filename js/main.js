// 1. Person

class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    display(){
        console.log(`Hi, Im ${this.name}, my age is ${this.age}, from ${this.country} `);
    }
}
let pre= new Person("Anu",26,"India");
let new1= new Person("Anu",26,"India");
let new2= new Person("geetha",21,"India");

new1.display();
new2.display();

// 2. Rectangle

class Rec{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    wid(){
        console.log("Perimeter of rectangle: "+ 2*(this.width+this.height));
    }
    heig(){
        console.log("Area of rectangle: "+ this.width*this.height);   
    }
}

let peri=new Rec(2,5);

peri.wid();
peri.heig();


// 3. BankAccount


class BankAccount{
    constructor(bankAcc,balance){
        this.bankAcc=bankAcc;
        this.balance=balance;
    }
    deposit(d){
        let c=this.balance+d;
        console.log(`Deposit amount is ${d}`);
        console.log(`Total amount is ${c}`);
    }
    withdraw(e){
        let f=this.balance-e;
        console.log(`withdraw amount is ${e}`);
        console.log(`Balance Amount is ${f}`);
    }
}

let bank=new BankAccount(250789,5000);

bank.deposit(500);
bank.withdraw(400)

// 4. Shape


class Shape{
	constructor(){
	}
	claArea(){
		console.log("area not defined")
	}
}
	class Circle extends Shape{
		constructor(radius){
			super()
			this.radius=radius;
		}
		claArea(){
			
			let ra=3.14*this.radius**this.radius
			console.log(`Area of Circle ${ra}`)
		}
	}
	class Triangle extends Shape{
		constructor(b,h){
			super()
			this.b=b;
			this.h=h;
		}
		claArea(){
			let tri=0.5*this.b*this.h;
			console.log(`Area of Triangle ${tri}`)
		}
	}

let rad=new Circle(10);

rad.claArea();

let tri=new Triangle(10,20);
tri.claArea();

// 5. Employee 

class Emp{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	annual(){
		return this.salary*12;
	}
}
	class manager extends Emp{
		constructor(name,salary,dept,bonus){
			super(name,salary)
			this.dept=dept;
			this.bonus=bonus;
		}
		annual(){
			let res=this.salary*12;
			return res+this.bonus;
		}
	}

	let man=new manager("sakthi",25000,"Font End",10000);
	let man1=new manager("Anu",40000,"Developer",15000);


	console.log(`${man.name} Annual salary is ${man.annual()}`);

// 6. Book

class Book{
	constructor(title,author,pubyear){
		this.title=title;
		this.author=author;
		this.pubyear=pubyear;
	}
	details(){
		console.log(`${this.title},${this.author},${this.pubyear}`);
	}
}
	class Ebook extends Book{
		constructor(title,author,pubyear,price){
			super(title,author,pubyear)
			this.price=price;
		}
		details(){
			console.log(`Title: ${this.title}, Author: ${this.author}, PubYear: ${this.pubyear}, Price: ${this.price}`);
		}
	}

	let book=new Ebook("The Unspoken Book","Gorick",2022,15000)
	let book1=new Ebook("The Advantage","Patrick Lencioni",2019,30000)

	console.log(book.details());
	console.log(book1.details());