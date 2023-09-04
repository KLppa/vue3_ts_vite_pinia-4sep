import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

const resolve = (p) => {
  return path.resolve(__dirname, p);
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
});
