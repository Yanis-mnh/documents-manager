import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router";
import SideBar from "./components/SideBar";
import Dossiers from "./pages/Dossiers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> 404 PAGE NOT FOUND </div>,
  },
  {
    path: "/dossier",
    element: <Dossiers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <SideBar></SideBar>
    <RouterProvider router={router} />
  </>
);
