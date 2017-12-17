/** 
* isDate
* ���͒l�����t�Ƃ��Đ����������`�F�b�N����
* @param {string} strDate ���̕�����
* @return {boolean} �`�F�b�N����
*/
function isDate(strDate){
    // �󕶎��͖���
    if(strDate == ""){
        return true;
    }  
    // �N/��/���̌`���̂݋��e����
    if(!strDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)){
        return false;
    } 

    // ���t�ϊ����ꂽ���t�����͒l�Ɠ��������m�F
    // new Date()�̈����ɕs���ȓ��t�����͂��ꂽ�ꍇ�A����������t�ɕϊ�����Ă��܂�����
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