(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),l=n.n(c),r=(n(8),n(9),function(){return o.a.createElement("form",{className:"form"},o.a.createElement("input",{autofocus:!0,placeholder:"Co jest do zrobienia?",className:"form__input"}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),s=(n(10),function(e){var t=e.tasks,n=e.hideAllTasksDone;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement("div",{className:"list ".concat(e.done&&n?"list--hidden":"")},o.a.createElement("button",{className:"buttonDone"},e.done?"\u2714":""),o.a.createElement("span",{className:"div__item ".concat(e.done?"div__item--done":"")},e.content),o.a.createElement("button",{className:"buttonRemove"},"\u2716"))})))}),i=(n(11),function(e){var t=e.tasks,n=e.hideAllTasksDone;return t.length>0&&o.a.createElement("span",{className:"section__flex--end"},o.a.createElement("button",{className:"buttonsShowAfterClick",disabled:t.every((function(e){return e.done}))},"Uko\u0144cz wszystkie "),o.a.createElement("button",{className:"buttonsShowAfterClick"},n?"Poka\u017c wszystkie":"Ukryj uko\u0144czone"," "))}),u=(n(12),function(e){var t=e.title,n=e.body,a=e.extraContent;return o.a.createElement("section",{className:"section "},o.a.createElement("h2",{className:"section__headline section__flex"},t,a),n)}),m=(n(13),function(e){var t=e.title;return o.a.createElement("h1",{className:"Headline"},t)}),d=function(e){var t=e.children;return o.a.createElement("body",null,t)},f=[{id:1,content:"fdfd",done:!0},{id:2,content:"fdwe",done:!0}];var E=function(){return o.a.createElement(d,null,o.a.createElement(m,{title:"Lista Zada\u0144"}),o.a.createElement(u,{title:"Dodaj nowe zadanie",body:o.a.createElement(r,null)}),o.a.createElement(u,{title:"Lista zada\u0144",body:o.a.createElement(s,{tasks:f,hideAllTasksDone:!1}),extraContent:o.a.createElement(i,{tasks:f,hideAllTasksDone:!1})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.09dafbad.chunk.js.map