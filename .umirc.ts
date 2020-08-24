import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  antd: {},
  request: false,
  layout: {
    locale: false,
  },
  dva: {
    immer: true,
    hmr: true,
  },
  locale: false,
  ignoreMomentLocale: true,
  targets: {
    ie: 11,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
