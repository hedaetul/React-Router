import classes from './Nav.module.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Help from '../pages/Help';
import { Routes, Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav className={classes.navbar}>
        <div className={classes.brand}>
          <h3>Brand Name</h3>
        </div>

        <div className={classes.menu}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
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
  );
}

export default Nav;
