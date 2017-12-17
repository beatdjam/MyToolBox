/** 
* padding
* �w�肳�ꂽ�����܂Ŏw��̕����ŕ⊮�����ԋp����
* �������w�肳��Ȃ��ꍇ�A0�𖄂߂ĕԂ�
* @param {string} str ���̕�����
* @param {number} num �ړI�̕�����
* @param {string} pad �⊮���镶����
* @return {string} �⊮��̕�����
*/
function padding(str,num,pad){
    if(pad === void(0)) pad = 0;
    return (Array(num + 1).join(pad)+str)
            .slice(num*-1);
}
/** 
* suppress
* ������̐擪�ɑ��݂���w��̕������
* ���̕������o�ꂷ��܂ō폜����
* @param {string} str ���̕�����
* @param {string} pad �폜���镶��
* @return {string} �폜��̕�����
*/
function suppress(str, sup) {
    return str.replace(new RegExp("^"+sup+"*"),"");
}

/** 
* repeat
* �w��̕�������J��Ԃ����V������������쐬����
* @param {string} str ���̕�����
* @param {number} num ��
* @return {string} �쐬���ꂽ������
*/
function repeat(str,num){
    return Array(num+1).join(str);
}

/** 
* isHankaku
* ���͒l�����p���������`�F�b�N����
* @param {string} value ���̕�����
* @return {boolean} �`�F�b�N����
*/
function isHankaku(value){
    return !value.match(/[^\x01-\x7E]/) 
            || !value.match(/[^\uFF65-\uFF9F]/);
}

/** 
* isHankaku
* ���͒l�����p�J�i���������`�F�b�N����
* @param {string} value ���̕�����
* @return {boolean} �`�F�b�N����
*/
function isHankakuKana(value){
    return !value.match(/[^\uFF65-\uFF9F]/);
}
