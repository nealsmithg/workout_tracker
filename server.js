const path = require("path");
const express = require("express");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

//TODO:needs new db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`========== App listening on port ${PORT} ==========`)
  );
});
