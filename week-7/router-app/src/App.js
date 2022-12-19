import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/users/:userId',
    element: <User />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
