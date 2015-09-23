var jameslnewell, i;

/**
 * A person
 * @constructor
 * @param {string} firstName The first name
 * @param {string} lastName  The last name
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.dance = function() {
  return this.firstName + ' will never dance!!!';
};

jameslnewell = new Person('James', 'Newell');

for (i = 0; i < 3; ++i) {
  jameslnewell.dance();
}
