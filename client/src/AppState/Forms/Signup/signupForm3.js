export const signupForm3 = {
    formName: "signupForm3",

    formElements: [
        {
            id: "signupStreetAddress",
            name: "streetAddress",
            displayName: "Street Address",
            inputType: "text",
            value: "",
            required: true,
            validationType: "text",
            minLength: false,
            maxLength: false,
            valid: true,
            validationMessages: {
                required: () => `Street Adress Required`,
            }
        },
        {
            id: "signupCity",
            name: "city",
            displayName: "City",
            inputType: "text",
            value: "",
            required: true,
            validationType: "text",
            minLength: false,
            maxLength: false,
            valid: true,
            validationMessages: {
                required: () =>  `City Required`,
            }
        },
        {
            id: "signupState",
            name: "state",
            displayName: "State",
            inputType: "text",
            value: "",
            required: true,
            validationType: "text",
            minLength: false,
            maxLength: false,
            valid: true,
            validationMessages: {
                required: () => `State Required`,
            }
        },
        {
            id: "signupZip",
            name: "zip",
            displayName: "Zip Code",
            inputType: "text",
            value: "",
            required: true,
            validationType: "numeric",
            minLength: 5,
            maxLength: 10,
            valid: true,
            validationMessages: {
                required: () => `Zip Code Required`,
            }
        },
    ],

    getFormValues: getFormValues.bind(this),
}

function getFormValues(){
    return {
        streetAddress: this.formElements.find(e => e.name === "streetAddress").value,
        city: this.formElements.find(e => e.name === "city").value,
        state: this.formElements.find(e => e.name === "state").value,
        zip: this.formElements.find(e => e.name === "zip").value,
    }
}