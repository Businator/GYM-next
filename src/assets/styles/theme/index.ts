import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        rectangular: {
          backgroundColor: "gray",
        },
      },
    },
  },
});
