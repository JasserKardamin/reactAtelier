import { createBrowserRouter } from "react-router-dom";
import { Events } from "./componets/Events";
import { EventDetails } from "./componets/EventDetails";
import { NotFoundPage } from "./pages/NotFoundPage";
import App from "./App";
import { AddEvent } from "./componets/AddEvent";
import { UpdateEvent } from "./componets/UpdateEvent";

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
      {
        path: "/event/update/:id",
        element: <UpdateEvent />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
