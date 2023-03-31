const readline = require("readline"); // mit require wird das readline Packet eingebunden
const filesystem = require("fs"); // Dateien schreiben und lesen
const rl = readline.createInterface({
  //Interface für outpustream  und inputstream wird angelegt
  input: process.stdin,
  output: process.stdout,
});

rl.question("Deine Lieblingsfarbe?", (input) => {
  // Zweiter Parameter ist eine Callbackfkt...
  filesystem.writeFile("antwort.txt", input, (error) => {
    if (error) console.log(error);
    else console.log(filesystem.readFileSync("antwort.txt", "utf8"));
    rl.close();
  });
});
