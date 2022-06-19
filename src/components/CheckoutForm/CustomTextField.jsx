import React from 'react';
import { TextField, Grid, Select, MenuItem } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({name, label, required}) => {
  const {control} = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({field}) => (
          <Select {...field}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        )}
        control={control}
        name={name}
        label={label}
        required={required}
        fullWidth
        as={TextField}
      />
    </Grid>
  )
}

export default FormInput;