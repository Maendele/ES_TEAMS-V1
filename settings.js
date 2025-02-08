//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐕𝟏                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ES_TEAMS-V1
//  * @author : GREEN HACKER 
//  * @youtube : https://www.youtube.com/@harkingteach 
//  * @description : GREEN_HACKER-V1 ,A Multi-functional whatsapp user bot.
//*
//*
//base by author & Green 
//re-upload? recode? copy code? give credit ya :)
//Instagram: null
//Telegram: t.me/harkingteach 
//GitHub: @maende17
//WhatsApp: +255714844318
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@harkingteach
//   * Created By Github: maende17 
//   * Credit To GREEN HACKER 
//   * © 2024 GREEN_HACKER-V1
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: harkingTech" //ur yt chanel name
global.socialm = "GitHub: cheka_na_mii" //ur github or insta name
global.location = "Tanzania, Cross River, Calabar" //ur location

//new
global.botname = ' `GREEN HACKER V1`' //ur bot name
global.ownernumber = ['+255714844318'] //ur owner number, dont add more than one
global.ownername = 'GREEN HACKER//ur owner name
global.websitex = "https://YouTube.com/@harkingteach"
global.wagc = "https://tinyurl.com/Help-bro-done-books-payment"
global.themeemoji = '⛩'
global.wm = "green hacker Bot Inc."
global.botscript = 'https://github.com/paskito002/ES_TEAMS-V1' //script link
global.packname = "GREENHACKER"
global.author = "MΛDΣ BY GREEN HACKER"
global.creator = "255714844318@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["255714844318"] // Premium User

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['◼️','◽','♥️','♦️','♠️','♻️','🔱','🔰','🌐','Ⓜ️','🌀','🚹','⚧','❣️','❤‍🩹','🩵','🎀','💎','⭐','❄️','🫧']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
