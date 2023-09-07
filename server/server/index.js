const express = require("express");
const path = require('path'); // A NE PAS OMETTRE!
const app = express();

// Pour demander à Node de servir les fichiers à partir du build de React
app.use(express.static(path.resolve(__dirname, '../shop-basket/build')));


// Pour Gérer les requêtes GET vers la route /api 
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

// Pour les requêtes non traitées par le code précédent, ceci affiche l'appli React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//defini le port du serveur//
const PORT = process.env.PORT || 3002;


  //information de connection du serveur//
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});