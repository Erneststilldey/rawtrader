/*CMD
  command: admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: SEND ADMIN ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((user.telegramid == "1621734795")) {

Bot.sendMessage("✅ Done: Admin Id is\n "+"`"+message+"`");
Bot.setProperty("admin" , message,"string")

} else {
  Bot.sendMessage("*You Are Not Admin  ❌*")
}

