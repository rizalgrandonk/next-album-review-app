import Navbar from "./Navbar";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="bg-gray-100 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
