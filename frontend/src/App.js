// import './App.css';
// import WebFont from 'webfontloader';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { loadUser } from './actions/userAction';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// // routes
// import Router from './routes';
// // theme
// import ThemeProvider from './theme';
// // components

// import ScrollToTop from './components/ScrollToTop';
// import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
// // layouts
// import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// //
// import Blog from './pages/Blog';
// import User from './pages/User_myshop';
// import Login from './pages/Login';
// import NotFound from './pages/Page404';
// import Register from './pages/Register';
// import Products from './pages/Products';
// import DashboardApp from './pages/DashboardApp';
// // import { element } from 'prop-types';

// // ----------------------------------------------------------------------

// export default function App() {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   // const [stripeApiKey, setStripeApiKey] = useState("");

//   // async function getStripeApiKey() {
//   //   const { data } = await axios.get('/api/v1/stripeapikey');
//   //   setStripeApiKey(data.stripeApiKey);
//   // }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ['Roboto:300,400,500,600,700'],
//       },
//     });
//   });

//   useEffect(() => {
//     dispatch(loadUser());
//     // getStripeApiKey();
//   }, [dispatch]);

//   // always scroll to top on route/path change
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'smooth',
//     });
//   }, [pathname]);

//   // disable right click
//   window.addEventListener('contextmenu', (e) => e.preventDefault());
//   window.addEventListener('keydown', (e) => {
//     if (e.keyCode === 123) e.preventDefault();
//     if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
//     if (e.ctrlKey && e.shiftKey && e.keyCode === 74) e.preventDefault();
//   });
//   return (
//     <>
//       {/* <Routes>
//         <Route path="/" element={<DashboardApp />} />
//         <Route index element={<LogoOnlyLayout />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/404" element={<NotFound />} />

//         <Route path="/app" element={<DashboardApp />} />
//         <Route index element={<DashboardLayout />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/blog" element={<Blog />} />

//         <Route path="*" element={<NotFound />}></Route>
//       </Routes> */}
//       <ThemeProvider>
//         <ScrollToTop />
//         <BaseOptionChartStyle />
//         <Router />
//       </ThemeProvider>
//       ;
//     </>
//   );
// }
import './App.css';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
