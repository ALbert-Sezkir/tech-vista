import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landing, { loader as productsLoader } from "./pages/Landing";
import Product, { loader as productLoader } from "./pages/Product";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootLayout from "./components/RootLayout";
import CartContextProvider from "./context/CartContextProvider";
import AuthLayout from "./components/AuthLayout";
import CountContextProvider from "./context/CountContextProvider";

//different loader functions implemented in different routes, each function fetches different data from endpoints in api file
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} loader={productsLoader} />
        <Route path="/:id" element={<Product />} loader={productLoader} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <CartContextProvider>
      <CountContextProvider>
        <RouterProvider router={router} />
      </CountContextProvider>
    </CartContextProvider>
  );
}
export default App;
