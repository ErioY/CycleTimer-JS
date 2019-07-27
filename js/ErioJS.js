/*
 * @Author: ErioY
 * @Email: 1973545559@qq.com
 * @Date: 2019-07-27 17:48:05
 * @Last Modified by:   ErioY
 * @Last Modified time: 2019-07-27 17:48:05
 * @Description: Description
 */


function $Id(id){
    return document.getElementById(id);
}

function $TagName(tag){
    return document.getElementsByTagName(tag);
}

//获取元素样式
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}

//计时器动画封装
function doMove(obj,step,end,attr){
    step = parseFloat(getStyle(obj,attr))>end ? -step : step;
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        var next = parseFloat(getStyle(obj,attr))+step;
        next = step>0 ? Math.min(next,end) : Math.max(next,end);
        obj.style[attr] = attr=="opacity" ? next : next+"px";
        if(parseFloat(getStyle(obj,attr))==end){
            clearInterval(obj.timer);
        }
    },30);
}