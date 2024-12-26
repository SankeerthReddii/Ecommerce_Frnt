import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../CartContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Laptops from "./Laptops";
import Mobiles from "./Mobiles";
import Headphones from "./Headphones";
import LaptopDetails from "./LaptopDetails";
import MobilesDetails from "./MobilesDetails";
import HeadphoneDetails from "./HeadphoneDetails";
import CartInvoice from "../CartInvoice";
import Watches from "./Watches";
import Pods from "./Pods";
import WatchDetails from "./WatchDetails";
import PodsDetails from "./PodsDetailes";

const Master = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Laptops />} />
            <Route path="dashboard/laptops" element={<Laptops />} />
            <Route path="dashboard/mobiles" element={<Mobiles />} />
            <Route path="dashboard/headphones" element={<Headphones />} />
            <Route path="dashboard/watches" element={<Watches/>} />
            <Route path="dashboard/pods" element={<Pods />} />
          </Route>
          <Route path="/error" element={<Error />} />
          <Route path="/laptopdetails" element={<LaptopDetails />} />
          <Route path="/mobiledetails" element={<MobilesDetails />} />
          <Route path="/headphonedetails" element={<HeadphoneDetails />} />
          <Route path="/watchesdetails" element={<WatchDetails />} />
          <Route path="/Podsdetails" element={<PodsDetails />} />
          <Route path="/cart" element={<CartInvoice />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Master;

