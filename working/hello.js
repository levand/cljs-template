goog.provide('libertine.hello');
goog.require('cljs.core');
goog.require('goog.dom');
libertine.hello.init = (function init(){
alert.call(null,"Hello!");
libertine.hello.paper = (new Raphael(10,50,320,200));
libertine.hello.circle = libertine.hello.paper.circle(50,40,10);
libertine.hello.circle.attr("fill","#f00");
return libertine.hello.circle.attr("stroke","#00f");
});
