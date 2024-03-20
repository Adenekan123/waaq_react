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
          <Route path="solutions">
            <Route path="schools" element={<Schools />} />
            <Route path="partner" element={<Partner />} />
            <Route path="lab" element={<LabPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="my-orders" element={<MyOrders />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
