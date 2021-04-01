const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');

let bot = new Client({
  fetchAllMembers: true, // Remove this if the bot is in large guilds.
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  }
});

/**
 * @description determine if an array contains one or more items from another array.
 * @param {array} haystack the array to search.
 * @param {array} arr the array providing items to check for in the haystack.
 * @return {boolean} true|false if haystack contains at least one item from arr.
 */
var findOne = (haystack, arr) => {
    return arr.some(v => haystack.includes(v));
};

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}.`));

bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch (command) {

      case 'ping':
        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        break;
    }
  }if(message.author.id == '820054573326401586'){
		console.log("I said something")
	}else{
		let args = message.content.toLowerCase().split(' ');
    // let command = args.shift().toLowerCase();

    console.log(args)
		let argscheck = Math.floor((Math.random() * 5));
		
		if (findOne(["cs","counterstrike", "counter-strike","csgo"],args) ){
			if(argscheck == 1){
				message.reply("You are fantastic. Just needs to work on communication, aim, map awareness, crosshair placement, economy management, pistol aim, awp flicks, grenade spots, smoke spots, pop flashes, positioning, bomb plant positions, retake ability, bunny hopping, spray control and getting a kill.");
			}
			
			console.log(message.author);
		}else if(findOne(["simp","pokimane"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("It is physically impossible to simp for pokimane. Simp means Sucker Idolizing Mediocre Pussy. A man is only a simp if the girl he is after has a mediocre pussy, but pokimane’s pussy is a goddess pussy, at worst. I will continue to donate 50% of my paycheck to pokimane because I know that it’s not simping. Poki if you see this I love you please text me back.");
			}
		}else if(findOne(["karen"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("Being a Karen is low key awesome as hell. You get to have sweet ass chunky highlights and drive a big hideous SUV you secretly eat 3 donuts a day in and dont report to weight watchers. You can go to your jazzersize class absolutely fucked up on airplane bottles of rum and a perc you got from your friend who has back issues. Call your daughter a whore in front of her friends when she's 12 then pretend not to remember it when she brings it up deeply traumatized in her 20s. Fucking boss bitch shit straight up. Just blasting \"dude looks like a lady\" max volume flooring it to a target to cause a ruckus returning a bath mat. Not giving a single shit if its problematic. You like it that way. Making your dumbass kids apologize to YOU when you say racist shit. Getting zooted on your strawberry nosed husbands blood pressure meds. Hell yes queen fucking slay.");
			}
		}else if(findOne(["laptop","Razer"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("I fucking hate gaming laptops. Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.");
			}
		}else if(findOne(["cyberpunk","2077"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("This game is so buggy that even the character creator is broken. I heard that the game had some bugs but I wasn’t expecting them to hurt my experience so quickly. I was making my character and I got to the genitals option and gave my character a penis. I scrolled through the size option and noticed a game breaking bug. The labels are wrong for the penises. I gave my character what was labeled as “small penis” and was surprised to find that it was way bigger than my real penis. This is a serious game breaking bug and CD Project Red needs to make fixing this issue it’s number one priority.");
			}
		}else if(findOne(["terraria","npc","34","rule34"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("Holy fucking shit. I want to bang the terraria zoologist so goddamn bad. I can't stand it anymore. Every time a blood moon occurs I get a massive erection. I've seen literally every rule 34 post there is of her online. My dreams are nothing but constant fucking sex with Astria. I'm sick of waking up every morning with six nuts in my boxers and knowing that those are nuts that should've been busted inside of Astria's tight fox pussy. I want her to have my mutant human/fox babies.\nFuck, my fucking mom caught me with a fox in the backyard. I dressed her in my sister's skirt and went to fucking town. She hasn't said a word to me in 10 hours and I'm worried she's gonna take away my computer. I might not ever get to see Astria again.\nEdit: Please don't make this my most upvoted post I have too much dignity\nEdit: :|");
			}
		}else if(findOne(["Based"],args)){
			if(argscheck == 1){
				console.log(message.author);
				message.reply("Based? Based on what? In your dick? Please shut the fuck up and use words properly you fuckin troglodyte, do you think God gave us a freedom of speech just to spew random words that have no meaning that doesn't even correllate to the topic of the conversation? Like please you always complain about why no one talks to you or no one expresses their opinions on you because you're always spewing random shit like poggers based cringe and when you try to explain what it is and you just say that it's funny like what? What the fuck is funny about that do you think you'll just become a stand-up comedian that will get a standing ovation just because you said \"cum\" in the stage? HELL NO YOU FUCKIN IDIOT, so please shut the fuck up and use words properly you dumb bitch");
			}
		}else if(findOne(["<@!820054573326401586>","coomer"],args)){
			if(argscheck == 1||argscheck == 2){
				console.log(message.author);
				message.reply("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
			}
		}else{
			let rand = Math.floor((Math.random() * (8*65)));
			console.log(rand);
			if(rand==1||rand==10||rand==100){
				console.log(message.author);
				message.reply("Coomer Alert");
			}else  if(rand ==2||rand==12){
				console.log(message.author);
				message.reply("Doomer Alert");
			}else  if(rand ==3||rand==13||rand==103){
				console.log(message.author);
				message.reply("Zoomer Alert");
			}else  if(rand ==4||rand==14){
				console.log(message.author);
				message.reply("Uh Oh, Boner Alert");
			}else  if(rand ==5){
				console.log(message.author);
				message.reply("What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
			}else  if(rand ==7||rand==17){
				console.log(message.author);
				message.reply("Writing's not easy. That's why Grammarly can help. This sentence is grammatically correct, but it's wordy, and hard to read. It undermines the writer's message and the word choice is bland. Grammarly's cutting edge technology helps you craft compelling, understandable writing that makes an impact on your reader. Much better. Are you ready to give it a try? Installation is simple and free. Visit Grammarly.com today!");
			}else  if(rand ==8){
				console.log(message.author);
				message.reply("You are fantastic. Just needs to work on communication, aim, map awareness, crosshair placement, economy management, pistol aim, awp flicks, grenade spots, smoke spots, pop flashes, positioning, bomb plant positions, retake ability, bunny hopping, spray control and getting a kill.");
			}else  if(rand ==9){
				console.log(message.author);
				message.reply("How can you send a message like this when a train is literaly passing by <@!536020250328825875> house.");
			}
		}
		
	}
});

// require('./server')();
bot.login(config.token);