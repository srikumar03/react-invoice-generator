import React from "react";
import InvoiceForm from "./components/InvoiceForm";
import ReverseForm from "./components/ReverseForm";
import CameraForm from "./components/cameraForm";
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
            <Route path="/Camera" element={<CameraForm />} />
            <Route path="/ReverseSensor" element={<ReverseForm />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default Pages;
