/*CMD
  command: /start
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

var webExample = WebApp.getUrl({ command: "webExample" })

var button = [
  [{ title: "🤖Get access to bot🤖", command: "/acce" }],
  [{ title: "🆓Get a test signal🆓", command: "/sign" }],
  [
    { title: "❔Contact Rawtrader", command: "cont" },
    { title: "🫂Reviews🫂", url: "https://t.me/zakirula" }
  ]
]
{
  resize_keyboard: true
}
Bot.sendInlineKeyboard(
  button,
  "👋🤖 Hi, are you ready to get a unique trading robot based on artificial intelligence in conjunction with 15 indicators?\n\n🏆 I want to tell you right away that this is not gold bars that will come to your hands by themselves.\n\nThis is a shovel that you can use to dig out your gold!\n\n✅ Trading is a path you have to take yourself! And this bot will help you to do it! I spent a lot of money and time to make this bot free for everyone. You need to follow some simple steps to get started, it will take you 10 minutes.\n\nClick the *'Get access to bot'* button and you'll get instructions to get started!"
)

