//获得焦点。placeholder消失，失去焦点时再出现
var inputText=document.getElementById('writeIt').getElementsByTagName('input')[0];
var inputArea=document.getElementById('writeIt').getElementsByTagName('textarea')[0];

inputText.onfocus=function(){
    this.placeholder="";
}
inputText.onblur=function(){
    this.placeholder="请输入标题";
}
inputArea.onfocus=function(){
    this.placeholder="";
}
inputArea.onblur=function(){
    this.placeholder="请输入内容";
}

//输入字体大小一致
inputText.oninput=function(){
    this.style.fontSize='15px';
}
inputArea.oninput=function(){
    this.style.fontSize='15px';
}
//alert(inputArea.offsetWidth+','+inputArea.offsetHeight);

//新写的博客应该连接到原来的博客后面

var onSubmit=document.getElementById('submit');
onSubmit.onclick=function(){
    if(inputText.value!==''&&inputArea.value!==''){     //不可发布残文章
        window.location="../ArticleList/ArticleList.html"
    }
}

//页面跳转
var pageI=document.getElementById('functionList').getElementsByTagName('div');
pageI[1].onclick=function(){
    window.location='../ArticleList/ArticleList.html';
}
pageI[2].onclick=function(){
    window.location='../PersonalData/PersonalData.html';
}
pageI[3].style.backgroundColor='rgb(191, 235, 141)';
console.log(pageI[3].style.backgroundColor);
pageI[4].onclick=function(){
    window.location='../Search/Search.html';
}