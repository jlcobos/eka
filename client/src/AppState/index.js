import React from "react";
import forms from "./Forms";
import Validation from "./Forms/Validation";


export const AppState = React.createContext();

export class AppStateProvider extends React.Component {

    state = {
        forms
    }

    handleFormSubmit = (formName) => {
        const {isValid, form} = Validation({...this.state.forms[formName]});

        this.setState({[formName]: form})

        return isValid;
    }

    handleOnChange = (e, formName) => {
        const { name, value } = e.target;
        const form = {...this.state.forms[formName]};

        form.formElements.find(formElement => formElement.name === name).value = value;

        this.setState({[formName]: form});
    }


    test = () => {
        console.log("test");
        const data = {
            userName: "userName",
            firstName: "firstName",
            lastName: "lastName",
            password: "password",
            email: "email",
            telephoneNumber: "telephoneNumber",
            streetAddress: "streetAddress",
            city: "city",
            state: "tate",
            zip: "zip",
        }
        fetch("/api/new-user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),    
        })
        .then(res => console.log(res))
        .then(res => console.log(res));
    }

    render(){
        this.test();
        return (
            <AppState.Provider value={{
                forms: this.state.forms,
                handleOnChange: this.handleOnChange,
                handleFormSubmit: this.handleFormSubmit,
                }} 
            >
                {this.props.children}
            </AppState.Provider>
        )
    }
}