

class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "Warm-Blooded";
    }

    eat() {
        console.log("I am eating");
    }   
}
class Dog extends Mammal{
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Woof");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name);
    }
    meow() {
        console.log("Meow");
    }
}
