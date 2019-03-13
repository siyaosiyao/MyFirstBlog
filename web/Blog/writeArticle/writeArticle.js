//鑾峰緱鐒︾偣銆俻laceholder娑堝け锛屽け鍘荤劍鐐规椂鍐嶅嚭鐜?
var inputText=document.getElementById('writeIt').getElementsByTagName('input')[0];

var inputArea=document.getElementById('writeIt').getElementsByTagName('textarea')[0];



inputText.onfocus=function(){

    this.placeholder="";

}

inputText.onblur=function(){

    this.placeholder="璇疯緭鍏ユ爣棰?;

}

inputArea.onfocus=function(){

    this.placeholder="";

}

inputArea.onblur=function(){

    this.placeholder="璇疯緭鍏ュ唴瀹?;

}



//杈撳叆瀛椾綋澶у皬涓€鑷?
inputText.oninput=function(){

    this.style.fontSize='15px';

}

inputArea.oninput=function(){

    this.style.fontSize='15px';

}

//alert(inputArea.offsetWidth+','+inputArea.offsetHeight);



//鏂板啓鐨勫崥瀹㈠簲璇ヨ繛鎺ュ埌鍘熸潵鐨勫崥瀹㈠悗闈?


var onSubmit=document.getElementById('submit');

onSubmit.onclick=function(){

    if(inputText.value!=''&&inputArea.value!=''){     //涓嶅彲鍙戝竷娈嬫枃绔?
        addNew();

        window.location="../ArticleList/ArticleList.html"

    }

}



//椤甸潰璺宠浆

var pageI=document.getElementById('functionList').getElementsByTagName('div');

pageI[1].onclick=function(){

    window.location='../ArticleList/ArticleList.html';

}

pageI[2].onclick=function(){

    window.location='../PersonalData/PersonalData.html';

}

pageI[4].onclick=function(){

    window.location='';

}