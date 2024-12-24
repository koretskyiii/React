import { Button } from '@mui/material';

const CustomButton = ({ submit, text, color, handler }) => {
  return submit ? (
    <Button
      variant="contained"
      type="submit"
      fullWidth
      sx={{ width: "75%" }}
      color='primary'
    >
      {text}
    </Button>
  ) : (
    <Button
      variant="outlined"
      color={color}
      sx={{ marginRight: 1 }}
      onClick={handler}
    >
      {text}
    </Button>
  );
};


export default CustomButton;
