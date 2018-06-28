/**
 * Prompt for credentials
 */

const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
	askForGithubCredentials: () => {
		const questions = [
			{
				type: "input",
				name: "username",
				message: "Enter GitHub username of e-mail address...",
				validate: function(value) {
					if (value.length) {
						return true;
					} else {
						return "Please enter your username or e-mail address.";
					}
				}
			},
			{
				type: "password",
				name: "password",
				message: "Enter your password...",
				validate: function(value) {
					if (value.length) {
						return true;
					} else {
						return "Please enter your password.";
					}
				}
			}
		];
		return inquirer.prompt(questions);
	}
}
