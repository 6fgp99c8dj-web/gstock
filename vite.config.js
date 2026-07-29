// vite.config.js
import { defineConfig } from "vite";
import react            from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir:    "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // チャンク分割（初回ロード最適化）
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "ui-vendor":    ["lucide-react"],
        },
      },
    },
  },

  // 開発サーバー設定
  server: {
    port: 5173,
    host: true,  // LAN 内の実機からアクセス可能
  },
});
