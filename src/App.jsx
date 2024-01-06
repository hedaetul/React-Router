import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import About from "./pages/About";
import Clock from "./pages/Clock";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Tasks from "./pages/Task";

function App() {
  const path = window.location.pathname;
  return (
    <div>
      <div>
        <nav className={classes.navbar}>
          <div className={classes.brand}>
            <h3>Brand Name</h3>
          </div>
          <div className={classes.menu}>
            <ul className={classes.navRouterItem}>
              <li>
                <Link
                  to="/"
                  className={
                    path === "/" ? classes.navItemActive : classes.navItem
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    path === "/about" ? classes.navItemActive : classes.navItem
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className={
                    path === "/help" ? classes.navItemActive : classes.navItem
                  }
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/clock"
                  className={
                    path === "/clock" ? classes.navItemActive : classes.navItem
                  }
                >
                  Clock
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className={
                    path === "/tasks" ? classes.navItemActive : classes.navItem
                  }
                >
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
