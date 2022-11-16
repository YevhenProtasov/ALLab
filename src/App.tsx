import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdsDataProvider } from "./context/AdsDataContext";

import "./App.css";

import Home from "./components/Home";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <AdsDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </AdsDataProvider>
  );
}

export default App;
