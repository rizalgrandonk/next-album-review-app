import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="container mx-auto pt-8 min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
