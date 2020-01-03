export const signupForm2 = {
    formName: "signupForm2",

    formElements: [
        {
            id: "signupFirstName",
            name: "firstName",
            displayName: "First Name",
            inputType: "text",
            value: "",
            required: true,
            validationType: "text",
            minLength: false,
            maxLength: false,
            valid: true,
            errorMessage: "",
        },
        {
            id: "signupLastName",
            name: "lastName",
            displayName: "Last Name",
            inputType: "text",
            value: "",
            required: true,
            validationType: "text",
            minLength: false,
            maxLength: false,
            valid: true,
            errorMessage: "",
        },
        {
            id: "signupTelephoneNumber",
            name: "telephoneNumber",
            displayName: "Phone Number",
            inputType: "text",
            value: "",
            required: true,
            validationType: "numeric",
            minLength: 10,
            maxLength: 10,
            valid: true,
            errorMessage: "",
        },
    ],

    getFormValues: getFormValues.bind(this),
}

function getFormValues(){
    return {
        firstName: this.formElements.find(e => e.name === "firstName").value,
        lastName: this.formElements.find(e => e.name === "lastName").value,
        telephoneNumber: this.formElements.find(e => e.name === "telephoneNumber").value,
    }
}