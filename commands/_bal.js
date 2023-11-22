/*CMD
  command: /bal
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

var button = [
  [
    { title: "✅I registered through...", command: "link" },
    { title: "❔Contact Rawtrader", command: "cont" }
  ]
]

var balance = Libs.ResourcesLib.userRes("balance")

if (balance.value() < 1) {
  Bot.sendInlineKeyboard(
    button,
    "*I checked your trading account, but there is no top up there!* 👀\n\n*A lot of money* and time has been invested in creating the bot. And with registration and top up I realise that you are really ready to join the team, work and make money. I do not add people who came *'just to look'*.\n\nYou have the LAST TIME to make a deposit. In case of repeated deception about the top-up - you will go to BAN and will not get access to the bot! ❌\n\nYou have no funds on your account, *deposit $50* or more into your trading account and then click on the button *'✅I made a deposit, check ✅'*👇"
  )
  return
}

