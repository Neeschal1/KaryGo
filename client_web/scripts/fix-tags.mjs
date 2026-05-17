import { readFileSync, writeFileSync } from "fs";
import { globSync } from "fs";
import { readdirSync, statSync } from "fs";
import { join } from "path";

function walk(dir, files = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, files);
    else if (/\.(jsx|js)$/.test(f)) files.push(p);
  }
  return files;
}

for (const file of walk("src")) {
  let c = readFileSync(file, "utf8");
  const n = c.replaceAll("<motion", "<div").replaceAll("</motion>", "</div>");
  if (n !== c) {
    writeFileSync(file, n);
    console.log("fixed", file);
  }
}
