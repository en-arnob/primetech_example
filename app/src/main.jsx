import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { Toaster } from "react-hot-toast";
import Routex from "./Routex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
      }}
    />
    <Routex />
  </Provider>
);
