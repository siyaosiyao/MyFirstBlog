var oInput=document.getElementsByTagName('input');

//获取form部分的表单,用于对其的调试
var formDiv=document.getElementById('form').getElementsByTagName('div');

/*alert(formDiv[0].offsetLeft+','+formDiv[1].offsetLeft+','+
formDiv[2].offsetLeft+','+formDiv[3].offsetLeft+','+formDiv[4].offsetLeft);*/
/*alert(oInput[0].offsetLeft+','+oInput[1].offsetLeft+','+
oInput[2].offsetLeft+','+oInput[3].offsetLeft+','+document.getElementsByTagName('textarea')[0].offsetLeft);*/
/*alert(document.getElementById('align3').offsetLeft+','+document.getElementById('submit').offsetLeft);*/

//获得焦点。placeholder消失，失去焦点时再出现
var textArea=document.getElementsByTagName('textarea')[0];

oInput[0].onfocus=function(){
    this.placeholder='';
    this.style.backgroundColor='rgb(245,245,245)';
}
oInput[0].onblur=function(){
    this.placeholder='请输入新的昵称';
    if(this.value.length!=0){   //如果填入内容，修改输入框样式
        this.style.backgroundColor='#D5f0B7';
    }
    else{
        this.style.backgroundColor='rgb(245,245,245)';
    }                
}
oInput[1].onfocus=function(){
    this.placeholder='';
    this.style.backgroundColor='rgb(245,245,245)';
}
oInput[1].onblur=function(){
    this.placeholder='请输入您的实名';
    if(this.value.length!=0){   //如果填入内容，修改输入框样式
        this.style.backgroundColor='#D5f0B7';
    }
    else{
        this.style.backgroundColor='rgb(245,245,245)';
    }
}
textArea.onfocus=function(){
    this.placeholder='';
    this.style.backgroundColor='rgb(245,245,245)';
}
textArea.onblur=function(){
    this.placeholder='请输入简介';
    if(this.value.length!=0){   //如果填入内容，修改输入框样式
        this.style.backgroundColor='#D5f0B7';
    }
    else{
        this.style.backgroundColor='rgb(245,245,245)';
    }
}

//输入字体大小一致
oInput[0].oninput=function(){
    this.style.fontSize='15px';
}
oInput[1].oninput=function(){
    this.style.fontSize='15px';
}
textArea.oninput=function(){
    this.style.fontSize='15px';
    this.style.fontWeight='bold';
    this.placeholder.fontWeight='initial';
}

//点击发布时验证表单输入,不能为空，不可乱输
/*var clickSubmit=document.getElementById('submit');
clickSubmit.onclick=function(){
    
}*/

//跳转
var pageI=document.getElementById('functionList').getElementsByTagName('div');
pageI[1].onclick=function(){
    window.location='../ArticleList/ArticleList.html';
}
pageI[3].onclick=function(){
    window.location='../writeArticle/writeArticle.html';

}
pageI[4].onclick=function(){
window.location='../Search/Search.html';
}


