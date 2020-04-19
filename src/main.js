var Eris = require('eris');

var bot = new Eris.CommandClient("NzAxMzE2ODM3MTM2MTM4MzMw.XpvyOA.xh3G1a7Wy0D-YSuA6VTICc4tHAk", {}, {
	prefix: "tu!",
	description: "TeamUp is a bot that can assign factions to your server members using pre-defined commands",
	owner: "/u/Devuluh"
});

bot.on("ready", () => {
	console.log("Ready!");
});

bot.registerCommand("prefix", (msg,args) => {
	if(args.length == 0){
		return "This server's prefix is `" + bot.commandOptions.prefix + "` If you would like to change it, simply type `" + bot.commandOptions.prefix + "prefix [arg]`";
	}else{
		bot.commandOptions.prefix = args;
		return "This server's prefix is now `" + args + "`";
	}
},{
	description: "Sets the bot's prefix",
	fullDescription: "Sets the bot's prefix on the server. E.g: `" + bot.commandOptions.prefix + "prefix -` will set the prefix to `-`, so commands will look more like `-help`.",
	permissions: {"manageRoles": true},
	permissionMessage: "Error: Must have the `Manage Roles` permissions to use this command."
});

bot.connect();
