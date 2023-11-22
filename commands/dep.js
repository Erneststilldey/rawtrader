/*CMD
  command: dep
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

Bot.sendMessage(
  "_⌛️ Checking your ID for recharge, please expect ~10-30 minutes..._"
)
Bot.run({
  command: "/bal",
  run_after: 12 * 60 * 60/ 60
})

