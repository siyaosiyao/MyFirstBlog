var xhr;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhr=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById(id);
}

var myArticles=document.getElementById('articleDiv').getElementsByClassName('vis1');
window.addEventListener('load',AllContain,false);
function AllContain(){   //首次进入页面
  if(xhr){
    var daTa='';  
    var url="?"+daTa;  
    xhr.open("get",url,true);
    xhr.send(null);
  }

  xhr.onload=function(){
    if(xhr.status==200&&xhr.readyState==4){
      let object=JSON.parse(xhr.responseText);
      var L=parseInt(object.length);
      for(var i=1;i<L;i++){
        myArticles[i].innerHTML+='<h1>'+object[i].Title+'</h1>'+
        '<p style="font-style:Italic;">'+object[i].content+'</p>';
      }
    }
  }
}


//编辑文章显示内容
var oInput=document.getElementById('writeIt').getElementsByTagName('input')[0];
var content=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
for(var i=0;i<myArticles.length;i++){
  myArticles[i].addEventListener('click',takeIt,false);
  function takeIt(){
    oInput.value=this.getElementsByTagName('h1')[0].textContent;
    content.value=this.getElementsByTagName('p')[0].textContent;
    console.log(this.getElementsByTagName('h1')[0].textContent);
    console.log(this.getElementsByTagName('p')[0].textContent);
  }
}



//更新文章
var upDate=document.getElementById('submit');
upDate.addEventListener('click',AjaxRun,false);
function AjaxRun(){
  if(xhr){
    var daTa='';  
    var url="?"+daTa;  
    xhr.open("get",url,true);
    xhr.send(null);
  }

  xhr.onload=function(){
    if(xhr.status==200&&xhr.readyState==4){
      let Code=JSON.parse(xhr.responseText);
      // if(Code.code==1){
      //   document.getElementById("writeIt").style.display='none';
      //   for(var i=0;i<myArticles.length;i++){
      //     myArticles[i].style.display='block';
      //   }
      // }
    }
  }

  // if(oInput.value.length!=0&&content.value.length!=0){
  //   if(xhr){
  //     var daTa='';  
  //     var url="?"+daTa;  
  //     xhr.open("get",url,true);
  //     xhr.send(null);
  //   }
  // }
  // else{
  //   if(oInput.value.length==0){
  //     oInput.placeholder='标题不可为空';
  //   }
  //   else{
  //     if(content.value.length==0){
  //       content.placeholder='内容不可为空';
  //     }
  //   } 
  // }
  
}







