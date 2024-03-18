import { Route } from "react-router-dom";
import { LabPage, Partner, Schools } from "./pages";

const Solutions = () => {
  return (
    <>
      <Route path="schools" element={<Schools/>} />
      <Route path="partner" element={<Partner/>} />
      <Route path="lab" element={<LabPage/>} />
    </>
  );
};

export default Solutions;
