import { IConfig } from 'umi-types';
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../pages/index',
      routes: [
        { path: '/', component: '../pages/home/home.tsx' },
        { path: '/home', component: '../pages/home/home.tsx' },
        { path: '/test', component: '../pages/test/test.tsx' },
        { path: '/mine', component: '../pages/mine/mine.tsx' },
      ]
    }
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true,
      },
      dynamicImport: true,
      title: 'bookKeep',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }]
  ],
  extraBabelPlugins: [
    ['import', { libraryName: "antd-mobile", style: true }],
  ],
}

export default config;
