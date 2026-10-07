import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
/*import { useState } from "react";*/
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";

export default function App() {
  /*
  //1. ES6 Javascript
  
  const [currentPage, setCurrentPage] = useState("Home");

  //2. HTML Rendering
  
  return (
    <div className="Container">
      <div className="navbar">
        <button onClick={() => setCurrentPage("Home")}>Home</button>
        <button onClick={() => setCurrentPage("About")}>About</button>
        <button onClick={() => setCurrentPage("Contact")}>Contact</button>
      </div>

      <div className="content">
        {currentPage == "Home" ? <Home /> : currentPage == "About" ? <About /> : <Contact />}
      </div>
    </div>
  );
  */

  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
            <span>Home</span>
          </Link>

          <Link to="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11" />
            </svg>
            <span>About</span>
          </Link>

          <Link to="/contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            <span>Contact</span>
          </Link>

          <div className="container-fluid">
            <form className="search-form" role="search">
              <input
                className="search-input"
                type="search"
                placeholder="Search..."
              />
              <button className="search-btn" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 
  3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </button>
            </form>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
