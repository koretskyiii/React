import {MenuItem, Select} from "@mui/material";
const Selection = ({filter, onChangeHandler, label}) => {
    return (
        <Select value={filter} onChange={onChangeHandler} label = {label ? label : ""}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Housing">Housing</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
        </Select>
    )
}
export default Selection
