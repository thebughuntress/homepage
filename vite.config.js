import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    // Read the version from version.txt located in the root folder with 'utf8' encoding
    APP_VERSION: JSON.stringify(
      fs.readFileSync(path.resolve(__dirname, "version.txt"), "utf8").trim()
    ),
  },
});
