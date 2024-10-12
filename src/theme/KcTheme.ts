import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
      customPalette: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        color6: string;
        color7: string;
        color8: string;
        color9: string;
      };
    }
    interface PaletteOptions {
      customPalette?: {
        color1?: string;
        color2?: string;
        color3?: string;
        color4?: string;
        color5?: string;
        color6?: string;
        color7?: string;
        color8?: string;
        color9?: string;
      };
    }
}

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#0077B6",
            dark: "#023E8A",
            light: "#0096C7",
        },
        secondary: {
            main: "#00B4D8",
            dark: "#48CAE4",
            light: "#90E0EF",
        },
        background: {
            default: "#03045E",
            paper: "#CAF0F8",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#000000",
        },
        customPalette: {
            color1: "#03045E",
            color2: "#023E8A",
            color3: "#0077B6",
            color4: "#0096C7",
            color5: "#00B4D8",
            color6: "#48CAE4",
            color7: "#90E0EF",
            color8: "#ADE8F4",
            color9: "#CAF0F8",
        }
    },
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
    },
});

export default theme;
