import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import ProductView from "../src/ProductView";

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
]);
export default router;
