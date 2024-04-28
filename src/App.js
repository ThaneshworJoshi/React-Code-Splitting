import React from 'react';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

// Prefetch Contact component on page load
const LazyLoadContact = React.lazy(() => import(/* webpackPrefetch: true*/ './components/Contact'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <React.Suspense fallback={<div>Loading...</div>}>
      <LazyLoadContact />,
    </React.Suspense>
  },
]);


function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
