const img1 = "https://frspros.com/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg";
const img2 = "https://support.hubstaff.com/wp-content/uploads/2019/08/good-pic.png"
const img3 = "https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"

const db = {}
db["asi"] = {displayName: "Asafm", imgUrl: {img1}, password: "12345678!a"};
db["dani"] = {displayName: "DanM", imgUrl: {img2}, password: "12345678!a"};
db["adesanya"] = {displayName: "IZZY", imgUrl: {img3}, password: "12345678!a"};

function searchInDb(values){
    if (db[values.username] === undefined) {
        alert('fuck you username not right');
        return false;
    }
    else{
        if(db[values.username].password != values.password){
            alert('fuck you password not right');
            return false;
        }
    }
    return true;
  };

export default searchInDb;