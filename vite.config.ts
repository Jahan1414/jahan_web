import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url'; // Добавил для корректного пути
import { defineConfig, loadEnv } from 'vite';

// Исправляем __dirname для ES модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    base: '',
    plugins: [react(), tailwindcss()],
    define: {
      // Передаем переменные окружения в клиентский код
      'process.env': env,
    },
    resolve: {
      alias: {
        // Теперь путь точно будет вести в папку src
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // Безопасная проверка переменной
      hmr: env.DISABLE_HMR !== 'true',
    },
    build: {
      // Настройка для корректного вывода файлов
      outDir: 'dist',
    }
  };
});
