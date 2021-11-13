# Happy Quizz 

# Lien vers le site 
URL prod: https://react-wdcvalentin.herokuapp.com/

# Comment installer le projet 
## Cloner le projet 
```
git clone https://github.com/IIM-Creative-Technology/react-wdcvalentin.git && cd react-wdcvalentin
```

## Installer les dépendences
```
npm install
ou 
yarn install
```


## Démarrer le projet 
```
npm start
ou 
yarn start
```
Enjoy :)

## CI/CD
-   Lorsque l'on push, une pipeline se met en route à l'aide du fichier deploy.yml qui se trouve dans le dossier      caché .github
-   Dans ce fichier, je définis quand je veux lancer la pipeline (pull-request, branche ...)
-   Ensuite je précise les steps à faire pour pouvoir lancer le projet, faire les tests unitaires et déployer sur     heroku