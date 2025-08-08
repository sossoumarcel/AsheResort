import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  isMobile?: boolean;
}

export const Footer = ({ isMobile }: FooterProps) => {
  const footerClass = isMobile ? `${styles.footer} ${styles.mobile}` : styles.footer;

  return (
    <footer className={footerClass}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-top']}>
          <div className={styles['footer-brand-info']}>
            <h2>AsheResort</h2>
            <p className={styles['footer-slogan']}>Découvrez le Bénin autrement,vivez l'authencité.</p>
            <div className={styles['social-icons-group']}>
              <h3>Suivez-nous</h3>
              <div className={styles['social-icons']}>
                <div className={styles['social-icon-wrapper']}>
                  <span>Facebook</span>
                  <a href="#" className={`${styles['social-icon']} ${styles.facebook}`}></a>
                </div>
                <div className={styles['social-icon-wrapper']}>
                  <span>Twitter</span>
                  <a href="#" className={`${styles['social-icon']} ${styles.twitter}`}></a>
                </div>
                <div className={styles['social-icon-wrapper']}>
                  <span>Instagram</span>
                  <a href="#" className={`${styles['social-icon']} ${styles.instagram}`}></a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['footer-links-group']}>
            <div className={styles['footer-section']}>
              <h3>Destinations</h3>
              <ul>
              <li><a href="/destinations/offers">Offres</a></li>
              <li><a href="/destinations/accommodations">Hébergements</a></li>
              <li><a href="/destinations/itineraries">Itinéraires</a></li>
              <li><a href="/destinations/must-sees">Incontournables</a></li>
              <li><a href="/destinations/community">Communauté</a></li>
              </ul>
            </div>

            <div className={styles['footer-section']}>
              <h3>A Propos</h3>
              <ul>
                <li><a href="/about/agency">L’agence</a></li>
              <li><a href="/about/team">Sur-mesure</a></li>
              <li><a href="/about/partners">Partenaires</a></li>
              </ul>
            </div>

            <div className={styles['footer-section']}>
              <h3>Contact</h3>
              
            </div>

          </div>

          <div className={styles['footer-contact-info']}>
            <h3>Contactez-nous</h3>
            <p className={styles['company-address']}>
              AsheResort S.A.R.L.<br/>
              123 Maison de la culture<br/>
              75001 Paris, France
            </p>
            <p>Email: contact@asheresort.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>

            <div className={styles['language-selector-group']}>
              <h3>Langue</h3>
              <select className={styles['language-selector']}>
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <div className={styles['footer-security-badges']}>
            {/* Add your SSL certificates or security badges here */}
            <p>Sécurisé par SSL</p> {/* Placeholder text */}
          </div>
          <p className={styles['footer-copyright']}>© 2025 Asheresort. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};