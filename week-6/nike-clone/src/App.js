import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import { FavoritesProvider } from './context/FavoritesContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: 'products/:productId', // : => reason is dynamic route
    element: <ProductDetail />
  }
]);

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </div>
  );
}

export default App;
