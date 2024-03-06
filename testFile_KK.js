function Person (name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        return "Hello, " + this.name + "! " + "You are " + this.age + " " + "years old."
    }
}

Person.prototype.celebrateBirthday = function (){
    return this.age + 1
};

const personGirl = new Person("Elly", 15);
console.log(personGirl.greet());
console.log(`Next year ${personGirl.name} you will be ${personGirl.celebrateBirthday()}`)


const personBoy = new Person("Max", 12);
console.log(personBoy.greet());
console.log(`Next year ${personBoy.name} you will be ${personBoy.celebrateBirthday()}`)

const personMen = new Person("Alexander", 42)
console.log(personMen.greet());
console.log(`Next year ${personMen.name} you will be ${personMen.celebrateBirthday()}`)

