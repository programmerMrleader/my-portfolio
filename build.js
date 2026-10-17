import ejs from "ejs";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { getHomePageData } from "./routes/index.js";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(projectDirectory, "build");
const publicDir = path.join(projectDirectory, "public");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const indexHtml = await ejs.renderFile(
  path.join(projectDirectory, "views", "index.ejs"),
  getHomePageData()
);
const notFoundHtml = await ejs.renderFile(
  path.join(projectDirectory, "views", "404.ejs"),
  {}
);

fs.writeFileSync(path.join(outputDir, "index.html"), indexHtml);
fs.writeFileSync(path.join(outputDir, "404.html"), notFoundHtml);
fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");

for (const entry of fs.readdirSync(publicDir)) {
  const src = path.join(publicDir, entry);
  const dest = path.join(outputDir, entry);
  fs.copyFileSync(src, dest);
}

console.log("Static portfolio generated successfully!");