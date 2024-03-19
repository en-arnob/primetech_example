import { RouterProvider } from "react-router-dom";
import router from "../Routers/Router";

const Routex = () => {
  return (
    <>
      <div className="App">{<RouterProvider router={router} />}</div>
    </>
  );
};

export default Routex;
