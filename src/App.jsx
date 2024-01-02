import React from 'react';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Help from './components/pages/Help';
import classes from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';

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
                  to='/'
                  className={
                    path === '/' ? classes.navItemActive : classes.navItem
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className={
                    path === '/about' ? classes.navItemActive : classes.navItem
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/help'
                  className={
                    path === '/help' ? classes.navItemActive : classes.navItem
                  }
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </div>
   
    </div>
  );
}

export default App;
