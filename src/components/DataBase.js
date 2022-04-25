const img_asi =
  "https://frspros.com/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg";
const img_dani =
  "https://pbs.twimg.com/profile_images/1243828366064697344/4QMkW3Sa_400x400.jpg";
const img_adesanya =
  "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4285679.png";
const img_conor = "https://pbs.twimg.com/media/FJUSsomXMAAONRl.jpg";
const img_chimaiev =
  "https://cdn.vox-cdn.com/thumbor/FHaH0uwPoIdzuD9bz-t6BKqEZHQ=/0x0:5333x3556/1200x800/filters:focal(3547x1133:4399x1985)/cdn.vox-cdn.com/uploads/chorus_image/image/70771394/1390575799.0.jpg";

const db_display_names = {};
db_display_names["asi"] = "Asafm";
db_display_names["dani"] = "DanM";
db_display_names["adesanya"] = "IZZY";
db_display_names["conor"] = "The Notorious";
db_display_names["khamzat"] = "Chimaiev";

const db_profile_pictures = {};
db_profile_pictures["asi"] = img_asi;
db_profile_pictures["dani"] = img_dani;
db_profile_pictures["adesanya"] = img_adesanya;
db_profile_pictures["conor"] = img_conor;
db_profile_pictures["khamzat"] = img_chimaiev;

const db_passwords = {}; // might be hash results
db_passwords["asi"] = "12345678!a";
db_passwords["dani"] = "12345678!a";
db_passwords["adesanya"] = "12345678!a";
db_passwords["conor"] = "12345678!a";
db_passwords["khamzat"] = "12345678!a";

const db_msg_lists = {};

const message_list_asi = {};
message_list_asi["conor"] = [
  { content: "suprise suprise mf", time: "3:50", isSender: false, type: "text" },
  { content: "THE KING IS BACK", time: "3:50", isSender: false, type: "text" },
];

message_list_asi["adesanya"] = [
  { content: "I'm the new dog in the yard", time: "12:21", isSender: false, type: "text" },
  { content: "Bring me some fresh meat", time: "12:31", isSender: false, type: "text" },
];

message_list_asi["khamzat"] = [
  { content: "brother doesn't matter", time: "23:50", isSender: false, type: "text" },
  { content: "I'm gonna smash everybody", time: "23:50", isSender: false, type: "text" },
];
db_msg_lists["asi"] = message_list_asi;
db_msg_lists["dani"] = {};
db_msg_lists["adesanya"] = {};
db_msg_lists["conor"] = {};
db_msg_lists["khamzat"] = {};

function isUsernameExists(username) {
  if (db_passwords[username] === undefined) {
    return false;
  }
  return true;
}

function checkLogin(values) {
  if (!isUsernameExists(values.username)) {
    alert("Username does not exists");
    return false;
  } else if (db_passwords[values.username] != values.password) {
    alert("Wrong password");
    return false;
  }
  return true;
}

function getDisplayName(username) {
  return db_display_names[username];
}

function getProfileImage(username) {
  return db_profile_pictures[username];
}

function getChats(username) {
  return db_msg_lists[username];
}

function getLastMessage(myUsername, friendUsername) {
  let lastMsg = {...((db_msg_lists[myUsername])[friendUsername]).at(-1)};
  if (lastMsg.type === "image"){
    lastMsg.content = "picture"
  } else   if (lastMsg.type === "video"){
    lastMsg.content = "video"
  } else   if (lastMsg.type === "record"){
    lastMsg.content = "recording"
  } else if (lastMsg.type === "text"){
    if ((lastMsg.content).length > 26) {
      lastMsg.content = (lastMsg.content).slice(0,26) + "..."
    }
  }
  return lastMsg;
}

function createNewUser({ username, displayName, profilePic, password }) {
  if (!isUsernameExists(username)) {
    db_display_names[username] = displayName;
    db_profile_pictures[username] = profilePic;
    db_passwords[username] = password;
    db_msg_lists[username] = {};
    return true;
  } else {
    alert("User already exists");
    return false;
  }
}

function addMessageToDatabase(myUsername, friendUsername, newMsg) {
  (db_msg_lists[myUsername])[friendUsername] = [...((db_msg_lists[myUsername])[friendUsername]),
                                  { content: newMsg.content, 
                                  time: newMsg.time, 
                                  isSender: newMsg.isSender, 
                                  type: newMsg.type }]
}

//meanwhile username will not be used.
function addNewChat(myUsername, friendUsername){
  var today = new Date();
  var currentMin = today.getMinutes();
  currentMin = (currentMin < 10) ? '0'+ currentMin : currentMin
  var currentHour = today.getHours() + ":" + currentMin;
  (db_msg_lists[myUsername])[friendUsername] = [
    {content: `Hello I'm ${getDisplayName(myUsername)}! How you doin?`,
     time: currentHour, isSender: true, type: "text" }];
}

export {
  checkLogin,
  createNewUser,
  getChats,
  isUsernameExists,
  getDisplayName,
  getLastMessage,
  getProfileImage,
  addMessageToDatabase,
  addNewChat,
};
