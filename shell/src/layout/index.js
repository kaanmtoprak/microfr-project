import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Header } from "../components";
import { routes } from "../utils/Routes";

const Layout = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {routes?.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Layout;
