var xhrSearch;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhrSearch=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xhrSearch=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById(id);
}



$('Search').addEventListener('click',Run,false);

function Run(){  
    var oInput=$('In').getElementsByTagName('input')[0];
    if(oInput.value.length==0){
      oInput.placeholder='请输入搜索内容';
      oInput.setAttribute('class','red');
      oInput.onblur=function(){
          if(oInput.value.length==0){
              this.placeholder='输入关键字';
              oInput.className='';
          }
      }
    }
    else{
      //发送请求
        if(xhrSearch){
            var daTa='';  
            var url="/ArticleSearch?"+daTa;
            xhrSearch.open("get",url,true);
            xhrSearch.send(null);
      }
    }
}

//回调函数,如果收到索引号
xhrSearch.onload=function(){
  if(xhrSearch.status==200&&xhrSearch.readyState==4){
    let object=JSON.parse(xhrSearch.responseText);
    if(0){
      for(var i=0;i<12;i++){
          $('ifFound').innerHTML+='<div></div>';
      }
      var listLength=$('ifFound').getElementsByTagName('div').length;
      for(var i=0;i<listLength;i++){
        $('ifFound').getElementsByTagName('div')[i].className='Results';
      }
    }
  }
}



