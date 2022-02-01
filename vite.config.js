import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://vigilant-swanson-b515f7.netlify.app/',
	plugins: [ react() ]
});
