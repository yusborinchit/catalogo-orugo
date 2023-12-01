import containersQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";

import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms, containersQueries],
};

export default config;
