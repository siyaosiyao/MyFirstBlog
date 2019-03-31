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

var myArticle=document.getElementById('articleDiv');
window.addEventListener('load',AllContain,false);
function AllContain(){   //首次进入页面
  if(xhr){
    var daTa='';  
    var url="/getAllArticle"+daTa;
    console.log(url)
    xhr.open("get",url,true);
    xhr.send(null);
  }

  xhr.onload=function(){
    if(xhr.status===200&&xhr.readyState===4){
      let object=JSON.parse(xhr.responseText);
      var L=parseInt(object.length);
      for(var i=0;i<L;i++){
        myArticle.innerHTML+="<div class='vis1'><h1>"+object[i].Title+'</h1>'+
        '<p style="font-style:Italic;">'+object[i].content+'</p>'+'<span style="display:none;">'+object[i].blogId+'</span></div>';
      }
    }
      //点击跳转到更新页面
//编辑文章显示内容
      var myArticles=document.getElementsByClassName('vis1');
      var whichI,ID;
      for(var i=0;i<myArticles.length;i++){
          myArticles[i].index=i;
          myArticles[i].addEventListener('click',None,false);
      }
      function None(){
          whichI=this.index;
          ID=this.getElementsByTagName('span')[0].textContent;
          var oInput=document.getElementById('writeIt').getElementsByTagName('input')[0];
          var content=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
          document.getElementById('articleDiv').style.display='none';
          document.getElementById("writeIt").style.display='block';
          oInput.value=this.getElementsByTagName('h1')[0].textContent;
          content.value=this.getElementsByTagName('p')[0].textContent;
          console.log(this.getElementsByTagName('h1')[0].textContent);
          console.log(this.getElementsByTagName('p')[0].textContent);
      }


//更新文章
      var date= new Date();
      var upDate=document.getElementById('submit');
      var newh1,newp;
      upDate.addEventListener('click',AjaxRun,false);
      function AjaxRun(){
          var oInput=document.getElementById('writeIt').getElementsByTagName('input')[0];
          var content=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
          newh1=oInput.value;
          newp=content.value;
          if(xhr){
              var daTa='blogId='+ID+'&Title='+oInput.value+'&'+'content='+content.value+'&'+'year='+date.getFullYear()+'&'+'month='+date.getMonth()+'&'+'day='+date.getDay();
              var url="/updateArticle?"+daTa;
              xhr.open("get",url,true);
              xhr.send(null);
          }

          xhr.onload=function(){
              if(xhr.status==200&&xhr.readyState==4){
                  let Code=JSON.parse(xhr.responseText);
                  if(Code.code==1){  //如果更新成功，需要返回"code"：1;
                      document.getElementById('articleDiv').style.display='block';
                      document.getElementById("writeIt").style.display='none';
                      console.log(whichI)
                      myArticles[whichI].innerHTML="<div class='vis1'><h1>"+newh1+'</h1>'+
                          '<p style="font-style:Italic;">'+newp+'</p>'+'</div>';
                      location.reload();
                  }
              }
          }
      }
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
  








