import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    include: ["**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["**/*"],
      exclude: ["**/*.d.ts"],
      reporter: ["html"],
    },
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: ["./vitest-setup.ts"],
    env: loadEnv("", process.cwd(), ""),
  },
});
