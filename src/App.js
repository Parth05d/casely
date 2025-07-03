import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import "./App.css";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const [navStyle, setNavStyle] = useState({ backgroundColor: "", color: "" });

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const setTheme = (theme) => {
    setMode(theme);

    switch (theme) {
      case "dark":
        document.body.style.backgroundColor = "black";
        setNavStyle({ backgroundColor: "#212529", color: "white" });
        showAlert("Dark mode enabled", "success");
        break;
      case "blue":
        document.body.style.backgroundColor = "#001F3F";
        setNavStyle({ backgroundColor: "#003366", color: "white" });
        showAlert("Blue theme enabled", "success");
        break;
      case "green":
        document.body.style.backgroundColor = "#153E2F";
        setNavStyle({ backgroundColor: "#1D5C3A", color: "white" });
        showAlert("Green theme enabled", "success");
        break;
      default:
        document.body.style.backgroundColor = "white";
        setNavStyle({ backgroundColor: "#f8f9fa", color: "black" });
        showAlert("Light mode enabled", "success");
        break;
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} setTheme={setTheme} navStyle={navStyle} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              path="/about"
              element={<About navStyle={navStyle} />}
            ></Route>
            <Route
              path="/"
              element={
                <Textarea
                  showAlert={showAlert}
                  heading="Try Casely: Smart & Instant Text Formatting"
                  mode={mode}
                  navStyle={navStyle}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
