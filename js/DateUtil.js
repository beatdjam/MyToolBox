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