let people = ['Michiel', 'Jacky'];

// For of loop -> Loop over every object in collection
for (const iterator of people) {
    console.log(iterator.toUpperCase());
}

// Foreach loop -> Loop over every object in collection
people.forEach(element => {
    console.log(element.toLowerCase());
});


class Person{
    constructor(name, age, hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    sayHello(){
        return 'Hello, my name is ' + this.name;
    }
}

/* Create new instances */
let michiel = new Person('Michiel', '19', 'Teaching');
let jacky = new Person('Jacky', 42, ['boxing', 'punching people in the face']);

// For in loop -> Loop over every property in class
for (property in michiel){
    console.log(michiel[property].toUpperCase());
}