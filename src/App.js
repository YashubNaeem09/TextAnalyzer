import AboutComp from './AboutComp/AboutComp.js';
import AlertComp from './AlertComp/AlertComp.js';
import NavbarComp from './NavbarComp/NavbarComp.js';
import TextformComp from './TextformComp/TextformComp.js'; //#292929
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('gray-800');
  const [toast, setToast] = useState(null);
  const Toast = useRef(null);
  const showToast = (severity, summary, detail) => {
    setToast({
      severity: severity,
      summary: summary,
      detail: detail
    });
    setTimeout(() => {
      setToast(null)
    }, 1500);
  }
  const toggleStyle = () => {
    if (mode === 'gray-800') {
      setMode('black');
      document.body.style.backgroundColor = '#292929'
      showToast("info", "info",  'Dark Mode Enabled')
    }
    else {
      setMode('gray-800');
      document.body.style.backgroundColor = 'white';
      showToast("info", "info", 'Dark Mode Disabled')
    }
  }
  return (
    <>
      <Router>
        <NavbarComp page1="Home" page2="About Us" mode={mode} toggleStyle={toggleStyle} showToast={showToast}></NavbarComp>
        <AlertComp toast={toast}></AlertComp>
        <Routes>
          <Route exact path="/about" element={<><AboutComp /></>}> </Route>
          <Route exact path="/" element={<> <TextformComp showToast={showToast} heading="Enter Your Text Here To Analyze" mode={mode}></TextformComp></>}> </Route>
        </Routes>
      </Router>
    </>
  );
}
