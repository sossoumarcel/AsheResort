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


Voici une version formelle, structurée et concise de votre README, pour garantir un travail collaboratif sans erreur sur la branche **develop** :

---

## Processus Git collaboratif

### 1. Branche de base

* **Ne travaillez jamais sur la branche `main`.**
* Toutes les contributions doivent se faire à partir de **`develop`**, qui sert de base de travail commune.

### 2. Création d’une branche de fonctionnalité

* Basculez sur `develop` et mettez-la à jour avant de commencer :

  ```bash
  git checkout develop
  git pull origin develop
  ```
* Créez ensuite une branche dédiée à votre nouvelle fonctionnalité, à partir de `develop` :

  ```bash
  git checkout -b feature/<description-courte>
  ```
* Le nommage doit être clair et uniforme (ex. `feature/ajout-auth`, `feature/resolution-bug`).

### 3. Développement local

* Effectuez vos modifications, ajoutez des fichiers, puis commitez :

  ```bash
  git add .
  git commit -m "Message descriptif du travail effectué"
  ```
* Gardez votre branche orientée sur un seul sujet et vos messages explicites.

### 4. Publication de votre branche et Pull Request

* Poussez votre branche sur le dépôt distant :

  ```bash
  git push -u origin feature/<description>
  ```
* Depuis GitHub, ouvrez une **Pull Request** vers la branche `develop`.
* Dans la description, indiquez clairement le contenu, les objectifs et les relecteurs assignés.

### 5. Mise à jour pendant le développement

* Si la branche `develop` évolue pendant que vous travaillez, synchronisez votre branche afin d’éviter les conflits :

  ```bash
  git fetch origin
  git rebase origin/develop
  ```

  ou

  ```bash
  git merge origin/develop
  ```
* Cette action réduit les conflits futurs et maintient votre historique propre et lisible.

### 6. Pull request
* faites un pull request et attendez la validation ou non
---

### Récapitulatif des étapes

| Étape | Action                                       | Branche cible           |
| ----- | -------------------------------------------- | ----------------------- |
| 1     | Se synchroniser (`checkout` + `pull`)        | `develop`               |
| 2     | Créer une branche de fonctionnalité          | `feature/...`           |
| 3     | Développer et commiter localement            | `feature/...`           |
| 4     | Pousser et ouvrir une PR                     | `feature/... → develop` |
| 5     | Synchroniser si besoin (`rebase` ou `merge`) | `feature/...`           |

---
