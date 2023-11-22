/*CMD
  command: c
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("❌ Send a valid amount")
  return
}

User.setProperty("codes1", message)
Bot.sendMessage(
  "_Kindly wait for your deposit to be confirmed shortly and you will get a notification 🔔_"
)

let code1 = User.getProperty("codes1")
let code2 = user.telegramid.toString() // Convert to string

let random = Libs.Random.randomInt(1, 9999999999)
let comb = code1 + "#-#-#" + code2

Bot.setProperty(random.toString(), comb) // Convert random to string

let oke = Bot.getProperty("admin")
var amo =
  "🛒 New User Sent A Deposit\n\n 👤 User Id: " +
  code2 +
  "\n\n 💵Amount: " +
  code1 +
  "  \n\n ✅Approve: /approve <code>" +
  random +
  "</code>\n❌ Dissaprove: <code>/disapprove code+" +
  random +
  "</code>"

var hiss = [
  [
    { text: "✅ Approve", callback_data: "/approvee " + random },
    { text: " ❌ Disapprove ", callback_data: "/disapprove code+" + random }
  ],
  [{ text: "❗ User", url: "tg://user?id=" + user.telegramid + "" }]
]

Api.sendMessage({
  chat_id: oke,
  text: amo,
  parse_mode: "html",
  disable_web_page_preview: false,
  reply_markup: { inline_keyboard: hiss }
})

