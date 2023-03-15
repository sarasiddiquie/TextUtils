import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#708090';
      showAlert("Dark Mode has been enabled", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }



  return (
    <>
      <Router>
        <Navbar title="Text Utils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
         // switch replaced with Routes
          <Route exact path="/about" element={<About mode={mode} />} />

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;