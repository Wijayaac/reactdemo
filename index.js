// before es6
function Person(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + " " +this.lastName;
}

var wijaya = new Person("1", "Wijaya", "Ac");
console.log(wijaya.getFullName());

// es 6
class PersonEs{
    constructor(id,firstName,lastName) {
        this.id = id;
        this.firstName=firstName;
        this.lastName=lastName; 
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let kadek = new PersonEs("id", "Kadek", "Wijaya")
console.log(kadek.getFullName())