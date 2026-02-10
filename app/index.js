const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Biieenvenido a la página de Marc,Aupa Alba\n"));
app.listen(port, () => console.log(`Listening on ${port}`));
