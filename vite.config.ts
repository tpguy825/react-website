import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import htmlPurge from 'vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), htmlPurge()],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		}
	},
})
