import React from "react";
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import głównego komponentu
import { faTasks } from '@fortawesome/free-solid-svg-icons';  // Import konkretnej ikony "tasks"
import { Link, NavLink } from "react-router-dom";
import Container from "../../Container/Container";


const NavBar = () => {

    return (
        <nav className={styles.navbar}>
      <Container className={styles.navContainer}>
        

        {/* Navigation Links */}
        <ul className={styles.navList}>
            {/* Link with FontAwesome Icon */}
            <Link to="/" className={styles.iconLink}>
                <FontAwesomeIcon icon={faTasks} className={styles.icon} />
            </Link>

            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/">Home</NavLink>
            </li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite">Favorite</NavLink>
            </li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about">About</NavLink></li>
        </ul>
      </Container>
    </nav>
    
    );
}

export default NavBar;