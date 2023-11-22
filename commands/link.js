/*CMD
  command: link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
❕*Send your new Quotex account ID.
(Registered using the link from this bot!)*

🔑 *IMPORTANT:* ID must be entered in numbers only - no letters!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("❌ Send a valid ID")
  return
}

User.setProperty("codes1", message)
Bot.sendMessage(
  "_⌛ Checking your ID for registration, please expect ~10-30 minutes..._"
)

let code1 = User.getProperty("codes1")
let code2 = user.telegramid.toString() 
let c = Bot.setProperty("code2", user.telegramid) // Convert to string

let random = Libs.Random.randomInt(1, 9999999999)
let comb = code1 + "#-#-#" + code2

Bot.setProperty(random.toString(), comb) // Convert random to string

let oke = Bot.getProperty("admin")
var amo =
  "New User Sent A Quotex ID\n\n 👤 User Id: " +
  code2 +
  "\n\n Quotex ID: " +
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

