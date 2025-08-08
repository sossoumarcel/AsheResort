import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  isMobile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isMobile = false }) => {
  return (
    <header className={`${styles.header} ${isMobile ? styles.mobile : styles.desktop}`}>
      <div className={styles.logo}>
        {/* Atome: Image (à remplacer par votre composant Image) */}
        <img src="/logo.svg" alt="Ashe Resort Logo" />
      </div>
      <nav className={styles.navigation}>
        {/* Molécule: Navigation (à remplacer par votre composant Navigation) */}
        <ul>
          
          <li className={styles.dropdown}>
            <a href="/destinations">Destinations ▼</a>
            <ul className={styles.dropdownContent}>
              <li><a href="/destinations/offers">Offres</a></li>
              <li><a href="/destinations/accommodations">Hébergements</a></li>
              <li><a href="/destinations/itineraries">Itinéraires</a></li>
              <li><a href="/destinations/must-sees">Incontournables</a></li>
              <li><a href="/destinations/community">Communauté</a></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            <a href="/about">À propos ▼</a>
            <ul className={styles.dropdownContent}>
              <li><a href="/about/agency">L’agence</a></li>
              <li><a href="/about/team">Sur-mesure</a></li>
              <li><a href="/about/partners">Partenaires</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className={`${styles.userMenu} ${styles.dropdown}`}>
        <img src="/icons/user.svg" alt="User Menu" className={styles.userIcon} />
        <ul className={styles.dropdownContent}>
          <li><a href="/register">Inscription</a></li>
          <li><a href="/login">Connexion</a></li>
        </ul>
      </div>
    </header>
  );
};
