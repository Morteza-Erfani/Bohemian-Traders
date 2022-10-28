import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Redux actions
import { restoreCart } from "./redux/cart/cartSlice";

// Layout
import Layout from "./components/layout/Index";

// Components
import HomePage from "./components/homePage/HomePage";
import SignIn from "./components/signIn/SignIn";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Store from "./components/store/Store";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import PrivacyPolicy from "./components/Privacy&policy/PrivacyPolicy";
import ShippingAndReturns from "./components/shippingAndReturns/ShippingAndReturns";
import Sizing from "./components/sizing/Sizing";
import PeymentMethods from "./components/paymentMethods/PeymentMethods";
import ScrollToTop from "./components/shared/ScrollToTop";
import ProductPage from "./components/productPage/ProductPage";
import Cart from "./components/cart/Cart";
import SignUp from "./components/signup/SignUp";
import CreatedAccount from "./components/createdAccount/CreatedAccount";

function App() {
  const category = useSelector((state) => state.productsPage.category);
  const collection = useSelector((state) => state.productsPage.collection);

  const dispatch = useDispatch();
  // Restore previous cart rfrom local storage
  useEffect(() => {
    dispatch(
      restoreCart({
        prevCart: JSON.parse(localStorage.getItem("cart")),
        totalPrice: JSON.parse(localStorage.getItem("totalPrice")),
        totalCount: JSON.parse(localStorage.getItem("totalCount")),
      })
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/account-created" element={<CreatedAccount />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-returns" element={<ShippingAndReturns />} />
        <Route path="/inclusive-size-range" element={<Sizing />} />
        <Route path="/flexible-payment-options" element={<PeymentMethods />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path={`/:${category}/:${collection}`}
          element={<Store collection={collection} category={category} />}
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
