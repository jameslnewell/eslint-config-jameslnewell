var person;

person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

person.prototype.dance = function()
{
  return this.firstName+' will never dance!!!';
};

var jameslnewell = new person("James", 'Newell');;

for (var i=0; i < 3; ++i) {
  jameslnewell.dance();
}
