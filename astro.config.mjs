import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://austinhomeappraiser.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always'
  }
});
