/**
 * TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
 * Here we’re going to create a Student class with a constructor and a few public fields. Notice that classes and interfaces play well together,
 * letting the programmer decide on the right level of abstraction.
 * Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
 */

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

/**
 * Here we use an interface that describes objects that have a firstName and lastName field.
 * In TypeScript, two types are compatible if their internal structure is compatible.
 * */
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
