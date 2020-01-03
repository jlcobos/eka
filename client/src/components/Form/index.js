import React, { useContext } from "react";
import { AppState } from "../../AppState";
import TextInput from "./TextInput";

export default function Form({formName}){

    const { forms, handleOnChange } = useContext(AppState);
    return (
        <form>
            {forms[formName].formElements.map(formElement => {
                switch (formElement.inputType) {
                    case "text":
                    case "email":
                        return <TextInput key={formElement.name} input={formElement} handleOnChange={handleOnChange} formName={formName}/>;
                    case "password":
                        return <TextInput key={formElement.name} input={formElement} handleOnChange={handleOnChange} formName={formName}/>;
                    default: 
                        return null;
                }
            })}
        </form>
    )
}