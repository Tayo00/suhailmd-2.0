const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "23421236348";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_01_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM1M5emExYmVwbkxWZkJVYWdHV2NWazlJSlgvR09PNGdwa3Q1M2JtRHY5WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUZHS0pKdEZSb0t6RHJkTmg3RGh4Z1wiLFxuICBcInBob25lSWRcIjogXCI5MGZkZTI3Zi01M2Q3LTRlNzgtYmYyNC1iZjM0NThhNmEzYmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjA0LFxuICAgICAgMTc4LFxuICAgICAgMTEyLFxuICAgICAgMTUxLFxuICAgICAgMjAzLFxuICAgICAgMTA1LFxuICAgICAgMTIsXG4gICAgICAxMjYsXG4gICAgICA1OSxcbiAgICAgIDExNSxcbiAgICAgIDE0MSxcbiAgICAgIDE2LFxuICAgICAgMTYsXG4gICAgICAyMjAsXG4gICAgICAxODEsXG4gICAgICAyNTIsXG4gICAgICAyOSxcbiAgICAgIDcsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgNyxcbiAgICAgIDIsXG4gICAgICAxODAsXG4gICAgICAxMyxcbiAgICAgIDIwNyxcbiAgICAgIDE2OSxcbiAgICAgIDU5LFxuICAgICAgMjI5LFxuICAgICAgMTg3LFxuICAgICAgMTcyLFxuICAgICAgMTk3LFxuICAgICAgMjI3LFxuICAgICAgMjQ2LFxuICAgICAgMTYxLFxuICAgICAgMTM4LFxuICAgICAgMTY3LFxuICAgICAgMTYwLFxuICAgICAgMjE4LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zUkNKWlcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIxMjM2MzQ4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHb2xkZW5cIixcbiAgICBcImxpZFwiOiBcIjIxODQ1MDc5NDQzNDgwNzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mbnZjSUdFSmpzaHJvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnZvMUZ5SWZqbUpIRTJqTmRya1ZNQnlaSm5QN3cxM244Q2JublF3MUFXND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZRDVCV2ZHR1U2eXlwUFdIajdXS1lKankzWmkyc2xXU0d1RjZJWCtKdnBGSloyaVZRZG1UeVNqakRkdEh0R2ZEeWVVRzZxMjdRdUE1dlFIYTRjUGVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0TERlRGxkQ0l0VTZGSE5QYjBXZkVGSjZPSEJnS1FrOWtEcERaZ0ZCamFoN0pZK2FVRmo1NXJqTTJqMHdTenJEZjQyaEJ2cWdJdE5XQnEveldrZ0NCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTIxMjM2MzQ4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMzU5NzA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFdkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMV2QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0c1JDbnUwQzVUTktnR1FFNWJyWFZER3lyWENCU0Nrc2MyYmFNN05Za2VVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTAwMzc0NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE0MTA0MTU3NTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
