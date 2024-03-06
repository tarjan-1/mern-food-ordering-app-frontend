import ProtectedRoute from "@/auth/ProtectedRoute";
import Layout from "@/layout/Layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import HomePage from "@/pages/HomePage";
import UserProfilePage from "@/pages/UserProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth-callback" element={<AuthCallbackPage />}></Route>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      ></Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AppRoutes;
