import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart).length;
  console.log(cart);
  return (
    <>
      <nav className="flex flex-col space-y-10">
        <div className="flex flex-col bg-brownColor">
          <p className="text-sm font-normal text-white text-center py-2">
            Delivery Lead Time: 1-3 days within Metro Manila | Same Day Pick-up
            Cutoff: 2:00 PM
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          <div className="hidden flex-col md:flex"></div>
          <div className="flex flex-col  justify-self-center">
            <img src="/logo.png" alt="" width="150" height="100" />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <Link to="/cart" className="flex items-center justify-center ">
              {cart === 0 ? "" : cart}
              <i className="fa-solid fa-cart-shopping text-4xl "></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10">
          <Link to="/" className="text-md hover:underline">
            Home
          </Link>
          <Link to="productList" className="text-md hover:underline">
            Shop Plants
          </Link>
          <Link to="/aboutUs" className="text-md hover:underline">
            About Us
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
