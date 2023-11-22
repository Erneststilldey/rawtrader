/*CMD
  command: /acce
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

var button = [[{title:"🧑‍💻Register🧑‍💻", url:"https://broker-qx.pro/sign-up/?lid=473138"}, {title:"✅I registered through...",command:"link"}]]
Bot.sendInlineKeyboard(button, "👉*To activate GptforRawtrader*, you need to create a new account on Quotex broker via my link.\n\n⚠️You must register using the button below. Otherwise the bot will not be able to confirm that you have registered a new account.\n\n*Use this link only*. Accounts created using other links will be rejected. If you already have an account, this is not a problem. Delete it in the settings and create a new one with a different email address, it takes 3-5 minutes.\n\nAfter registration, find your ID number and send it here by clicking this button *'✅I registered through your link✅'*. The bot will verify your number and open access.") 
