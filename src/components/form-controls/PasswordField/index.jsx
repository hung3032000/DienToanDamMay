// import { FormHelperText } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  // const { errors } = form;
  // const hasError = !!errors[name];
  return (
    <FormControl
      // error={hasError}
      fullWidth
      margin="normal"
      variant="outlined"
    >
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <TextField
            id={name}
            type="password"
            label={label}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required
          />
        )}
      />

      {/* <FormHelperText>{errors[name]?.message}</FormHelperText> */}
    </FormControl>
  );
}
export default PasswordField;
