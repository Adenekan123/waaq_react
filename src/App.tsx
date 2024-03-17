import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./__auth/AuthLayout";
import { SignUpForm } from "./__auth/forms/signup";
import Home from "./__root/pages/Home";
import RootLayout from "./__root/RootLayout";
import About from "./__root/pages/About";

function App() {
  return (
    <div className="font-Nunito">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
