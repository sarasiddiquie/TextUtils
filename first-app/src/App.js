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

  const themeMode = () => {

    let text = document.getElementById("head");
    let text2 = document.getElementById("head2");

    if (theme === 'light') {
      setTheme('theme1');
      document.body.style.backgroundColor = '#04293A';
      text.style.color = "#ECB365";
      text2.style.color = "#ECB365";
    }

    else {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      text.style.color = "black";
      text2.style.color = "black";
    }
  }

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
        <Navbar title="Text Utils" about="About" mode={mode} toggleMode={toggleMode} themeMode={themeMode} />
        <Alert alert={alert} />
        <Routes>

          <Route exact path="/about" element={<About mode={mode} />} />

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} themeMode={themeMode} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;