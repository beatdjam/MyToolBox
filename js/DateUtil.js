/** 
* isDate
* 入力値が日付として正しいかをチェックする
* @param {string} strDate 元の文字列
* @return {boolean} チェック結果
*/
function isDate(strDate){
    // 空文字は無視
    if(strDate == ""){
        return true;
    }  
    // 年/月/日の形式のみ許容する
    if(!strDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)){
        return false;
    } 

    // 日付変換された日付が入力値と同じ事を確認
    // new Date()の引数に不正な日付が入力された場合、相当する日付に変換されてしまうため
    // 
    var date = new Date(strDate);  
    if(date.getFullYear() !=  strDate.split("/")[0] 
        || date.getMonth() != strDate.split("/")[1] - 1 
        || date.getDate() != strDate.split("/")[2]
    ){
        return false;
    }

    return true;
}

// 日曜を基準として月の何週目かを出す場合
// ・土曜日が含まれる月を基準とする
// ・日曜始まり
function getWeekOfMonth(date) {
    const lastDayOfWeek = 6; // SATURDAY
    const temp = new Date(date);
    // 与えられた週の末尾を取得
    temp.setDate(temp.getDate() + lastDayOfWeek - temp.getDay());
    return {
        year: temp.getFullYear(),
        month: temp.getMonth() + 1,
        weekOfMonth:Math.ceil(temp.getDate()/ 7)
    };
}
