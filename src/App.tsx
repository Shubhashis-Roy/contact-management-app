import React from "react";
import Contact from "./pages/Contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import Body from "./component/Body.tsx";
import Error from "./component/Error.tsx";
import Chart from "./pages/Chart.tsx";
import ContactList from "./pages/ContactList.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ContactList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/chart",
        element: <Chart />,
      },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />;
    </Provider>
  );
}
