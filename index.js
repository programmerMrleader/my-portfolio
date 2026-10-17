import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import routes from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;
const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", path.join(projectDirectory, "views"));
app.use(express.static(path.join(projectDirectory, "public")));
app.use("/", routes);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
});
