const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/files");
const inquirer = require("./lib/inquirer");
const github = require("./lib/github");

clear();
console.info(
	chalk.bold.yellow(
		figlet.textSync("Ginit", { horizontal: "full" })
	)
);

/*if (files.directoryExists(".git")) {
	console.info(chalk.red("Already a git directory!"));
	process.exit();
}*/

const run = async () => {
	let token = github.getStoreGithubToken();
	if (!token) {
		await github.setGithubCredentials()
		token = await github.registerNewToken();
	}
	console.info(token);
};

run();
