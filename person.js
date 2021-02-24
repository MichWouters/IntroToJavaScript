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

/* Modify a property */
michiel.name = 'Michelin';

/* Classes can also have functions */


console.log(michiel.sayHello());
console.log(jacky.sayHello());


/*console.log(michiel);
console.log(jacky);*/