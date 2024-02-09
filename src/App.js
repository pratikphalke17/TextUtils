import { useState } from "react";
import { Switch, Route } from "react-router"; // Update the import statement
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alerts from "./Components/Alerts";
import { Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled !", "success");
      document.title = "Textutils-Dark Mode";
      // setInterval(()=>{
      //   document.title="Install Textutils";
      // },1500)
      // setInterval(()=>{
      //   document.title="Textutils is an amazing tool";
      // },2000)
      //it is not a good practice to use it here to change the title
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled !", "success");
      document.title = "Textutils-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils" about_title='About Us'/> */}
      {/* <Navbar /> */}
      
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
