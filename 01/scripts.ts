const fs = require("fs");

const lerarquivo = (): unknown => {
  return JSON.parse(fs.readFileSync("../bd.json"));
};

const escreverArquivo = (arquivo: any): void => {
  return fs.writeFileSync("../bd.json", JSON.stringify(arquivo));
};
