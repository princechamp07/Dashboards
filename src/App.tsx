import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDashboard from './components/Dashboard/PropertyDashboard';
import UnitDashboard from './components/Dashboard/UnitDashboard';
import SubsystemDashboard from './components/Dashboard/SubSystemDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PropertyDashboard />} />
          <Route path="/UnitDashboard" element={<UnitDashboard />} />
          <Route path="/SubSystemDashboard" element={<SubsystemDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
