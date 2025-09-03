import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Load lovable-tagger only in development to avoid prod build errors
    ...(mode === "development"
      ? [
          (
            await import("lovable-tagger").catch(() => ({ componentTagger: () => undefined }))
          ).componentTagger?.()
        ].filter(Boolean)
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
