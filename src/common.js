export function getSessionStorage(ketStr){
    let str = sessionStorage.getItem(ketStr);
    if(str === ''|| str == null|| str === 'null'|| str === undefined) {
        return null;
    }
    else return JSON.parse(str);
}
export function setSessionStorage(keyStr,value) {
    sessionStorage.setItem(keyStr,JSON.stringify(value));
}

//从sessionStorage中移除一个JSON对象
export function removeSessionStorage(keyStr) {
    sessionStorage.removeItem(keyStr);
}

export function getCurDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    return year + "-" + month + "-" + day;
}