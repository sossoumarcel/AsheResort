import React from 'react';
import styles from './Header.module.css';
import Logo from '@/components/atoms/Logo';

interface HeaderProps {
  isMobile?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isMobile = false }) => {
  return (
    <header className={`${styles.header} ${isMobile ? styles.mobile : styles.desktop}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Logo />
      </div>

      {/* Menu principal */}
      <nav className={styles.navigation}>
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

      {/* Icône utilisateur avec menu déroulant */}
      <div className={`${styles.userMenu} ${styles.dropdown}`}>
        <svg className={styles.userIcon}>
          <use href="/icons.svg#user" />
        </svg>
        <ul className={styles.dropdownContent}>
          <li><a href="/register">Inscription</a></li>
          <li><a href="/login">Connexion</a></li>
        </ul>
      </div>
    </header>
  );
};
