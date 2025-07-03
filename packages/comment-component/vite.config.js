import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	host: "comment-component.wagner.local",
	// 	port: 80
	// },

	build: {
		lib: {
			entry: resolve(__dirname, "entry.js"),
			name: "CommentComponent",
			fileName: (format) =>
				`comment-component.${format === "es" ? "js" : "umd.cjs"}`,
			formats: ["es", "umd"]
		},
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				}
			}
		}
	}
});
