import React from "react";
import InvoiceForm from "./components/InvoiceForm";
import Reverse from "./components/Reverse";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class Pages extends React.Component {
  render() {
    return (
      <>
        <Router>
          <header className="main">
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<InvoiceForm />} />
            <Route path="/ReverseSensor" element={<Reverse />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default Pages;
