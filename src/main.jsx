import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Greeting from './components/Greeting';
import './index.css';
import store from './redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'greeting',
    element: <Greeting />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
