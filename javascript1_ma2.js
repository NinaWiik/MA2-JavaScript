//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Animal() {
    this.kind = "Dog"
}

Animal.prototype.breed = function() {
    console.log("I am an Australian Shepherd but i inherit my kind from a " + this.kind );
};

var australianShepherd = new Animal ();
australianShepherd.breed();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var mySlicedNumbers = myNumbers.slice(4);

console.log (myNumbers);
console.log (mySlicedNumbers);

//3. Delete the last number in the array that you created above.
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNumbers.pop();

console.log (myNumbers);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
/*Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.*/
function fruitChange(speech) {
    if (typeof speech !== 'string') return "Strawberry";
    
    speech = speech.replace('strawberry', 'banana');
    speech = speech.replace('Strawberries', 'Bananas');
    speech = speech.replace('strawberries', 'bananas');
    speech = speech.replace('Strawberry', 'Banana');
    return speech; 
}

console.log (fruitChange ("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied"));



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var fotballClub = ['Arsenal', 'Liverpool', 'Manchester United', 'Chelsea'] 

buttonClick.addEventListener(
    'click',function(){
        fotballClub.splice (0,4);
        fotballClub.push('BWM', ' Mercedes', ' Volkswagen', ' Jaguar');
        document.getElementById("result").innerHTML = fotballClub;
        console.log(fotballClub);
    }
);



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
    {name: 'Tom', age: 26}, 
    {name: 'Jake', age: 30},
    {name: 'Buddy', age: 28}
]

var names = people.map(function(people) {
    return people.name
})

console.log(names);

//7. Create a simple function that logs the date.
var todaysDate = new Date();

console.log(todaysDate);
