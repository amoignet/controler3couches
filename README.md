# controler3couches

Création repo avec gitignore node

npm init => initialise le projet en JS et créer un fichier package.json.

Ajouter les librairies suivantes:

express = npm i express + npm i -D @types/express
cors = npm i cors + npm i -D @types/cors
ts-node = npm i -D ts-node + npm i -D @types/node
typescript = npm i -D typescript

créer un dosiier src = mkdir src
créer un fichier main.ts touch main.ts

Dans le fichier main.ts:
créer le serveur express (voir doc express ("Hello world")
problème d'import express donc ajouter les fichiers de configuration :
config.json et tslint.json (dans ce repo)
setup le cors

Dans package.json : 
Ajouter dans "scripts" la commande pour lancer le projet => "start:dev" : "ts_node src/main.ts"
Maintenant le serveur peut être lancé grace à la commande : npm run start:dev

Créer un dossier loaders dans src
créer un fichier index.ts dans le dossier loaders + un fichier express.ts
Dans index.ts initialiser l'application
Installer body-parser = npm i body-parser + npmi -D @types/body-parser
Dans express.ts importer body-parser et cors 

Ajouter la config des loaders dans le serveur express (main.ts)

Dans src créer un dossier controller
Installer nodemon pour ne pas avoir à relancer son serveur tout le temps  = npm i nodemon
Créer un fichier de config nodemon.json (ou récupérer celui dans ce repo)
Modifier le "scripts" du package.json en "start:dev" : "nodemon"

Dans src créer un dossier service
Dans src créer un dossier repository

Créer la base de donnée puis dans loaders ajouter un fichier mysql.ts
Installer mysql = npm i mysql + npm i -D @types/mysql

Créer un dossier core dans src
créer un fichier db.helper.ts dans core
créer un singleton dans db.hhelper
