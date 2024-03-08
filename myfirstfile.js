console.log("Hello World");
console.log("second log");

let a = 5;
let c = 8;
let d = 10;

const arr = [];

console.log('first commit');
arr.push('a');
console.log(arr);

function sumNums(a, b, c) {
    return (a + b + c);
}

let result = sumNums(a, c, d);
console.log(result);

function Person(name, age, profession, country){
    this.name = name
    this.age = age
    this.profession = profession
    this.country = country
}

const user1 = new Person("John", 25, "developer", "Unites States")
user1.lastName = 'Doe'
Person.prototype.nationality = "English"
console.log(user1)
console.log(user1.nationality)

let room = {
    height: 3,
    tv: "samsung",
    big: true
};
console.log(room);


function login(group) {
    console.log("Hi, " + nameGroup + "!");
}

let nameGroup = "group_is_for_qas08";

login(nameGroup);