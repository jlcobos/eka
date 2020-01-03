import React from "react";
import TextField from '@material-ui/core/TextField';

export default function TextInput({input: { id, name, displayName, inputType, value, valid, errorMessage }, formName, handleOnChange,}){
    return <TextField 
        id={id}
        name={name}
        label={displayName}
        type={inputType}
        fullWidth
        value={value}
        onChange={(e) => handleOnChange(e,formName)}
        error={!valid}
        helperText={valid ? "" : errorMessage }
        />
}