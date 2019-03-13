var xhrForregister;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhrForregister=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xhrForregister=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById(id);
}
var oInput=document.getElementsByTagName('input');

$('clickRigister').addEventListener('click',AjaxRun,false);


//发送
function AjaxRun(){
    if(boolNickname&&boolPassword1&&boolPassword1){
        if(xhrForregister){
            var daTa='userName='+oInput[0].value+'&'+'password='+oInput[1].value;    
            var url="/Register?"+daTa;    //密码:document.getElementsByTagName('input')[1].value;格式都是字符串
            xhrForregister.open("get",url,true);
            xhrForregister.send(null);
        }
    }
    else{
        alert('请完善您的信息');
    }
}

xhrForregister.onload=function(){
    let object=JSON.parse(xhrForregister.responseText);
    if(xhrForregister.status==200&&xhrForregister.readyState==4){
        let object=JSON.parse(xhrForregister.responseText);
        if(object.code==1){
            window.location='../ArticleList/ArticleList.html';
            alert('注册成功，您的账号是:'+object.userId);
        }
        else{
            alert('注册失败，请稍后再试');
        } 
    }
}


// if(xhrForregister.onload){             //接收服务器响应
    
// }
// else{
//     if(xhrForregister.onreadstatuschange){
//         xhrForregister.onreadstatuschange=function(){
//             if(xHr.status==200&&xHr.readyState==4){
//                let object=JSON.parse(xhrForregister.responseText);
//                 if(object.code==1){
//                     window.location='../ArticleList/ArticleList.html';
//                     alert('注册成功，您的账号是:'+object.userId);
//                 }
//                 else{
//                     alert('注册失败，请稍后再试');
//                 } 
//             }
            
//         }
//     }
// }