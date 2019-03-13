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
    return document.getElementById('id');
}