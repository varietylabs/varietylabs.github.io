import { ThemeOptions } from "@mui/material";
import { AppColors, ColorRange } from "./colors";

declare module "@mui/material/styles" {
  interface CustomTheme {
    colors: ColorRange;
  }

  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    card: Palette["primary"];
  }
  interface PaletteOptions {
    card: PaletteOptions["primary"];
  }
}

const base: ThemeOptions = {
  colors: AppColors,

  typography: {
    fontFamily: ["Iowan Old Style", "serif"].join(","),
    fontSize: 16,
    fontWeightBold: 600,
    fontWeightLight: 200,
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.2rem",
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "1.125rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 1,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
};

export const theme: ThemeOptions = {
  ...base,
  palette: {
    mode: "light",
    primary: {
      main: AppColors.amber[200],
      light: AppColors.amber[100],
      dark: AppColors.amber[300],
    },
    secondary: {
      main: AppColors.gray[200],
      light: AppColors.gray[100],
      dark: AppColors.gray[300],
    },
    background: {
      default: "#ffffff",
      paper: AppColors.gray[100],
    },
    text: {
      primary: "#000000",
      secondary: AppColors.gray[700],
      disabled: "rgba(255,255,255,0.4)",
    },
    divider: AppColors.gray[200],
    card: {
      main: AppColors.gray[300],
      light: AppColors.gray[50],
      dark: AppColors.gray[400],
    },
  },
  components: {
    ...base.components,
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#ffffff",
          borderWidth: 0.5,
        },
      },
    },
  },
};
