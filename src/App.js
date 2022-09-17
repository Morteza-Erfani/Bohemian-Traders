import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./components/layout/Index";

// Components
import HomePage from "./components/homePage/HomePage";
import SignIn from "./components/signIn/SignIn";
import ResetPassword from "./components/resetPassword/ResetPassword";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
