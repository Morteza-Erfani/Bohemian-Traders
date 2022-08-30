import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./components/layout/Index";

// Components
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
