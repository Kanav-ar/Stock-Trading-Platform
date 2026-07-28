import { Outlet } from "react-router";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

export default function ComponentName() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
