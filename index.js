const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
