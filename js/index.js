//获取元素  getElem getAllElem
var getElem = function(selector){
    return document.querySelector(selector);
}
var getAllElem = function(selector){
    return document.querySelectorAll(selector);
}
//获取元素样式  getCls
var getCls = function(element){
    return element.getAttribute('class');
}
//设置元素样式  setCls
var setCls = function(element , cls){
    return element.setAttribute('class',cls);
}
//为元素添加样式   addCls
var addCls = function(element , cls){
    var baseCls = getCls(element);
    if( baseCls.indexOf(cls) === -1 ){
        setCls( element,baseCls+' '+cls);
    }
}
//为元素删除样式   delCls
var delCls = function(element,cls){
    var baseCls = getCls(element);
    if( baseCls.indexOf(cls) != -1 ){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
    }
}

//bhdx-content
function ById(id){
    return typeof id === "string" ? document.getElementById(id) : id;
}
var index = 0 ,
    p = 0,
    timesNext = null,
    timer = null,
    onclicktimes = null,
    pics = ById("screen__photo").getElementsByTagName("div"),
    getsico = ById("smallico").getElementsByTagName("span"),
    getsonclickico = ById("screen-3__content__ico-centre").getElementsByTagName("li"),
    getschangImg = ById("screen-3__content").getElementsByTagName("div"),
    getschangImgtext = ById("screen-3__content").getElementsByTagName("li"),
    getschangImgp = ById("screen-3__content").getElementsByTagName("p"),
    getsnavmenuitem =ById("nav-menuitem").getElementsByTagName("div"),
    getsnavmenuitem_b = ById("nav-menuitem").getElementsByTagName("b"),
    getsnavmenuitems = ById("nav-menuitems")
    getscontent = ById("content"),
    len = pics.length;
    len1 = getsonclickico.length;
    len2 = getschangImg.length;
    //PC端加载JS效果
    nav_div = ById("nav-menuitems"),
    nav_div1 = ById("nav-menuitems__ul"),
    nav_div2 = ById("nav-menuitems__div");
      
// 当鼠标划入时清除自动图片播放效果
    screen__photo.onmouseover = function(){
    if(timer) clearInterval(timer);
};

screen__photo.onmouseout = function(){
    timer = setInterval(function(){  //搭建时间函数与索引的桥梁  get 到index这个索引用来展示当前需要展示的图片
        index++;
        if(index >= len){
            index = 0;
        }
        changbackground();
    }, 3000);
};

//图片小图标自动切换效果函数
function changbackground(){
    for(var i=0;i<len;i++){
    pics[i].style.display = "none";
    delCls(getsico[i],"screen-1__small-ico-act");
    }
    pics[index].style.display = "block";
    addCls(getsico[index],"screen-1__small-ico-act");
}
//当鼠标点击时切换图片
function onclickchangbackground(){
   for(p=0;p<len;p++){
    getsico[p].id = p;
    getsico[p].onclick = function(){
        for(var i=0;i<len;i++){
            pics[i].style.display = "none";
            delCls(getsico[i],"screen-1__small-ico-act");
            }
        pics[this.id].style.display = "block";
        addCls(this,"screen-1__small-ico-act");
        }   
    }
}
function  onclickchangImgNext (){
    if(!timesNext){
        for(var q=3;q<=8;q++){
        getschangImg[q].style.display = "none";
        }
    }
       getsonclickico[1].onclick = function(){
      
        timesNext=timesNext+3;
        for(var i=0;i<len2;i++){
            getschangImg[i].style.display = "none";
           }
        if(timesNext >= 9){
            timesNext = 0
            getschangImg[timesNext].style.display = "block";
            getschangImg[timesNext+1].style.display = "block";
            getschangImg[timesNext+2].style.display = "block";

        }else{
            getschangImg[timesNext].style.display = "block";
            getschangImg[timesNext+1].style.display = "block";
            getschangImg[timesNext+2].style.display = "block";

    }
};
};
function onclickchangImgPrve(){

    getsonclickico[0].onclick = function(){
            for(var i=0;i<len2;i++){
            getschangImg[i].style.display = "none";
           }
           if((timesNext == 0)){
            timesNext = 0;
            getschangImg[timesNext].style.display = "block";
            getschangImg[timesNext+1].style.display = "block";
            getschangImg[timesNext+2].style.display = "block";
            timesNext = timesNext + 3; 
           } else
           if((timesNext == 3)||(timesNext == null)){
            timesNext = 0;
            getschangImg[timesNext+6].style.display = "block";
            getschangImg[timesNext+7].style.display = "block";
            getschangImg[timesNext+8].style.display = "block";
            timesNext = timesNext + 6; 
           } else 
           if((timesNext == 6)||(timesNext == 9)){
            timesNext = 0;
            getschangImg[timesNext+3].style.display = "block";
            getschangImg[timesNext+4].style.display = "block";
            getschangImg[timesNext+5].style.display = "block";
            timesNext = 0; 
           }   else{
               alert("Error");
           }
    }

};
//当鼠标点击时弹出导航菜单
function navmenuitem(){
    if(!onclicktimes){
        getsnavmenuitems.style.display = "none";
    }
    getsnavmenuitem[0].onclick = function(){
        onclicktimes ++;
      if((onclicktimes == null) || (onclicktimes % 2 == 0)){
        getsnavmenuitems.style.display = "none";
        delCls( getsnavmenuitem_b[1],"skew-right");
        delCls( getsnavmenuitem_b[2],"skew-left");
        delCls( getsnavmenuitem_b[0],"alp");
        delCls( getsnavmenuitem_b[3],"alp");  
      }
      else{
        getsnavmenuitems.style.display = "block";
        addCls( getsnavmenuitem_b[1],"skew-right");
        addCls( getsnavmenuitem_b[2],"skew-left");
        addCls( getsnavmenuitem_b[0],"alp");
        addCls( getsnavmenuitem_b[3],"alp");  
      }
     
    }      
}
navmenuitem();
onclickchangImgPrve()
onclickchangImgNext();
onclickchangbackground();
screen__photo.onmouseout();
//SCREEN-4鼠标进入显示文本
function input1(){
    getschangImgtext[1].onmouseover = function(){
        addCls(getschangImgp[0],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[1].onmouseleave = function(){
        delCls(getschangImgp[0],"screen-3__content__photo__item-p-show");
    }
}
input1();
function input2(){
    getschangImgtext[2].onmouseover = function(){
        addCls(getschangImgp[1],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[2].onmouseleave = function(){
        delCls(getschangImgp[1],"screen-3__content__photo__item-p-show");
    }
}
input2();
function input3(){
    getschangImgtext[5].onmouseover = function(){
        addCls(getschangImgp[3],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[5].onmouseleave = function(){
        delCls(getschangImgp[3],"screen-3__content__photo__item-p-show");
    }
}
input3();
function input4(){
    getschangImgtext[6].onmouseover = function(){
        addCls(getschangImgp[4],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[6].onmouseleave = function(){
        delCls(getschangImgp[4],"screen-3__content__photo__item-p-show");
    }
}
input4();
function input5(){
    getschangImgtext[9].onmouseover = function(){
        addCls(getschangImgp[6],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[9].onmouseleave = function(){
        delCls(getschangImgp[6],"screen-3__content__photo__item-p-show");
    }
}
input5();
function input6(){
    getschangImgtext[10].onmouseover = function(){
        addCls(getschangImgp[7],"screen-3__content__photo__item-p-show");
    }
    getschangImgtext[10].onmouseleave = function(){
        delCls(getschangImgp[7],"screen-3__content__photo__item-p-show");
    }
}
input6();