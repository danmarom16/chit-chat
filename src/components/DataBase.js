const img_asi =
  "https://frspros.com/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg";
const img_dani =
  "https://pbs.twimg.com/profile_images/1243828366064697344/4QMkW3Sa_400x400.jpg";
const img_adesanya =
  "https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/4285679.png";
const img_connor = "https://pbs.twimg.com/media/FJUSsomXMAAONRl.jpg";
const img_chimaiev =
  "https://cdn.vox-cdn.com/thumbor/FHaH0uwPoIdzuD9bz-t6BKqEZHQ=/0x0:5333x3556/1200x800/filters:focal(3547x1133:4399x1985)/cdn.vox-cdn.com/uploads/chorus_image/image/70771394/1390575799.0.jpg";

const db_display_names = {};
db_display_names["asi"] = "Asafm";
db_display_names["dani"] = "DanM";
db_display_names["adesanya"] = "IZZY";
db_display_names["connor"] = "The Notorious";
db_display_names["chamzat"] = "Chimaiev";

const db_profile_pictures = {};
db_profile_pictures["asi"] = img_asi;
db_profile_pictures["dani"] = img_dani;
db_profile_pictures["adesanya"] = img_adesanya;
db_profile_pictures["connor"] = img_connor;
db_profile_pictures["chamzat"] = img_chimaiev;

const db_passwords = {};
db_passwords["asi"] = "12345678!a";
db_passwords["dani"] = "12345678!a";
db_passwords["adesanya"] = "12345678!a";
db_passwords["connor"] = "12345678!a";
db_passwords["chamzat"] = "12345678!a";

const message_list = {};

message_list["connor"] = [
  { content: "suprise suprise mf", time: "3:50", isSender: false, type: "text" },
  { content: "THE KING IS BACK", time: "3:50", isSender: false, type: "text" },
];

message_list["adesanya"] = [
  { content: "suprise suprise mf", time: "12:21", isSender: false, type: "text" },
  { content: "THE KING IS BACK", time: "12:31", isSender: false, type: "text" },
];

message_list["chamzat"] = [
  { content: "suprise suprise mf", time: "23:50", isSender: false, type: "text" },
  { content: "THE KING IS BACK", time: "23:50", isSender: false, type: "text" },
];

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

function getChats() {
  return message_list;
}

function getLastMessage(username) {
  let lastMsg = {...message_list[username].at(-1)};
  if (lastMsg.type === "image"){
    lastMsg.content = "picture"
  }  
  return lastMsg;
}

function createNewUser({ username, displayName, profilePic, password }) {
  if (!isUsernameExists(username)) {
    db_display_names[username] = displayName;
    db_profile_pictures[username] = profilePic;
    db_passwords[username] = password;
    return true;
  } else {
    alert("User already exists");
    return false;
  }
}

function addMessageToDatabase(friendUsername, newMsg) {
  message_list[friendUsername] = [...message_list[friendUsername],
                                  { content: newMsg.content, 
                                  time: newMsg.time, 
                                  isSender: newMsg.isSender, 
                                  type: newMsg.type }]
}

//meanwhile username will not be used.
function addNewChat(myUsername, friendUsername){
  var today = new Date();
  var currentHour = today.getHours() + ":" + today.getMinutes();
  message_list[friendUsername] = [
    {content: `Hello I'm ${getDisplayName(myUsername)} !`, time: currentHour, isSender: true, type: "text" }];

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
