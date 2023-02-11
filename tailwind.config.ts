import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ["'General Sans'", "sans-serif"],
    },
    extend: {
      colors: {
        "light": "#ffffff",
        "secondary": "#ececec",
        "text": "#000000",
        'low-emphasis': '#636262',
        'img-1': '#c4c4c4',
        'img-2': '#9d9d9d',
      },
    },
  },
};
