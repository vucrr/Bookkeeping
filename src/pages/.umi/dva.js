import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  app.use(require('/Users/viser/code/react_project/Bookkeeping/node_modules/dva-immer/dist/index.js')());
  app.model({ namespace: 'home', ...(require('/Users/viser/code/react_project/Bookkeeping/src/models/home/home.js').default) });
app.model({ namespace: 'mine', ...(require('/Users/viser/code/react_project/Bookkeeping/src/models/mine/mine.ts').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
