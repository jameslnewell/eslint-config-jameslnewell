
/**
 * A person
 * @param {string} firstName The first name
 * @param {string} lastName  The last name
 */
class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  dance() {
    return '${this.firstName} will never dance!!!';
  }

}

const jameslnewell = new Person('James', 'Newell');

for (let i = 0; i < 3; ++i) {
  jameslnewell.dance();
}
