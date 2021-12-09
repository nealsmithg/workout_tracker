const path = require("path");
const express = require("express");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`========== App listening on port ${PORT} ==========`)
  );
});
