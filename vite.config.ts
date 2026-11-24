import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// In dev, serve public/<path>/index.html for /<path> and /<path>/, as GitHub Pages does,
// so standalone pages such as /blog/bench-the-weights/ open instead of the app's 404.
const publicIndexPages = (): Plugin => ({
  name: "public-index-pages",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = (req.url ?? "").split("?")[0];
      const dir = url.replace(/\/+$/, "");
      if (dir && !path.extname(dir) && fs.existsSync(path.join(__dirname, "public", dir, "index.html"))) {
        req.url = `${dir}/index.html`;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    publicIndexPages(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
