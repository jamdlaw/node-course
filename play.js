/* create a second array, by reference */
/*
    const hobbies = ['surfing', 'guitar'];
    // creates another array by reference. 
    const moreHobbies = hobbies;
    //now add a element to the original array
    hobbies.push('ukulele');
    //notice booth hobbies and moreHobbies has the same data. 
    console.log(hobbies);
    console.log(moreHobbies)
*/

/* create a second array using the spread oporator */
/*
    const hobbies = ['surfing', 'guitar'];
    // creates another array using the spread oporator 
    // creates the array by value
    const moreHobbies = [...hobbies];
    //now add a element to the original array
    hobbies.push('ukulele');
    //notice only the first array has the value of ukulele, 
    //proving the array is an independant copy
    console.log(hobbies);
    console.log(moreHobbies)
*/
// now lets see how the spread oporator works
// for objects 

// use the spread oporator 
/*
    const person = {
        name: "James Lawrence",
        age: 40,
        greet() {
            console.log('Hello my name is ' + this.name);
        },
        hobbies: [
            "sufing",
            'singing',
            'guitar',
            'ukulele'
        ] 
    };

    const anotherPerson = {...person};
    anotherPerson.name = 'Bradly Lawrence';
    anotherPerson.age = '18';

    //console.log(person.greet());
    console.log(anotherPerson);
*/

// the rest oporator is the same as the spread oporator 
const toArray = (...args) =>{
    return args;
}

console.log(toArray(1,2,3,4));