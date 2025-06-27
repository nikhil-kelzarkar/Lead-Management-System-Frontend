import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadListing from "./pages/LeadListing";
import LeadDetails from "./pages/LeadDetails";
import LeadManagement from "./pages/LeadManagement";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadListing />} />
        <Route path="/lead/:id" element={<LeadDetails />} />
        <Route path="/manage" element={<LeadManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
