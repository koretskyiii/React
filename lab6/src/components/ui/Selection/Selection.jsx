import React from "react";
import PropTypes from "prop-types"
import { Select, MenuItem } from "@mui/material";

const Selection = ({ value, label, onChangeHandler, error }) => {

  return (
    <Select
      value={value}
      onChange={onChangeHandler}
      label={label}
      error={!!error}
      defaultValue={"all"}
    >
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="Food">Food</MenuItem>
      <MenuItem value="Transport">Transport</MenuItem>
      <MenuItem value="Entertainment">Entertainment</MenuItem>
      <MenuItem value="Housing">Housing</MenuItem>
      <MenuItem value="Health">Health</MenuItem>
      <MenuItem value="Education">Education</MenuItem>
    </Select>
  );
};

Selection.propTypes = {
    value: PropTypes.string, 
    label: PropTypes.string, 
    onChangeHandler: PropTypes.func.isRequired, 
    error: PropTypes.object, 
  };

export default Selection;
