import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import ProductView from "../src/ProductView";
import CartView from "../src/CartView";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductView />,
  },
  { path: "/cart", element: <CartView /> },
]);
export default router;
