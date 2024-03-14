import ProtectedRoute from "@/auth/ProtectedRoute";
import Layout from "@/layout/Layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import DetailPage from "@/pages/DetailPage";
import HomePage from "@/pages/HomePage";
import ManageRestaurantPage from "@/pages/ManageRestaurantPage";
import OrderStatusPage from "@/pages/OrderStatusPage";
import SearchPage from "@/pages/SearchPage";
import UserProfilePage from "@/pages/UserProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth-callback" element={<AuthCallbackPage />}></Route>

      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />

      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />

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
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        ></Route>

        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        ></Route>
      </Route>

      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default AppRoutes;
