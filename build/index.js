!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("scrivito"));else if("function"==typeof define&&define.amd)define(["react","scrivito"],t);else{var r="object"==typeof exports?t(require("react"),require("scrivito")):t(e.react,e.scrivito);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(function(e,t){return(()=>{"use strict";var r={156:t=>{t.exports=e},610:e=>{e.exports=t}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{i.r(n),i.d(n,{default:()=>o});var e=i(156),t=i(610),r=t.provideWidgetClass("FaqWidget",{attributes:{question:"string",answer:"html"}});t.provideEditingConfig("FaqWidget",{title:"Test-Table",description:"A frequently asked question.",attributes:{question:{title:"Question",description:"State the frequently asked question"},answer:{title:"Answer",description:"Provide an eloquent answer"}},properties:["question","answer"],initialContent:{question:"What is the question?",answer:"And this is the answer."}}),t.provideComponent("FaqWidget",(function(r){var o=r.widget;return e.createElement("div",{className:"mt-2 mr-0 pt-0 pr-0 pb-3 pl-2 border-bottom"},e.createElement(t.ContentTag,{tag:"h3",content:o,attribute:"question"}),e.createElement(t.ContentTag,{content:o,attribute:"answer"}))}));const o=r})(),n})()}));