const commonStyles = {
  textField: {
    "& .MuiInputBase-input": {
      color: "#3b5d50",
      height: '24px',
      width: '20rem'
    },
    "& .MuiFormLabel-root": {
      color: "#3b5d50",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#768e85",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#f8b810",
    },
  },
  select: {
    backgroundColor: '#4f6d62',
    color: '#fff',
    height: '24px',
    border: '1px solid #3b5d50',
    borderRadius: '4px',
    "& option": {
      color: '#fff',
    },
  },
  button: {
    backgroundColor: '#3b5d50',
    borderColor: '#3b5d50',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#4a7b65',
      borderColor: '#4a7b65',
    },
    '&:active': {
      backgroundColor: '#2d453c',
      borderColor: '#2d453c',
    },
  },
};

export default commonStyles;
