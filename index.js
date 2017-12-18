//lecture: variables 

/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26; 
console.log(age);

var fullAge = false; 
console.log(fullAge);
*/

//Lecture: variables 2
var name = 'John'; 
var age = 26; 

// console.log(name +" " + age);
// console.log( age + age);

//undefined variable
var job, isMarried; 
// console.log(job);

job = 'teacher';
isMarried = false; 

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six'; 
job= 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);

//lecture: operators
var now = 2016;
var birthYear = now  - 26; 
birthYear = now - 26 * 2; 
console.log(birthYear);

var ageJohn = 30; 
var ageMark = 30; 

// ageJohn = ageMark = 'undefined'; 

ageJohn ++;
ageMark *=2;
console.log(ageJohn);
console.log(ageMark);

var name = 'John';
var age = 26; 
var isMarried = 'yes';

if(isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon!');
}

isMarried = true; 

if(isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}

if(23 === "23"){
    console.log('something to print..');
}

//lecture: boolean logic and switch 
var age = 20; 

if (age<20) {
    console.log('John is a teenage');
} else if (age >= 20 && age <30 ){
    console.log ('John is a young adult')

} else {
    console.log('John is a man.');
}

// var job = 'teacher';
// job = prompt('What does John do?'); 

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop': 
        console.log('John helps fight crime.');
        break;
    default: 
        console.log('John does something else.')
}

//CODING CHALLENGE # 1

alert('Try and figure out which random person will win and why each person wins!')

var johnHeight = prompt ('What is John\'s height in centimeters?');

var friendHeight= prompt ('What is Bob\'s height in centimeters?');

var anotherHeight= prompt ('What is Kim\'s height in centimeters?');

var johnAge= prompt ('What is John\'s age?');
var friendAge=  prompt ('What is Bob\'s age?');  
var anotherAge=  prompt ('What is Kim\'s age?');  

var johnScore = johnHeight + 5 * johnAge; 
var friendScore = friendHeight + 5 * friendAge; 
var anotherScore = anotherHeight + 5 * anotherAge; 

if ( johnScore > friendScore && 
     johnScore > anotherScore) {
        alert('John wins ' + johnScore + ' points!');
        alert(
        'John scored: ' + johnScore +". " + 
        'Bob scored: ' + friendScore + '. ' + 
        'Kim scored: ' + anotherScore +". ");
} else if (friendScore > johnScore && 
           friendScore > anotherScore) {
            alert('Bob wins ' + friendScore + ' points!');
            alert('John scored: ' + johnScore +". " + 
                  'Bob scored: ' +  friendScore + '. ' + 
                  'Kim scored: ' + anotherScore + ". ");
} else if (anotherScore > johnScore && 
           anotherScore > friendScore) {
            alert('Kim wins '+ anotherScore + ' points!');
            alert('John scored: ' + johnScore + ". " + 
                  'Bob scored: ' + friendScore + '. ' + 
                  'Kim scored: ' + anotherScore + ". ");
} else if (johnScore === friendScore ||
           johnScore ===anotherScore || 
           friendScore === anotherScore){
    alert('There has been a tie!');
    alert('John scored: ' + johnScore +". " + 
          'Bob scored: ' + friendScore + '. ' + 
          'Kim scored: ' + anotherScore +". ");
}
