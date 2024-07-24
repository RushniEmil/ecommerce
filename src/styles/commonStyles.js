const commonStyles = {
    textField: {
      "& .MuiInputBase-input": {
        color: "#3b5d50", // Text color
        height: '24px',
        width: '20rem'
      },
      "& .MuiFormLabel-root": {
        color: "#3b5d50", // Label color
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: "#768e85", // Underline color
      },
      "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#627d73", // Hover underline color
      },
    },
    select: {
      backgroundColor: '#4f6d62',
      color: '#fff',
      height: '24px', // Adjust the height as needed
      border: '1px solid #3b5d50',
      borderRadius: '4px',
      "& option": {
        color: '#fff',
      },
    },
  };
  
  export default commonStyles;
  