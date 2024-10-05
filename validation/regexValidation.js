// validation/regexValidation.js

// Regex patterns for validation
const nameRegex = /^[a-zA-Z]+$/; // Only alphabets
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/; // At least one uppercase, one lowercase, one number, one special character, and minimum 8 characters
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format
const confirmpasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/; // At least one uppercase, one lowercase, one number, one special character, and minimum 8 characters

// Validation functions
exports.isValidName = (name) => {
    return nameRegex.test(name);
};

exports.isValidPassword = (password) => {
    return passwordRegex.test(password);
};

exports.isValidconfirmpassword = (confirmpassword) => {
    return confirmpasswordRegex.test(confirmpassword);
};

exports.isValidEmail = (email) => {
    return emailRegex.test(email);
};
