import classes from './Layout.module.css';
import Nav from '../nav/Nav';

function Layout(props) {
  return (
    <div className={classes.app}>
      <Nav />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
