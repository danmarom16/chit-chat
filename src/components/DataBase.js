import Message from "./chat/Message";

const img_asi =
  "https://frspros.com/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg";
const img_dani =
  "https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic.png";
const img_adesanya =
  "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top";
const img_connor = "https://pbs.twimg.com/media/FJUSsomXMAAONRl.jpg";
const img_chimaiev =
  "https://cdn.vox-cdn.com/thumbor/FHaH0uwPoIdzuD9bz-t6BKqEZHQ=/0x0:5333x3556/1200x800/filters:focal(3547x1133:4399x1985)/cdn.vox-cdn.com/uploads/chorus_image/image/70771394/1390575799.0.jpg";

const db_display_names = {};
db_display_names["asi"] = { displayName: "Asafm" };
db_display_names["dani"] = { displayName: "DanM" };
db_display_names["adesanya"] = { displayName: "IZZY" };
db_display_names["connor"] = { displayName: "The Notorious" };
db_display_names["chamzat"] = { displayName: "Chimaiev" };

const db_profile_pictures = {};
db_profile_pictures["asi"] = { imgUrl: { img_asi } };
db_profile_pictures["dani"] = { imgUrl: { img_dani } };
db_profile_pictures["adesanya"] = { imgUrl: { img_adesanya } };
db_profile_pictures["connor"] = { imgUrl: { img_connor } };
db_profile_pictures["chimaiev"] = { imgUrl: { img_chimaiev } };

const db_passwords = {};
db_passwords["asi"] = { password: "12345678!a" };
db_passwords["dani"] = { password: "12345678!a" };
db_passwords["adesanya"] = { password: "12345678!a" };
db_passwords["connor"] = { password: "12345678!a" };
db_passwords["chimaiev"] = { password: "12345678!a" };


const message_list = {}

  message_list["connor"] = [{ content: "suprise suprise mf", time: "3:50", isReciever: false },
  { content: "THE KING IS BACK", time: "3:50", isReciever: false }]

  message_list["adesanya"] = [{ content: "suprise suprise mf", time: "3:50", isReciever: false },
  { content: "THE KING IS BACK", time: "3:50", isReciever: false }]

  message_list["chimaiev"] = [{ content: "suprise suprise mf", time: "3:50", isReciever: false },
  { content: "THE KING IS BACK", time: "3:50", isReciever: false }]



function isUsernameExists(username) {
  console.log(username)
  if (db_passwords[username] === undefined) {
    return false;
  }
  return true;
}


function checkLogin(values) {
  console.log(values)
  if (!isUsernameExists(values.username)) {
    alert("Username does not exists");
    return false;
  } else if (db_passwords[values.username].password != values.password) {
    alert("Wrong password");
    return false;
  }
  return true;
}

function getDisplayName(username){
    return db_display_names[username];
}

function getProfileImage(username){
    return db_profile_pictures[username];
}

function getChats(username){
    return message_list[username];
}

function getLastMessage(username){
  return message_list[username][-1];
}

function createNewUser({username, displayName, profilePic, password}){
    if(! isUsernameExists(username)){
        db_display_names[username] = displayName;
        db_profile_pictures[username] = profilePic;
        db_passwords[username] = password;
        return true;
    }
    else {
        alert("User already exists");
        return false;
    }
}

export {checkLogin,
   createNewUser,
   getChats, isUsernameExists, getDisplayName,
  getLastMessage };
