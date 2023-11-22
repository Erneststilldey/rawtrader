/*CMD
  command: GBPY
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

Api.deleteMessage({ message_id: request.message.message_id })
function getRandomTransactionType() {
  const transactionTypes = ["BUY", "SELL"];
  return transactionTypes[Math.floor(Math.random() * 2)];
}

const transactionType = getRandomTransactionType();
var btn = [{ title: "🤖Get access to bot🤖", command: "/acce" }]


Bot.sendInlineKeyboard(
    btn,"*USD/PHP(OTC)*\nTime: *5 MIN*\nBroker: *Quotex*\n\n📍 Moving average: *Strong " +transactionType+"*\n📊 Technical indicators: *Strong " +transactionType+"*\n\n🤖 Trading signal from bot: *STRONG " +transactionType+"* ⬆🟢") 
