import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'
import { RootState, AppDispatch } from './utils/types';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { socketMiddleware } from './services/middleware/socket-middleware';
import { 
  connect as LiveTableWsConnect, 
  disconnect as LiveTableWsDisconnect,
  wsConnecting as LiveTableWsConnecting,
  wsOpen as LiveTableWsOpen,
  wsClose as LiveTableWsClose,
  wsMessage as LiveTableWsNessage,
  wsError as LiveTableWsError 
} from './services/actions/web-socket';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const wsActions = {
  wsConnect: LiveTableWsConnect,
  wsDisconnect: LiveTableWsDisconnect,
  wsConnecting: LiveTableWsConnecting,
  onOpen: LiveTableWsOpen,
  onClose: LiveTableWsClose,
  onError: LiveTableWsError,
  onMessage: LiveTableWsNessage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

export const store = createStore(rootReducer, enhancer);

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
