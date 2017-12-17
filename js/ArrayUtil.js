/** 
* range
* �͈͓��̐����l���������z����쐬����
* @param {number} min �͈͂̍ŏ��l
* @param {number} max �͈͂̍ő�l
* @param {function} filer �t�B���^�֐�
* @return {array} �쐬�����z��
*/
function range(min, max, filterFunc){
    // �t�B���^�֐����^�����Ė�����Ώ��true��Ԃ��֐����`
    filterFunc = !!filterFunc ? filterFunc : e=>{return true};  
    return  [...Array(max+1).keys()]
              .filter(e=>{return e>=min})
              .filter(filterFunc);
}

/** 
* getRandValFromArray
* �z������烉���_���ɒl���擾����
* @param {array} ary �z��
* @return {object} �z����̒l
*/
function getRandValFromArray(ary){
    //�Ώۂ̓Y���������_���Ɏ擾
    return ary[Math.floor(Math.random() *  Object.keys(ary).length)];
}

/** 
* popRandValFromArray
* �z������烉���_���ɒl���擾����
* �擾�����l�͌��̔z�񂩂�폜�����
* @param {array} i_ary �z��
* @return {object} �z����̒l
*/
function popRandValFromArray(i_ary){
    const index = Math.floor(Math.random() *  Object.keys(ary).length);
    retVal = i_ary[index];
    i_ary instanceof Array ? i_ary.splice(index,1) :  delete i_ary[index];
    return retVal;
}

/** 
* swapArrayVal
* �z��̎w��̗v�f2�����ւ���
* @param {array} a ���̔z��
* @param {number} x �v�f�C���f�b�N�X1
* @param {number} y �v�f�C���f�b�N�X2
* @return {object} ����ւ���̔z��
*/
function swapArrayVal(a,x,y){
    a[x]=[a[y],a[y]=a[x]][0];
    return a;
}

/** 
* getObjectProperties
* �����̃I�u�W�F�N�g�̗v�f��񋓂��Ĕz��ŕԂ�
* @param {object} a 
* @return {array} �����̂̃v���p�e�B��񋓂����z��
*/
function getObjectProperties(a){
    let r = [];
    Object.keys(a).forEach((v)=>{r.push(a[v])});
    return r;
  }