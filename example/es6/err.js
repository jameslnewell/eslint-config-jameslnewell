
var Person = {

  constructor: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  },

  dance: function() {
    return (this.firstName+' will never dance!!!');
  }

}

let jameslnewell = new Person('James', 'Newell');

for (const i=0; i < 3; ++i) {
  jameslnewell.dance();
}
