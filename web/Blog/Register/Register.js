var oInput=document.getElementsByTagName('input');
var sAlert1=document.getElementById('alert1');
var sAlert2=document.getElementById('alert2');
var sAlert3=document.getElementById('alert3');

//对齐调试
/*var oDiv=document.getElementsByTagName('div');
alert(oDiv[3].offsetLeft+','+oDiv[4].offsetLeft+','+oDiv[5].offsetLeft);*/
//alert(oInput[0].offsetLeft+','+oInput[1].offsetLeft+','+oInput[3].offsetLeft);


//表单增强与验证


//聚焦时placeholder消失
function vaNish(){
    this.placeholder='';
}
oInput[0].onfocus=vaNish;  //获得焦点
oInput[1].onfocus=vaNish;
oInput[3].onfocus=vaNish;

//显示密码
var oCheckbox=document.getElementsByTagName('input');
oCheckbox[2].onclick=function(){
    if(oCheckbox[2].checked==true){
        oInput[1].type="text";
    }
    else{
        oInput[1].type="password";
    }
}
oCheckbox[4].onclick=function(){
    if(oCheckbox[4].checked==true){
        oInput[3].type="text";
    }
    else{
        oInput[3].type="password";
    }
}


//失去焦点时检查

var boolNickname=false;
var boolPassword1=false;
var boolPassword2=false;

oInput[0].onblur=function(){
    if(oInput[0].value.length==0){   //昵称不可为空
        sAlert1.innerHTML='昵称不能为空白哦';
        this.placeholder="请输入账号";
        var divAlign=document.getElementsByTagName('div')[3];
        divAlign.style.left='50px';
        boolNickname=false;
    }
    else{
        sAlert1.innerHTML='';
        var divAlign=document.getElementsByTagName('div')[3];
        divAlign.style.left='-15px';
        boolNickname=true;
    }
}

oInput[1].onblur=function(){    //密码框的检查
    if(oInput[1].value.length==0){
        sAlert2.innerHTML="密码框不能为空哦";
        this.placeholder="请输入密码";
        var divAlign=document.getElementsByTagName('div')[4];
        divAlign.style.left='103px';
        boolPassword1=false;
    }
    else{
        sAlert2.innerHTML='';
        var divAlign=document.getElementsByTagName('div')[4];
        divAlign.style.left='38px';
        boolPassword1=true;
    }
}

//再次输入密码调试
oInput[3].onblur=function(){
    if(oInput[3].value!==oInput[1].value&&oInput[1].value.length!=0){
        sAlert3.innerHTML='两次密码输入不一致';

        //对齐调试
        /*var oDiv=document.getElementsByTagName('div');
        alert(oDiv[2].offsetLeft+','+oDiv[3].offsetLeft+','+oDiv[4].offsetLeft);*/

        var divAlign=document.getElementsByTagName('div')[5];
        divAlign.style.left='90px';
        boolPassword2=false;
    }
    if(oInput[3].value.length!=0&&oInput[1].value.length==0){
        sAlert3.innerHTML='请先输入密码';

        //对齐调试
        /*var oDiv=document.getElementsByTagName('div');
        alert(oDiv[2].offsetLeft+','+oDiv[3].offsetLeft+','+oDiv[4].offsetLeft);*/
        var divAlign=document.getElementsByTagName('div')[5];
        divAlign.style.left='68px';
        boolPassword2=false;
    }
    if(oInput[3].value===oInput[1].value){
        sAlert3.innerHTML='';
        var divAlign=document.getElementsByTagName('div')[5];
        divAlign.style.left='18px';
        boolPassword2=true;
    }
    if(oInput[3].value.length==0){
        this.placeholder='请再次输入密码';
    }
}

