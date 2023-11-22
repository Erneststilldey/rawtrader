/*CMD
  command: see
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

function getRandomTransactionType() {
  const transactionTypes = ["Buy", "Sell"];
  return transactionTypes[Math.floor(Math.random() * 2)];
}

const transactionType = getRandomTransactionType();

Bot.sendMessage("hello" +transactionType+" ") 
