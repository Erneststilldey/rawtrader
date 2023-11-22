/*CMD
  command: /sign
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
    { title: "USD/BRL(OTC)", command: "AUD" },
    { title: "USD/BDT(OTC)", command: "EUR" }
  ],
  [
    { title: "USD/NZD(OTC)", command: "AUDC" },
    { title: "USD/PKR(OTC)", command: "AUDD" }
  ],
  [
    { title: "USD/NGN(OTC)", command: "EURP" },
    { title: "USD/INR(OTC)", command: "GBP" }
  ],
  [
    { title: "USD/COP(OTC)", command: "USD" },
    { title: "USD/ARS(OTC)", command: "GBPD" }
  ],
  [
    { title: "USD/MXN(OTC)", command: "EURY" },
    { title: "USD/PHP(OTC)", command: "GBPY" }
  ]
]

var btn = [{ title: "🤖Get access to bot🤖", command: "/acce" }]


function canRun(){
  var last_run_at5 = User.getProperty("last_run_at5");
  if(!last_run_at5){ return true }
  
  var minutes = (Date.now() - last_run_at5) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours=Math.floor( next /3600)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
  Bot.sendInlineKeyboard(
    btn,
    "❌ *You've already used* the test signal and the neural network has already produced *109 plus signals today*, and that number is growing by the hour!\n🔥 *So, what are you waiting for?*" 
  )
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at5", Date.now(), "integer");
Bot.sendMessage(
  "Select the currency pair for which you want to get a signal\n\n❗️It is important to correlate risks, stick to your own trading plan and do not use more than 2% of your deposit for one trade! A trading robot is not a guarantee of earnings, artificial intelligence is just beginning to try its capabilities in trading, before entering a deal on a signal, analyse the entry point yourself! All responsibility for wrong investment decisions lies with you!\n\nP.s As soon as you see a signal - you need to open a deal! Signals are given at any time of the day! The bot works even on the OTC market!"
)

Bot.sendInlineKeyboard(button," 💹 Select a currency pair from the list below") 
