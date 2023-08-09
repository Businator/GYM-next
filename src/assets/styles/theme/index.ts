import { createTheme } from '@mui/material';

export const themeMUI = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        rectangular: {
          backgroundColor: 'gray',
        },
      },
    },
  },
});
