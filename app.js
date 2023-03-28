const express = require("express");
const cors = require("cors");
const app = express();
//port constants
const port = 3001;

//routes
const testRoute = require("./routes/test");

//server config
app.use(cors());
app.use(express.json());
app.use("/test", testRoute);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`App listening to port ${port}`);
});
