// This is the vitest.config.js filter:
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
  },
});
