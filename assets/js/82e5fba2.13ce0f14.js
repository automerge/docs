"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5482],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=o,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3354:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return b}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],s={sidebar_position:10},i="Observable",l={unversionedId:"types/observable",id:"types/observable",isDocsHomePage:!1,title:"Observable",description:"An observable is an object that can be initialized to watch the state of a",source:"@site/docs/types/observable.md",sourceDirName:"types",slug:"/types/observable",permalink:"/docs/docs/types/observable",editUrl:"https://github.com/automerge/docs/tree/main/docs/docs/types/observable.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Text",permalink:"/docs/docs/types/text"},next:{title:"Table",permalink:"/docs/docs/types/table"}},p=[],u={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"observable"},"Observable"),(0,a.kt)("p",null,"An observable is an object that can be initialized to watch the state of a\ndocument. When a document changes, the callback will fire with the diff and\nchanges that were applied to that document."),(0,a.kt)("p",null,"When you want to observe the changes in a document, pass an observable instrance to ",(0,a.kt)("inlineCode",{parentName:"p"},"Automerge.init")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let observable = new Automerge.Observable()\nlet doc = Automerge.init({ observable })\nobservable.observe(doc, (diff, before, after, local, changes) => {\n  // diff == {\n  //  objectId: '_root', type: 'map', props: {bird: {[`1@${actor}`]: {type: 'value', value: 'Goldfinch'}}}\n  // }\n  // after.bird == 'Goldfinch'\n  // local == true\n  // changes.length == 1\n})\n\ndoc = Automerge.change(doc, doc => doc.bird = 'Goldfinch')\n")),(0,a.kt)("p",null,"You can also apply observables to properties on the Automerge document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"observable.observe(doc.bird, (diff, before, after, local, changes) => {\n  // before == 'Goldfinch'\n  // after == 'Sparrow'\n})\n\ndoc = Automerge.change(doc, doc => doc.bird = 'Sparrow')\n")),(0,a.kt)("p",null,"As well as nested objects inside lists, text, or rows inside tables. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/automerge/automerge/blob/main/test/observable_test.js"},"tests")," for more examples."))}b.isMDXComponent=!0}}]);