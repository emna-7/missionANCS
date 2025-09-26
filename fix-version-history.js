const fs = require("fs");
const path = "server/utils/excel-app-replica.ts";
let content = fs.readFileSync(path, "utf8");

content = content.replace(
  /const versionHistory = \(this\.mission as any\)\.versionHistory \|\| \[/,
  `let versionHistory: any[] = [];
    
    try {
      const rawVersionHistory = (this.mission as any).versionHistory;
      if (rawVersionHistory) {
        if (Array.isArray(rawVersionHistory)) {
          versionHistory = rawVersionHistory;
        } else if (typeof rawVersionHistory === "string") {
          versionHistory = JSON.parse(rawVersionHistory);
        } else {
          versionHistory = [rawVersionHistory];
        }
      }
    } catch (error) {
      console.warn("Error parsing versionHistory:", error);
    }
    
    if (!Array.isArray(versionHistory) || versionHistory.length === 0) {
      versionHistory = [`
);

fs.writeFileSync(path, content, "utf8");
console.log("Patched versionHistory handling");
