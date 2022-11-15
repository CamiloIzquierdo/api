const cors = require("cors");
const express = require("express");
const { send } = require("process");
const app = express();
app.use(cors());
app.use(express.json());

const pelis = [
    { id: 1, name: "titanic", puntaje: 10 },
    { id: 2, name: "up", puntaje: 8 },
];

app.get("/", (req, res) => {
    res.send("Api de peliculas");
});

app.get("/api/peliculas", (req, res) => {
    res.send(pelis);
});

app.get("/api/peliculas/:id", (req, res) => {
    const peliculas = pelis.find((c) => c.id === parseInt(req.params.id));
    if (!peliculas) return res.status(404).send("peli no encontrada");
    else res.send(peliculas);
});

app.post("/api/peliculas", (req, res) => {
    const pelicula = {
        id: pelis.length + 1,
        name: req.body.name,
        puntaje: parseInt(req.body.puntaje),
    };
    pelis.push(pelicula);
    res.send(pelicula);
});

app.delete("/api/peliculas/:id", (req, res) => {
    const pelicula = pelis.find((c) => c.id === parseInt(req.params.id));
    if (!pelicula) return res.status(404).send("peli no encontrada");

    contador + 1;

    const index = pelis.indexOf(pelicula);
    pelis.splice(index, 1);
    res.send(pelicula);
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Conectado al ${port}`));
