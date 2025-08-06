# AsheResort
<img width="1129" height="805" alt="image" src="https://github.com/user-attachments/assets/24c3e763-bf36-4ddd-ba0c-f2b61e1dadd4" />

# 📘 Guide d’installation – Ashe-resort(Drupal + Frontend)

Voici un guide clair et structuré pour installer le projet *Ashe-resort* en local avec une base de données distante (AWS RDS).

---

## ✅ 1. Cloner le dépôt Git

bash
git clone https://github.com/sossoumarcel/AsheResort.git
cd AsheResort


---

## ⚙ 2. Installer les dépendances PHP

bash
composer install


---

## 🛠 3. Configurer la base de données

Ouvrir ce fichier :

txt
web/sites/default/settings.php


🔁 Remplace cette configuration locale :

php
$databases['default']['default'] = [
  'driver' => 'mysql',
  'database' => 'drupal',
  'username' => 'root',
  'password' => '',
  'host' => '127.0.0.1',
  'port' => '3306',
  'prefix' => '',
];


✅ Par cette configuration pour la base AWS :

php
$databases['default']['default'] = [
  'driver' => 'mysql',
  'database' => 'ashe',
  'username' => 'admin',
  'password' => 'J5XuLbBS26y.b73',
  'host' => 'ashe.cbsmm0kqapmo.eu-west-3.rds.amazonaws.com',
  'port' => '3306',
  'prefix' => '',
];


---

## 🚀 4. Lancer le serveur Drupal en local

bash
cd web
php -S localhost:8080 .ht.router.php


📍 Ouvrir ensuite ton navigateur à l'adresse :  
[http://localhost:8080](http://localhost:8080)
---
##Créer un compte utilisateur

cliquer sur créer un compte et suivre les etapes
---

## 🎨 5. Lancer le frontend

bash
cd frontend
npm install
npm run dev
