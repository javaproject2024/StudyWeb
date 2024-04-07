// import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import AllRoutes from "./AllRoutes";

const AppRouter = () => {
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: PATH.HOME_PATH,
  //       element: <HomePage />,
  //     },
  //     {
  //       path: PATH.LOGIN_PATH,
  //       element: <Login />,
  //     },
  //   ],
  //   { basename: "/" },
  // );
  // <BrowserRouter>
  //   <NavBar />
  //   <RouterProvider
  //     router={router}
  //   ></RouterProvider>
  //   <Footer />
  // </BrowserRouter>
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
