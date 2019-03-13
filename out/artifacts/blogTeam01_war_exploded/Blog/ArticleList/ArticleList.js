var myDiary=document.getElementById('userList');    //��־��Ŀ
var sDiary=myDiary.getElementsByTagName('p')[2];
var myArticles=document.getElementById('articleDiv').getElementsByTagName('div');
sDiary.innerHTML='��־:'+myArticles.length;

//Ĭ������
for(var i=0;i<myArticles.length;i++){
    var j=i+1;
    myArticles[i].innerHTML='<h1>���ĵ�'+j+'ƪ���µı���</h1>'+
    '<p style="font-style:Italic;">���ĵ�'+j+'ƪ���µ�����</p>';
}

//������ĸ�����ѡ��
var whichClick=document.getElementById('functionList').getElementsByTagName('div');

//д����
whichClick[3].onclick=function(){
    window.location='../writeArticle/writeArticle.html';
}
whichClick[2].onclick=function(){
    window.location='../PersonalData/PersonalData.html';
}



//�������
