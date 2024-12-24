import { TextField } from "@mui/material";
const TextInput = ({width, type, label, value, onChangeHandler}) => {
    return (
        <TextField
                label={label}
                type={type}
                value={value}
                onChange={onChangeHandler}
                fullWidth
                required
                margin="normal"
                sx={{ width: {width} }}
        />
    )
}
export default TextInput