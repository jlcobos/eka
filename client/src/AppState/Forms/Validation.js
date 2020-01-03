import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';

function validate(form){
    let errors = 0;
    form.formElements = form.formElements.map(input => {

        let { value, required, inputType, displayName, minLength, maxLength, validationType} = input;

        input.valid = true;

        if (required && isEmpty(value)) {
            input.valid = false;
            input.errorMessage = `${displayName} Required`
            errors++;
            return input;
        } else if (inputType === "email" && !isEmail(value)) {
            input.valid = false;
            input.errorMessage = `Please Enter a Valid Email`
            errors++;
        } else if ((value.length < minLength || value.length > maxLength) && minLength !== maxLength) {
            input.valid = false;
            errors++;
            input.errorMessage = `${displayName} must be ${minLength} to ${maxLength} characters/digits`
        } else if ( value.length < minLength && minLength === maxLength) {
            input.valid = false;
            errors++;
            input.errorMessage = `${displayName} must be ${minLength} characters`
        }  
        if (validationType === "numeric" && !isNumeric(value)) {
            input.valid = false;
            errors++;
            input.errorMessage = `${displayName} can only contain numbers`;
        }
        return input;
    });
    if (errors === 0) return { isValid: true, form }
    else return {isValid: false, form};
}

export default validate;