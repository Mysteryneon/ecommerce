import React from "react";
import TextField from '@material-ui/core/TextField';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <TextField
      {...otherProps}
      id={`form-field-${label}`}
      label={label ? label : ''}
      variant="outlined"
    />
);

export default FormInput;
