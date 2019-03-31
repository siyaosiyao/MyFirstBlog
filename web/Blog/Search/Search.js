var myDiary=document.getElementById('userList');    //日志数目
var sDiary=myDiary.getElementsByTagName('p')[2];
var myArticles=document.getElementById('articleDiv').getElementsByClassName('vis1');
sDiary.innerHTML='日志:'+myArticles.length;


//点击了哪个功能选项
var whichClick=document.getElementById('functionList').getElementsByTagName('div');

//点击显示个人主页
whichClick[1].onclick=function(){
    window.location='../ArticleList/ArticleList.html';
}
//点击显示个人资料
whichClick[2].onclick=function(){
    window.location='../PersonalData/PersonalData.html';
}
//写博客
whichClick[3].onclick=function(){
    window.location='../writeArticle/writeArticle.html';
}
whichClick[4].style.backgroundColor='rgb(191, 235, 141)';
console.log(whichClick[4].style.backgroundColor);

//input聚焦时，placehloder消失，失焦时显示
var oInput=document.getElementsByTagName('input')[0];
oInput.onfocus=function(){
    this.placeholder='';
}
oInput.onblur=function(){
    this.placeholder='输入关键字';
}
oInput.oninput=function(){
    this.style.fontSize='15px';
    this.style.fontWeight='blod';
}

//快速写出年月日
var opYear=document.getElementById('year');
var opMonth=document.getElementById('month');
var opDay=document.getElementById('day');
for(var i=2000;;i++){   //快速写出年份
    var j=new Date().getFullYear();
    if(i==j){
        opYear.innerHTML+='<option value="'+j+'">'+j+'</option>';
        opYear.value=0;
        break;
    }
    else{
        opYear.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }    
}

function year(u){   //判断润平年
    if(u%4==0&&u%100!=0||u%400==0){
        return true;
    }
    else{
        return false;
    } 
}

for(var i=1;i<=12;i++){   //默认时间月份
    opMonth.innerHTML+='<option value="'+i+'">'+i+'</option>';
    opMonth.value=0;
}
window.onload=function(){
    for(var i=1;i<=31;i++){   //默认时间日期
        opDay.innerHTML+='<option value="'+i+'">'+i+'</option>';
        opDay.value=0;
    } 
}

opMonth.onblur=month2;
opYear.onblur=month2;
function month2(){
    switch(opMonth.value){
        case '1','3','5','7','8','10','12':{
            opDay.innerHTML='';
            for(var j=1;j<=31;j++){  //快速写出日期
                opDay.innerHTML+='<option value="'+j+'">'+j+'</option>';
            }
            opDay.value=0;
            break;
        }
        case '4','6','9','11':{
            opDay.innerHTML='';
            for(var j=1;j<=30;j++){  //快速写出日期
                opDay.innerHTML+='<option value="'+j+'">'+j+'</option>';
            }
            opDay.value=0;
            break;
        }
        case '2':{
            opDay.innerHTML='';
            if(year(parseInt(opYear.value))){
                for(var j=1;j<=29;j++){  //快速写出日期
                    opDay.innerHTML+='<option value="'+j+'">'+j+'</option>';
                }
            }
            else{
                for(var j=1;j<=28;j++){  //快速写出日期
                    opDay.innerHTML+='<option value="'+j+'">'+j+'</option>';
                }
            }
            opDay.value=0;
            break;
        }                            
    }
}

//编辑文章时，输入自体一致
var inText=document.getElementsByTagName('input')[1];
var inTextArea=document.getElementById('writeIt').getElementsByTagName('textarea')[0];
inText.oninput=function(){
    this.style.fontSize='15px';
}
inTextArea.oninput=function(){
    this.style.fontSize='15px';
}


