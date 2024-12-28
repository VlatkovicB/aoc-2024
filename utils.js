import fs from "fs"

export const readData = (path) => fs.readFileSync(path, "utf-8").split(/\r?\n/)
