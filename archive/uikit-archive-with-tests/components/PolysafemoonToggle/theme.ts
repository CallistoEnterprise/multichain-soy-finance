import { darkColors, lightColors } from "../../theme/colors";
import { PolysafemoonToggleTheme } from "./types";

export const light: PolysafemoonToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: PolysafemoonToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
