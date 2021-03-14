import React from "react";

// Components
import Nav from "./components/Nav";

// Pages
import AboutUs from "./pages/AboutUs";

// Global Styles
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
