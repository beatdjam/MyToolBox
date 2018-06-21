/** 
* range
* 範囲内の整数値を持った配列を作成する
* @param {number} max 範囲の最大値
* @param {number} min 範囲の最小値(デフォルト値:0)
* @param {function} filer フィルタ関数(デフォルト値:全てtrue)
* @return {array} 作成した配列
*/
function range(max,min = 0,filter=(e)=>{return true}){
    return Array(max-min+1).fill()
                           .map((v,i)=>{return min+i})
                           .filter(filter);
}

/** 
* getRandValFromArray
* 配列内からランダムに値を取得する
* @param {array} ary 配列
* @return {object} 配列内の値
*/
function getRandValFromArray(ary){
    //対象の添字をランダムに取得
    return ary[Math.floor(Math.random() *  Object.keys(ary).length)];
}

/** 
* popRandValFromArray
* 配列内からランダムに値を取得する
* 取得した値は元の配列から削除される
* @param {array} i_ary 配列
* @return {object} 配列内の値
*/
function popRandValFromArray(i_ary){
    const index = Math.floor(Math.random() *  Object.keys(ary).length);
    retVal = i_ary[index];
    i_ary instanceof Array ? i_ary.splice(index,1) :  delete i_ary[index];
    return retVal;
}

/** 
* swapArrayVal
* 配列の指定の要素2つを入れ替える
* @param {array} a 元の配列
* @param {number} x 要素インデックス1
* @param {number} y 要素インデックス2
* @return {object} 入れ替え後の配列
*/
function swapArrayVal(a,x,y){
    a[x]=[a[y],a[y]=a[x]][0];
    return a;
}

/** 
* getObjectProperties
* 引数のオブジェクトの要素を列挙して配列で返す
* @param {object} a 
* @return {array} 引数ののプロパティを列挙した配列
*/
function getObjectProperties(a){
    let r = [];
    Object.keys(a).forEach((v)=>{r.push(a[v])});
    return r;
  }

/** 
* transpose
* 引数の二次元配列の行列を転置する
* @param {array} a 
* @return {array}
*/
function transpose(a){
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}
