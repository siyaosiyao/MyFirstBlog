var xhrSubmit;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhrSubmit=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xhrSubmit=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById(id);
}
var oInput=document.getElementsByTagName('input');

$('submit').addEventListener('click',AjaxRun,false);

//发送
function AjaxRun(){
    if(xhrSubmit){

        var select=document.getElementsByTagName('select')[0];   //获取单选框的值
        var label=document.getElementById('align2').getElementsByTagName('input');  //获取单选框的值
        var labelValue; //取单选框的值
        var textValue=document.getElementsByTagName('textarea')[0].value;//取textarea的值
        for(var i=0;i<label.length;i++){
            if(label[i].checked=='checked'){
                labelValue=label[i].value;
                break;
            }
        }
        var daTa='userName='+oInput[0].value+'&'+'realName='+oInput[1].value+'&'
        +'region='+select.value+'&'+'sex='+labelValue+'&'+'signature='+textValue;    
        var url="/MessageComplete?"+daTa;
        xhrSubmit.open("get",url,true);
        xhrSubmit.send(null);
    }
}


xhrSubmit.onload=function(){//接收服务器响应
    if(xhrSubmit.status==200&&xhrSubmit.readyState==4){
        let object=JSON.parse(xhrSubmit.responseText);
        console.log(object.code);
        if(object.code==1){
            window.location='../ArticleList/ArticleList.html';
        }
    } 
}

// if(xhrSubmit.onload){             
    
// }
// else{
//     if(xhrSubmit.onreadstatuschange){
//         xhrSubmit.onreadstatuschange=function(){
//             if(xhrSubmit.status==200&&xhrSubmit.readyState==4){
//                 let object=JSON.parse(xhrSubmit.responseText);
//                 if(object.code==1){
//                     window.location='../ArticleList/ArticleList.html';             
//                 }
//             } 
//         }
//     }
// }