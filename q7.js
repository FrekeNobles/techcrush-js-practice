// STRING METHOD
function formatName(firstName, lastName) {
    const trimmedFirstName = firstName.trim("");
    const trimmedLastName = lastName.trim("");
    return `${trimmedLastName.toUpperCase()}, ${trimmedFirstName.charAt(0).toUpperCase() + trimmedFirstName.slice(1)}`
    
}

console.log(formatName(" freke ", " nobles "))