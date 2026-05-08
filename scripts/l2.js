function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    }

    return true;
}

console.log(isValidPassword("hello123", "shawna"));
console.log(isValidPassword("hi123", "shawna")); 
console.log(isValidPassword("hello 123", "shawna")); 
console.log(isValidPassword("shawna123", "shawna")); 