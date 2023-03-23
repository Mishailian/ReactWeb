import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';

export const renderEntireTree = (store) => { 

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
  );

}

renderEntireTree(store);

store._refreshDom(renderEntireTree);
