function processData(input) {
    if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()){
    input = input.toLowerCase();
    console.log (input.charAt(0).toUpperCase() + input.slice(1))
    } else if (input === input.toUpperCase()){
    input = input.toLowerCase();
    console.log(input)
    } else {
    console.log(input);
    }
} 