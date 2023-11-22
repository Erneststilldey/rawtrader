/*CMD
  command: tcg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send your ID 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Assuming 'Bot' is already initialized somewhere else
var btn = [{ text: "✅I made a deposit, check ✅", callback_data: "dep" }]

function checkPassword(input) {
  // Check if the input meets the password length requirement
  if (input.length < 8) {
    return false
  }

  // Check if the input starts with "3175"
  var password_requirement = /^3175/
  return input.match(password_requirement)
}

// Example usage
//ar message = "3175YourPassword" // Replace this with the actual message

var result = checkPassword(message)

if (result) {
  // Use 'Bot' instead of 'bot' for consistency
  Bot.sendMessage(
    "_⌛ Checking your ID for registration, please expect ~10-30 minutes..._"
  )

  // Use 'Bot' instead of 'Api' for consistency
  setInterval(function(){
  Bot.sendInlineKeyboard(btn, "✅ *Your account has been found* in the database. The last step to get access to AI GptforRawtrader:\n\n💸 *Make a deposit* of at least $50 into your new Quotex account\n(The recommended deposit amount, based on trading activity and market volatility, is currently $100).\n\nA lot of money and time has been invested in creating the bot. And with the help of registration and deposit I understand that you are really ready to join the team, work and make money. I do not add people who came 'just to watch'.\n\nDeposit $50 or more into your trading account and then click on '*✅I made a deposit, check✅*' 👇") 
 } 5*60*1000) 
} else {
  // Use 'Bot' instead of 'bot' for consistency
  Bot.runCommand("/rejected")
}

