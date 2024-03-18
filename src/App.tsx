import {Route, Routes } from "react-router-dom";
import { AuthLayout } from "./__auth/AuthLayout";
import { SignUpForm } from "./__auth/forms/signup";
import Home from "./__root/pages/Home";
import RootLayout from "./__root/RootLayout";
import About from "./__root/pages/About";
import { LabPage, Partner, Schools } from "./__root/pages/Solutions/pages";

function App() {
  return (
    <div className="font-Nunito">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/solutions">
            <Route path="schools" element={<Schools />} />
            <Route path="partner" element={<Partner />} />
            <Route path="lab" element={<LabPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
