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
function ById(id){
    return typeof id === "string" ? document.getElementById(id) : id;
}
var i = 0,
    nav_div = ById("nav-menuitems"),
    header_log = ById("header__wrap"),
    nav_div1 = ById("nav-menuitems__ul"),
    nav_div1_li = ById("nav-menuitems__ul").getElementsByTagName("a"),
    nav_div2 = ById("nav-menuitems__div"),
    log = ById("log"),
    article = ById("article"),
    down = ById("down__menuitem"),
    down_menuitem = ById("down__menuitem").getElementsByTagName("div"),
    down_menuitem_li = down_menuitem[0].getElementsByTagName("a"),
    screen_3_ico = ById("screen-3__content__ico");
//改变导航栏DIV先后顺序
interchangerDIV();
function interchangerDIV(){
    nav_div.removeChild(nav_div1);
    header_log.removeChild(log);
    nav_div.appendChild(nav_div1);
    nav_div.appendChild(log);
}
DisappearS3();
function DisappearS3(){
    addCls(screen_3_ico,"screen-3ico__disappear");
}
//阻止导航栏部分A标签默认行为
nav_div1_li[0].onclick = function(event){
    event.preventDefault();
   };
   nav_div1_li[3].onclick = function(event){
    event.preventDefault();
   };
   nav_div1_li[4].onclick = function(event){
    event.preventDefault();
   };
var handler1 = function(event){
    down.style.display = "none";
    down_menuitem[2].style.display = "none";
    down.style.display = "none";
    down_menuitem[1].style.display = "none";
    delCls(nav_div1_li[4],"font-color");
    switch(event.type){
        case "mouseover":
        down.style.display = "block";
        down_menuitem[0].style.display = "block";
        addCls(nav_div1,"nav-menuitem__ul__animatepc");
        addCls(nav_div1_li[0],"font-color");
        addCls(article,"article_topimg_jump");
        break;   
        case "mouseout":
        down.style.display = "none";
        down_menuitem[0].style.display = "none";
        break; 
        case "mouseleave":
        down.style.display = "none";
        down_menuitem[0].style.display = "none";
        delCls(nav_div1,"nav-menuitem__ul__animatepc");
        delCls(nav_div1_li[0],"font-color");
        delCls(article,"article_topimg_jump");
        break;
    };
};
var handler2 = function(event){
    down.style.display = "none";
    down_menuitem[0].style.display = "none";
    down.style.display = "none";
    down_menuitem[2].style.display = "none";
    delCls(nav_div1,"nav-menuitem__ul__animatepc");
    delCls(nav_div1_li[0],"font-color");
    delCls(nav_div1_li[4],"font-color");
    switch(event.type){
        case "mouseover":
        down.style.display = "block";
        down_menuitem[1].style.display = "block";
        addCls(nav_div1,"nav-menuitem__ul__animatepc");
        addCls(nav_div1_li[3],"font-color");
        addCls(article,"article_topimg_jump");
        break;   
        case "mouseout":
        down.style.display = "none";
        down_menuitem[1].style.display = "none";
        break; 
        case "mouseleave":
        down.style.display = "none";
        down_menuitem[1].style.display = "none";
        delCls(nav_div1,"nav-menuitem__ul__animatepc");
        delCls(nav_div1_li[3],"font-color");
        delCls(article,"article_topimg_jump");
        break;
    };
};

