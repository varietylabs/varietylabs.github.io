import { Color } from "@mui/material";

export type ColorRange = Record<
  "amber" | "gray",
  Omit<Color, "A100" | "A200" | "A400" | "A700"> | string
>;

export const AppColors: ColorRange = {
  gray: {
    50: "#F4F6F8",
    100: "#EFF0F3",
    200: "#E0E3E9",
    300: "#CCD0D6",
    400: "#6E7482",
    500: "#6b7280",
    600: "#4E5969",
    700: "#353F4F",
    800: "#202A3D",
    900: "#141C2C",
  },
  amber: {
    50: "#FF8170",
    100: "#FF6F5C",
    200: "#FF5D47",
    300: "#FF4B33",
    400: "#FF3A20",
    500: "#FF270A",
    600: "#F51D00",
    700: "#E01A00",
    800: "#CC1800",
    900: "#B81500",
  },
};
