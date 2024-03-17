import React from 'react';
import './App.css';
import { LandingPage } from './components/landing/LandingPage';

import {AdminStudentDashboard} from './components/admin/studentAdmin/AdminStudentDashboard'

function App() {
  return (
    <div className="App">
      <AdminStudentDashboard />
    </div>
  );
}

export default App;
