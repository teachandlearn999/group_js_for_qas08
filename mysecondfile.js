let Obj = {
    name: "Lisa",
    lastName: "Smith",
    age: 18,

    getKey: function(){
    }
}
Obj.getKey = function(){
    console.log(Obj.name + " " + Obj.lastName + " " + Obj.age)
}

Obj.getKey()