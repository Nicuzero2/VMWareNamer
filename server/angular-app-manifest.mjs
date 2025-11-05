
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/VMWareNamer/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/VMWareNamer"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 448, hash: 'a3c0d6e6666f3cf3803e2ff5780efb347f7d2654a88774784adb7b0817ab6038', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '4e43a22526e9c55a8d762d564b67c732c810a9432140fd3578619beb9ca9e7c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21582, hash: 'caee18314385cb61e7d44bd1028de5c09b8d0edd84b7ede18f3426788e594eaf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
