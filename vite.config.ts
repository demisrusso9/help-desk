import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@ui': path.resolve(__dirname, './src/ui'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@api': path.resolve(__dirname, './src/api'),
			'@utils': path.resolve(__dirname, './src/utils')
		}
	}
})
