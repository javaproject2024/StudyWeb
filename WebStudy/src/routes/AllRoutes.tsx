import CourseOptionDetails from "@/components/views/Courses/CourseOptionDetails";
import Footer from "@/components/views/Footer/Footer";
import HomePage from "@/components/views/HomePage/HomePage";
import Login from "@/components/views/Login/Login";
import OTPAutthentication from "@/components/views/Login/OTPAutthentication";
import SignUp from "@/components/views/Login/SignUp";
import NavBar from "@/components/views/Navigation/Navbar";
import TestPage from "@/components/views/TestPage/TestPage";
import * as PATH from "@/configs/routeConfig.tsx";

import {
  Route,
  Routes,
} from "react-router-dom";

function AllRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path={PATH.HOME_PATH}
          element={<HomePage />}
        />

        <Route
          path={PATH.LOGIN_PATH}
          element={<Login />}
        />
        <Route
          path={PATH.SIGNUP_PATH}
          element={<SignUp />}
        />
        <Route
          path={PATH.OTP_PATH}
          element={
            <OTPAutthentication />
          }
        />
        <Route
          path={PATH.TEST_PATH}
          element={<TestPage />}
        />
        <Route
          path={PATH.TEST_PATH_TITLE}
          element={<TestPage />}
        />
        <Route
          path={PATH.TEST_PATH_TITLE_ID}
          element={
            <CourseOptionDetails />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default AllRoutes;
