import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadListing from "./pages/LeadListing";
import LeadDetails from "./pages/LeadDetails";
import LeadManagement from "./pages/LeadManagement";
import Dashboard from "./pages/Dashboard";
const token = localStorage.getItem("token");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadListing />} />
        <Route path="/lead/:id" element={<LeadDetails />} />
        <Route path="/manage" element={<LeadManagement />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
export default App;
