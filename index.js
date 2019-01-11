const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
    console.log('Pret !');    
});

client.on("message", message => {
    if (message.content.startsWith('+33')) {
        let text = message.content.slice('+33'.length);
        message.guild.members.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) member.send(text);
        });
    }
});

client.on("message", message => {
    
    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
    if (msg.startsWith (7)) {
        if (mention == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
});

client.on("message", message => {
    
    msg = message.content.toLowerCase();

    if (message.author.bot) return;

    mentions = message.mentions.users;

    if (msg.startsWith (8)) {
        if (mentions == null) {return}
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
        message.channel.send (" ");
        message.delete();
        console.log('Envoyé !');
    }
});

client.on("message", message => {
    if (message.content.startsWith('33Rank')) {
        message.delete();
        message.reply("@everyone Session RankUp, rejoignez le channel !");

    }
});

client.login("NTI0NTk1MjI1Mzk4ODcwMDE3.Dv2EsQ.RuiUOE6wlYRC-mpaKzlAlGPtZcQ")