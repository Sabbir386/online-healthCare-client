import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73", // Fixed incorrect color format
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
        //   textTransform: "none",
        //   fontSize: 16,
          padding: "8px 24px",
        //   borderRadius: 8,
        //   fontWeight: 500,
        //   "&.Mui-disabled": {
        //     backgroundColor: "#e0e0e0",
        //     color: "#a0a0a0",
        //   },
        },
      },
    },

    MuiContainer:{
        defaultProps: {
            maxWidth: "lg",
        },
    }
  },

  typography:{
    body1:{
        color: "#0B1134CC",
    }
  }
  
});
theme.shadows[1] = "0px 5px 22px lightgray";
