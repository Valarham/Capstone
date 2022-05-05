// // scroll bar
// import 'simplebar/src/simplebar.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { BrowserRouter } from 'react-router-dom';
// // import { HelmetProvider } from 'react-helmet-async';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import { SnackbarProvider } from 'notistack';
// import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

// // ----------------------------------------------------------------------

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store()}>
//       <SnackbarProvider
//         maxSnack={2}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//       >
//         <Router>
//           <App />
//         </Router>
//       </SnackbarProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to enable client cache, register instead.
// serviceWorker.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// scroll bar
import 'simplebar/src/simplebar.css';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------------------------------------

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root'),
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();