import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./__auth/AuthLayout";
import { SignUpForm } from "./__auth/forms/signup";
import Home from "./__root/pages/Home";
import RootLayout from "./__root/RootLayout";
import About from "./__root/pages/About";
import { LabPage, Partner, Schools } from "./__root/pages/Solutions/pages";
import Shop from "./__root/pages/Shop";
import ProtectedLayout from "./_protected/ProtectedLayout";
import MyOrders from "./_protected/pages/MyOrders";
import MyProfile from "./_protected/pages/MyProfile";
import { Product } from "./__root/pages/Product";
import PrivacyPolicy from "./__root/pages/PrivacyPolicy";
import TermsAndCondion from "./__root/pages/TermsAndCondition";

function App() {
  return (
    <div className="font-Nunito">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:productid" element={<Product />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-condition" element={<TermsAndCondion />} />
          <Route path="solutions">
            <Route path="schools" element={<Schools />} />
            <Route path="partner" element={<Partner />} />
            <Route path="lab" element={<LabPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="settings" element={<MyProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
