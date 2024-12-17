import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: green[500] },
    secondary: { main: blue[500] },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        m: "8px",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          ":hover": { border: "solid 0.5px" },
        },
      },
    },
    MuiFab: {
      styleOverrides: {},
      defaultProps: {
        size: "medium",
      },
      variants: [
        {
          props: { variant: "extended" },
          style: { borderRadius: 500 },
        },
      ],
    },
  },
});
