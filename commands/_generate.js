/*CMD
  command: /generate
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

let webhookUrl = Libs.Webhooks.getUrlFor({
  // this command will be runned on webhook
  command: "/onWebhook",
  // this text will be passed to command
  content: "https://broker-qx.pro/sign-up/?lid=473138 ",
  // execute for this (current) user
  user_id: user.id
})

Bot.sendMessage(webhookUrl);
