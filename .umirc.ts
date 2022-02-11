import { defineConfig } from 'dumi';

const repo = 'lucky_code';

export default defineConfig({
  title: '漂老师，每天学一丢丢',
  favicon: '/images/log.jpeg',
  logo: `/${repo}/images/log.jpeg`,
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/xiaojhh',
    },
  ],
  // more config: https://d.umijs.org/config
});
