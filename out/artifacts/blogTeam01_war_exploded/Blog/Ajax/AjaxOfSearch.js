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
      console.log('Fail');
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
      console.log('Pass');
        if(xhrSearch){
            $('ifFound').innerHTML='';
            var string=document.getElementById('In').getElementsByTagName('input')[0].value;
            var time=document.getElementsByTagName('select');
            var daTa='Title='+string+'&'+
            'year='+time[0].value+'&'+'month='+time[1].value+'&'+'day='+time[2].value;  
            var url="/searchArticle?"+daTa;
            xhrSearch.open("get",url,true);
            xhrSearch.send(null);
      }
    }

    //回调函数,如果收到索引号
  xhrSearch.onload=function(){
    if(xhrSearch.status==200&&xhrSearch.readyState==4){
      let object=JSON.parse(xhrSearch.responseText);
      console.log(object);
      for(var i=0;i<parseInt(object.length);i++){
          $('ifFound').innerHTML+='<div><h1>'+object[i].Title+'</h1>'+'<p>'+object[i].content+'</p><span style="display: none;">'+object[i].blogId+'</span></div>';
      }
      var listLength=$('ifFound').getElementsByTagName('div').length;
      for(var i=0;i<parseInt(listLength);i++){
        $('ifFound').getElementsByTagName('div')[i].className='Results';
      }
    }




console.log('This document is opened successfully');
    //点击编辑并修改
    var whichI;
    console.log('i');
    console.log($('ifFound').getElementsByClassName('Results').length);
    for(var i=0;i<parseInt($('ifFound').getElementsByClassName('Results').length);i++){
        console.log('i');
        $('ifFound').getElementsByClassName('Results')[i].index=i;
        $('ifFound').getElementsByClassName('Results')[i].addEventListener('click',editIt,false);
        function editIt(){
            console.log('Have entered');
            whichI=this.index;
            ID=this.getElementsByTagName('span')[0].textContent;
            document.getElementById('ifSearch').style.display='none';
            document.getElementById('ifFound').style.display='none';
            document.getElementById('writeIt').style.display='block';
            var oInput=document.getElementById('writeIt').getElementsByTagName('input')[0];
            var content=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
            oInput.value=this.getElementsByTagName('h1')[0].textContent;
            content.value=this.getElementsByTagName('p')[0].textContent;
        }
    }

//修改完成请求更新
    var upDate=document.getElementById('submit');
    var newh1,newp;
    upDate.addEventListener('click',AjaxRun,false);
    function AjaxRun(){
        var oInput=document.getElementById('writeIt').getElementsByTagName('input')[0];
        var content=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
        newh1=oInput.value;
        newp=content.value;
        if(xhrSearch){
            var date=new Date();
            var daTa='blogId='+ID+'&Title='+oInput.value+'&'+'content='+content.value+'&'+'year='+date.getFullYear()+'&'+'month='+date.getMonth()+'&'+'day='+date.getDay();
            var url="/updateArticle?"+daTa;
            xhrSearch.open("get",url,true);
            xhrSearch.send(null);
        }

        xhrSearch.onload=function(){
            if(xhrSearch.status==200&&xhrSearch.readyState==4){
                let Code=JSON.parse(xhrSearch.responseText);
                console.log('dawdad');
                console.log(Code);
                if(Code.code==1){  //如果更新成功，需要返回"code"：1;
                    document.getElementById('ifSearch').style.display='block';
                    document.getElementById('ifFound').style.display='block';
                    document.getElementById('writeIt').style.display='none';
                    $('ifFound').getElementsByClassName('Results')[whichI].innerHTML="<div class='Results'><h1>"+newh1+'</h1>'+
                        '<p style="font-style:Italic;">'+newp+'</p>'+'</div>';
                    alert('更新成功');
                    location.reload();
                }
            }
        }
    }
  }
}
// //模拟
// if(1){
//     for(var i=0;i<12;i++){
//         $('ifFound').innerHTML+='<div></div>';
//     }
//     var listLength=$('ifFound').getElementsByTagName('div').length;
//     for(var i=0;i<listLength;i++){
//       $('ifFound').getElementsByTagName('div')[i].className='Results';
//     }
//   }
