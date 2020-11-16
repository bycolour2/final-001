const express = require("express");
const cors = require("cors");
const pjson = require("./package.json");

const app = express();
app.use(cors());

app.get("/day", (req, res) => {
	let dt = new Date();
	res.end(dt.getDate().toString());
});
app.get("/v8", (req, res) => {
	res.end(process.versions.v8);
});
app.get("/node", (req, res) => {
	res.end(process.versions.node);
});
app.get("/mirror", (req, res) => {
	res.end(req.query.x);
});
app.get("/package.json", (req, res) => {
    res.end(JSON.stringify(pjson, null, 2));
});
app.get("/*", (req, res) => {
	res.end(pjson.author);
});

app.listen(3000, () => {
	console.log("Сервер ожидает подключения...");
});
