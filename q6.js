//OBJECT METHODS

let myProfile = {
    name:"Noble",
    age: 26,
    country: "Nigeria",
    hobby: "travelling"
}

function displayProfile(person) {
    console.log(`My name is ${person.name}, I am ${person.age} years old living in ${person.country}. I love ${person.hobby}`)
    
}
displayProfile(myProfile)