goog.provide('template.hello');
goog.require('cljs.core');
goog.require('goog.dom');
template.hello.init = (function init(){
alert.call(null,"Hello!");
template.hello.paper = (new Raphael(10,50,320,200));
template.hello.circle = template.hello.paper.circle(50,40,10);
template.hello.circle.attr("fill","#f00");
return template.hello.circle.attr("stroke","#00f");
});
