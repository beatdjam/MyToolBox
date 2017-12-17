/** 
* padding
* 指定された長さまで指定の文字で補完した返却する
* 文字が指定されない場合、0を埋めて返す
* @param {string} str 元の文字列
* @param {number} num 目的の文字列長
* @param {string} pad 補完する文字列
* @return {string} 補完後の文字列
*/
function padding(str,num,pad){
    if(pad === void(0)) pad = 0;
    return (Array(num + 1).join(pad)+str)
            .slice(num*-1);
}
/** 
* suppress
* 文字列の先頭に存在する指定の文字列を
* 他の文字が登場するまで削除する
* @param {string} str 元の文字列
* @param {string} pad 削除する文字
* @return {string} 削除後の文字列
*/
function suppress(str, sup) {
    return str.replace(new RegExp("^"+sup+"*"),"");
}

/** 
* repeat
* 指定の文字列を繰り返した新しい文字列を作成する
* @param {string} str 元の文字列
* @param {number} num 回数
* @return {string} 作成された文字列
*/
function repeat(str,num){
    return Array(num+1).join(str);
}

/** 
* isHankaku
* 入力値が半角文字かをチェックする
* @param {string} value 元の文字列
* @return {boolean} チェック結果
*/
function isHankaku(value){
    return !value.match(/[^\x01-\x7E]/) 
            || !value.match(/[^\uFF65-\uFF9F]/);
}

/** 
* isHankaku
* 入力値が半角カナ文字かをチェックする
* @param {string} value 元の文字列
* @return {boolean} チェック結果
*/
function isHankakuKana(value){
    return !value.match(/[^\uFF65-\uFF9F]/);
}
