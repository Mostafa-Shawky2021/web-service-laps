const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const articleRoute = require("./routes/article");
const commentRoute = require("./routes/comment");
var hateoasLinker = require("express-hateoas-links");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE);
}

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/articles", articleRoute);
app.use("/api/comments", commentRoute);

// hateoasLinker(app);
app.use(hateoasLinker);
app.get("/", function (req, res) {
  // create an example JSON Schema
  var articlesSchema = {
    name: "Mostafa Shawky",
    description:
      "This JSON Schema defines the parameters required to create a Person object",
  };

  // call res.json as normal but pass second param as array of links
  res.json(articlesSchema, [
    { rel: "self", method: "GET", href: "http://127.0.0.1" },
    {
      rel: "get",
      method: "GET",
      title: "Get articles",
      href: "http://localhost:8000/v1/articles/",
    },
    {
      rel: "get",
      method: "GET",
      title: "Get one article",
      href: "http://localhost:8000/api/articles/{:id}",
    },
  ]);
});

app.listen(8000, () => {
  console.log("Backend server is running !");
});
