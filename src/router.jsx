import { createBrowserRouter } from "react-router-dom";
import { Events } from "./componets/Events";
import { EventDetails } from "./componets/EventDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import App from "./App";
import { AddEvent } from "./componets/AddEvent";

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
      { path: "/event/add", element: <AddEvent /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
