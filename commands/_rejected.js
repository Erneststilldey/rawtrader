/*CMD
  command: /rejected
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var button = [[{title:"✅I registered through...", command :"link"}, {title :"❔Contact Rawtrader", command:"cont"}]] 

Bot.sendInlineKeyboard(button, "❌ You created an account *not using my link!*\n*Please delete your old account through* settings!\n\n_After you delete your account, you will need to close the tab, go to this chat and create a new account by registering using this link\nhttps://broker-qx.pro/sign-up/?lid=473138_") 
