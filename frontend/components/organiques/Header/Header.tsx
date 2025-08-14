"use client";
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Logo from '@/components/atoms/Logo';
import Link from 'next/link';

// --- Définition des types pour les données du menu ---
interface MenuItemType {
  id: string;
  title: string;
  url?: string;
  below?: MenuItemType[];
}

interface HeaderProps {
  isMobile?: boolean;
}

const DRUPAL_MENU_API = 'http://35.180.27.20/api/menu_items/main?_format=json';

const MenuItem: React.FC<{ item: MenuItemType; itemKey: string }> = ({ item, itemKey }) => {
  const hasSubMenu = item.below && item.below.length > 0;

  const getCleanUrl = (url?: string) => {
    if (!url) return '#';
    if (url.startsWith('internal:')) return url.substring(9);
    if (url.startsWith('entity:')) return url.replace('entity:', '').replace('node/', '/node/');
    return url;
  };

  return (
    <li className={hasSubMenu ? styles.dropdown : ''}>
      <Link href={getCleanUrl(item.url)}>
        {item.title} {hasSubMenu && '▼'}
      </Link>
      {hasSubMenu && (
        <ul className={styles.dropdownContent}>
          {item.below?.map((subItem, index) => (
            // <-- CORRECTION: Clé composite pour les sous-menus
            <MenuItem key={`${subItem.id}-${index}`} item={subItem} itemKey={`${subItem.id}-${index}`} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const Header: React.FC<HeaderProps> = ({ isMobile = false }) => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(DRUPAL_MENU_API);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (e: any) {
        console.error("Erreur lors de la récupération du menu:", e);
        setError("Impossible de charger le menu.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <header className={`${styles.header} ${isMobile ? styles.mobile : styles.desktop}`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navigation}>
        {loading && <p>Chargement du menu...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <ul>
            {menuItems.map((item, index) => (
              // <-- CORRECTION: On crée une clé composite avec l'ID et l'index pour garantir l'unicité
              <MenuItem key={`${item.id}-${index}`} item={item} itemKey={`${item.id}-${index}`} />
            ))}
          </ul>
        )}
      </nav>
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

export default Header;