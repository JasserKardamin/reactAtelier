import { createBrowserRouter } from "react-router-dom";
import { Events } from "./componets/Events";
import { EventDetails } from "./componets/EventDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Events /> },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event/:slug",
        element: <EventDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
