var xHr;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xHr=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xHr=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById(id);
}

var oInput=document.getElementsByTagName('input');

$('clickLogin').addEventListener('click',AjaxRun1,false);
function AjaxRun1(){    //发送
    if(xHr){
        var daTa='userId='+oInput[0].value+'&'+'password='+oInput[1].value;         
         //账户名称：document.getElementsByTagName('input')[0].value;
        var url="/Login?"+daTa;    //密码:document.getElementsByTagName('input')[1].value;格式都是字符串
        xHr.open("get",url,true);       //准备请求
        xHr.send(null);     //发送
    }
}

xHr.onload=function(){
    if(xHr.status==200&&xHr.readyState==4){
        let object=JSON.parse(xHr.responseText);
        if(object.code==1){              //解析JSON后的处理
            window.location='../ArticleList/ArticleList.html';
        }
        else{
            alert('账户或密码错误');
        }                      
    }
}

// if(xHr.onload){           //登陆响应
    
// }
// else{
//     if(xHr.onreadystatechange){
//         xHr.onreadystatechange=function(){
//             if(xHr.status==200&&xHr.readyState==4){
//                 let object=JSON.parse(xHr.responseText);
//                 if(object.code==1){              //解析JSON后的处理
//                     window.location='..\ArticleList\ArticleList.html';
//                 }
//                 else{
//                     alert('账户或密码错误');
//                 }                              
//             }
//         }
//     }
// }
