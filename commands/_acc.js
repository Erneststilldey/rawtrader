/*CMD
  command: /acc
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

var btn = [{ title: "✅I made a deposit, check ✅", command: "dep" }]

Bot.sendInlineKeyboard(
  btn,
  "✅ *Your account has been found* in the database. The last step to get access to AI GptforRawtrader:\n\n💸 *Make a deposit* of at least $50 into your new Quotex account\n(The recommended deposit amount, based on trading activity and market volatility, is currently $100).\n\nA lot of money and time has been invested in creating the bot. And with the help of registration and deposit I understand that you are really ready to join the team, work and make money. I do not add people who came 'just to watch'.\n\nDeposit $50 or more into your trading account and then click on '*✅I made a deposit, check✅*' 👇"
)

