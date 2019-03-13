window.onload=function(){

    var oInput=document.getElementsByTagName('input');
    var sAlert1=document.getElementById('alert1');
    var sAlert2=document.getElementById('alert2');
    //alert(typeof(sPassword));  //输入调试

    //对齐调试
    /*var oDiv=document.getElementsByTagName('div');
    alert(oDiv[3].offsetLeft+','+oDiv[4].offsetLeft);*/


    //点击注册跳转
    var turnToregister=document.getElementById('clickRigister');
    turnToregister.onclick=function(){
        window.location='../Register/Register.html';
    }
   


    //显示密码
    var oCheckbox=document.getElementsByTagName('input')[2];
    oCheckbox.onclick=function(){
        if(oCheckbox.checked==true){
            oInput[1].type="text";
        }
        else{
            oInput[1].type="password";
        }
    }


    //聚焦时placeholder消失
    function vaNish(){
        this.placeholder='';
    }
    oInput[0].onfocus=vaNish;  //获得焦点
    oInput[1].onfocus=vaNish;


    /*
    function aRise(i){
        switch(i){
            case 0:this.placeholder="请输入账号";
            case 1:this.placeholder="请输入密码";
        }
    }
    oInput[0].onblur=function(){  //失去焦点
        alert(nAccount.length);
        if(nAccount.length==0){
            oInput[0].onblur=aRise(0);
        }
        else{
            oInput[0].onblur=vaNish;
        }
    }        
    oInput[1].onblur=function(){
        if(sPassword.length==0){
            oInput[0].onblur=aRise(1);
        }
        else{
            oInput[0].onblur=vaNish;
        }
    }*/


    //表单增强与验证
    var BoolAccount=false;
    var BoolPassword=false;

    //账户不能为空且只允许输入数字

    oInput[0].onblur=function(){       
        if(oInput[0].value.length==0){
            sAlert1.innerHTML='账号名不能为空哦';
            this.placeholder="请输入账号名";    //用户未输入时，placeholder重新出现
            var divAlign=document.getElementsByTagName('div')[3];
            divAlign.style.left='45px';
            BoolAccount=false;
        }
        else{
            //alert(oInput[0].value.length);   //长度调试
            if(!(/(^[1-9]\d*$)/.test(oInput[0].value))){
                sAlert1.innerHTML='只允许输入数字哦';
                var divAlign=document.getElementsByTagName('div')[3];
                divAlign.style.left='45px';
                BoolAccount=false;
            }
            else{
                //alert(oInput[0].value.length);   //长度调试
                sAlert1.innerHTML='';
                var divAlign=document.getElementsByTagName('div')[3];
                divAlign.style.left='-20px';
                BoolAccount=true;
            }
        }
    }

    
    //密码输入不能为空
    oInput[1].onblur=function(){
         if(oInput[1].value.length==0){
            sAlert2.innerHTML='密码框不能为空哦';
            this.placeholder="请输入密码"; ////用户未输入时，placeholder重新出现
            var divAlign=document.getElementsByTagName('div')[4];
            divAlign.style.left='93px';
            BoolPassword=false;
        }
        else{
            //alert(oInput[1].value.length);   //长度调试
            sAlert2.innerHTML='';
            var divAlign=document.getElementsByTagName('div')[4];
            divAlign.style.left='28px';
            BoolPassword=true;
        }
    }

    //请求登陆
    /*var oLogin=document.getElementsByTagName('div')[4];
    oLogin.onclick=function(){
        if(BoolPassword&&BoolAccount){
            alert('允许登陆');
        }
        else{
            alert('您填入的信息非法');
        }
    }*/





}






