import { IConfig } from 'umi-types';

const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/a/a.tsx' },
        { path: '/a', component: '../pages/a/a.tsx' },
        { path: '/b', component: '../pages/b/b.tsx' },
        { path: '/c', component: '../pages/c/c.tsx' },
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
      title: 'umi3',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }]
  ],
}

export default config;
