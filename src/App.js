import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Layout
import Layout from "./components/layout/Index";

// Components
import HomePage from "./components/homePage/HomePage";
import SignIn from "./components/signIn/SignIn";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Store from "./components/store/Store";
import Test from "./Test";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  const category = useSelector((state) => state.productsPage.category);
  const collection = useSelector((state) => state.productsPage.collection);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path={`/${category}/${collection}`}
          element={<Test data={collection} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
