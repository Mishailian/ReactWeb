import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore.js';
import StoreContext from './StoreContext';

export const renderEntireTree = (state) => {

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );

}
renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
