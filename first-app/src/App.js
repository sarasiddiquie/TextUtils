import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const [mode, setMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

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

      <Navbar title="Text Utils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;