
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import Authform from "./Authform";
import { useState } from "react";

function Layout() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar setShowProp={setShow} />

      <Outlet />

      <Footer />

      {/* Registration Modal */}
      {show && <Authform setShow={setShow} />}
    </>
  );
}

export default Layout;
