import React from "react";
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import głównego komponentu
import { faTasks } from '@fortawesome/free-solid-svg-icons';  // Import konkretnej ikony "tasks"
import { Link } from "react-router-dom";
import Container from "../../Container/Container";


const NavBar = () => {

    return (
        <nav className={styles.navbar}>
      <Container className={styles.navContainer}>
        

        {/* Navigation Links */}
        <ul className={styles.navList}>
            {/* Link with FontAwesome Icon */}
            <a href="/" className={styles.iconLink}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} />
            </a>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorite">Favorite</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Container>
    </nav>
    
    );
}

export default NavBar;