var handler3 = function(event){
    down.style.display = "none";
    down_menuitem[0].style.display = "none";
    down.style.display = "none";
    down_menuitem[1].style.display = "none";
    delCls(nav_div1,"nav-menuitem__ul__animatepc");
    delCls(nav_div1_li[3],"font-color");
    switch(event.type){
        case "mouseover":
        down.style.display = "block";
        down_menuitem[2].style.display = "block";
        addCls(nav_div1,"nav-menuitem__ul__animatepc");
        addCls(nav_div1_li[4],"font-color");
        addCls(article,"article_topimg_jump");
        break;   
        case "mouseout":
        down.style.display = "none";
        down_menuitem[2].style.display = "none";
        break; 
        case "mouseleave":
        down.style.display = "none";
        down_menuitem[2].style.display = "none";
        delCls(nav_div1,"nav-menuitem__ul__animatepc");
        delCls(nav_div1_li[4],"font-color");
        delCls(article,"article_topimg_jump");
        break;
    };
};
nav_div1_li[0].onmouseover = handler1;
nav_div1_li[3].onmouseover = handler2;
nav_div1_li[4].onmouseover = handler3;
down_menuitem[0].onmouseleave = handler1;
down_menuitem[1].onmouseleave = handler2;
down_menuitem[2].onmouseleave = handler3;
nav_div1_li[1].onmouseover = function(){
    for(var j = 0;j < 3;j++){
    delCls(nav_div1,"nav-menuitem__ul__animatepc");
    delCls(nav_div1_li[0],"font-color");
    delCls(nav_div1_li[3],"font-color");
    delCls(nav_div1_li[4],"font-color");
    delCls(article,"article_topimg_jump");
    down.style.display = "none";
    down_menuitem[j].style.display = "none";
    }
} 
nav_div1_li[2].onmouseover = function(){
    delCls(nav_div1,"nav-menuitem__ul__animatepc");
    delCls(nav_div1_li[0],"font-color");
    delCls(nav_div1_li[3],"font-color");
    delCls(nav_div1_li[4],"font-color");
    delCls(article,"article_topimg_jump");
    for(var j = 0;j < 3;j++){
    down.style.display = "none";
    down_menuitem[j].style.display = "none";
    }
} 
nav_div2.onmouseover = function(){
    delCls(nav_div1,"nav-menuitem__ul__animatepc");
    delCls(nav_div1_li[0],"font-color");
    delCls(nav_div1_li[3],"font-color");
    delCls(nav_div1_li[4],"font-color");
    delCls(article,"article_topimg_jump");
    for(var j = 0;j < 3;j++){
        down.style.display = "none";
        down_menuitem[j].style.display = "none";
        }
       
}
//自动轮播效果
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
onclickchangbackground();
screen__photo.onmouseout();
//第二单元鼠标进入自动放大动态效果
var screen2_new_main = ById("screen-2__new-main").getElementsByTagName("li"),
    screen2_new = ById("screen-2__new-main");



function screen2_animate1(){
       screen2_new_main[0].onmouseover = function(){
           addCls(screen2_new_main[0],"screen-2__new-main__item__animatebigpc");
           addCls(screen2_new_main[1],"screen-2__new-main__item__animatesmallpc");
           addCls(screen2_new_main[2],"screen-2__new-main__item__animatesmallpc");
       }
       screen2_new_main[0].onmouseleave = function(){
        delCls(screen2_new_main[0],"screen-2__new-main__item__animatebigpc");
        delCls(screen2_new_main[1],"screen-2__new-main__item__animatesmallpc");
        delCls(screen2_new_main[2],"screen-2__new-main__item__animatesmallpc");
    }
}
function screen2_animate2(){
    screen2_new_main[1].onmouseover = function(){
        addCls(screen2_new_main[1],"screen-2__new-main__item__animatebigpc");
        addCls(screen2_new_main[0],"screen-2__new-main__item__animatesmallpc");
        addCls(screen2_new_main[2],"screen-2__new-main__item__animatesmallpc");
    }
    screen2_new_main[1].onmouseleave = function(){
     delCls(screen2_new_main[1],"screen-2__new-main__item__animatebigpc");
     delCls(screen2_new_main[0],"screen-2__new-main__item__animatesmallpc");
     delCls(screen2_new_main[2],"screen-2__new-main__item__animatesmallpc");
 }
}
function screen2_animate3(){
    screen2_new_main[2].onmouseover = function(){
        addCls(screen2_new_main[2],"screen-2__new-main__item__animatebigpc");
        addCls(screen2_new_main[0],"screen-2__new-main__item__animatesmallpc");
        addCls(screen2_new_main[1],"screen-2__new-main__item__animatesmallpc");
    }
    screen2_new_main[2].onmouseleave = function(){
     delCls(screen2_new_main[2],"screen-2__new-main__item__animatebigpc");
     delCls(screen2_new_main[0],"screen-2__new-main__item__animatesmallpc");
     delCls(screen2_new_main[1],"screen-2__new-main__item__animatesmallpc");
 }
}
screen2_animate1();
screen2_animate2();
screen2_animate3();
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
