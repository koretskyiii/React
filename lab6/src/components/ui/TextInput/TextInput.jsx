import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const TextInput = ({ label, type, width, register, required, errorMessage }) => {
  return (
    <TextField
      label={label}
      type={type}
      {...register} 
      required={required}
      fullWidth
      variant="outlined"
      margin="normal"
      sx={{ width: width }}
      error={!!errorMessage} 
      helperText={errorMessage} 
    />
  );
};

TextInput.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired,  
    width: PropTypes.string,            
    register: PropTypes.object.isRequired, 
    required: PropTypes.bool,           
    errorMessage: PropTypes.string,     
  };

export default TextInput;
