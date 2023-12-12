import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        loader: "sass-loader",
        additionalData: `
        $mg-ultra-small: 5px;
$mg-small: 10px;
$mg-medium: 15px;
$mg-large: 20px;
$mg-ultra-large: 30px;

$pd-ultra-small: 5px;
$pd-small: 10px;
$pd-medium: 15px;
$pd-large: 20px;
$pd-ultra-large: 30px;

$lh-small: 32px;
$lh-medium: 40px;
$lh-large: 60px;

$panel-width-medium: 260px;
        `,
      },
    },
  },
})