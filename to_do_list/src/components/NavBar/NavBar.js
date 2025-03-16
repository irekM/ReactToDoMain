import React from "react";
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import głównego komponentu
import { faTasks } from '@fortawesome/free-solid-svg-icons';  // Import konkretnej ikony "tasks"
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

          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </Container>
    </nav>
    
    );
}

export default NavBar;