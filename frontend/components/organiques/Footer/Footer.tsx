import React from 'react';
import styles from './Footer.module.css';
import Icon from '@/components/atoms/Icon';// 🔹 Adapte le chemin selon où se trouve ton fichier Icon.tsx
import Logo from '@/components/atoms/Logo';
interface FooterProps {
  isMobile?: boolean;
}

export const Footer = ({ isMobile }: FooterProps) => {
  const footerClass = isMobile ? `${styles.footer} ${styles.mobile}` : styles.footer;

  return (
    <footer className={footerClass}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-top']}>
          {/* --- Bloc logo + réseaux sociaux --- */}
          <div className={styles['footer-brand-info']}>
          <Logo variant="monochrome" />
            <h2>AsheResort</h2>
            <p className={styles['footer-slogan']}>
              Découvrez le Bénin autrement, vivez l'authenticité.
            </p>

            <div className={styles['social-icons-group']}>
              <h3>Suivez-nous</h3>
              <div className={styles['social-icons']}>
                <div className={styles['social-icon-wrapper']}>
                  <span>Facebook</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon']}
                  >
                    <Icon name="facebook" size={24} />
                  </a>
                </div>
                <div className={styles['social-icon-wrapper']}>
                  <span>Twitter</span>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon']}
                  >
                    <Icon name="twitter" size={24} />
                  </a>
                </div>
                <div className={styles['social-icon-wrapper']}>
                  <span>Instagram</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['social-icon']}
                  >
                    <Icon name="instagram" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Liens du footer --- */}
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

          {/* --- Contact + langue --- */}
          <div className={styles['footer-contact-info']}>
            <h3>Contactez-nous</h3>
            <p className={styles['company-address']}>
              AsheResort S.A.R.L.<br />
              123 Maison de la culture<br />
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

        {/* --- Bas du footer --- */}
        <div className={styles['footer-bottom']}>
          <div className={styles['footer-legal']}>
            <a href="/legal/privacy-policy">Politique de confidentialité</a>
            <a href="/legal/terms-of-use">Conditions d'utilisation</a>
            <a href="/legal/legal-notice">Mentions légales</a>
          </div>
          <div className={styles['footer-security-badges']}>
            <p>Sécurisé par SSL</p>
          </div>
          <p className={styles['footer-copyright']}>
            © 2025 AsheResort. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
