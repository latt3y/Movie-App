import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://laurathaga.github.io/Movie-App/',
	plugins: [ react() ]
});
