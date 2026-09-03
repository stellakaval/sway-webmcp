import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({base:'/sway-webmcp/',plugins:[react()],test:{environment:'jsdom'}});
