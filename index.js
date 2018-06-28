const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/files");

clear();
console.info(
	chalk.yellow(
		figlet.textSync("Ginit", { horizontal: "full" })
	)
);

if (files.directoryExists(".git")) {
	console.info(chalk.red("Already a git directory!"));
	process.exit();
}
