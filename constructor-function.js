//Constructor functions and the this keyword

function User (firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('John', 'Smith', 26, 'male');

user1;

var user200 = new User('Jill', 'Robinson', 25, 'female');

user200;

User.prototype.emailDomain = '@facebook.com';

User.prototype.getEmailAddress = function () {
    return this.firstName + this.lastName + this.emailDomain;
}