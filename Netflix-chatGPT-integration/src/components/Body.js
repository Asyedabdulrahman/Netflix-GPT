import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import Error from "./Error";
import GPTSearch from "./GPTSearch";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
    {
      path: "/Error",
      element: <Error />,
    },
    {
      path: "/GPT",
      element: <GPTSearch />,
    },
  ]);

  return (
    <div className="bg-black">
      <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body;
