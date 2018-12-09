(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(75)},44:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),i=a(13),r=a.n(i),c=a(77),o=a(6),s=a(7),m=a(9),u=a(8),h=a(10),d=a(11),p=a(76),f=a(12),b=a(17),E=a(79),v=(a(44),a(23)),w=a.n(v),g="laurentchean@gmail.com",y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClipboard",value:function(){new w.a(".js-clipboard").on("success",function(e){var t=e.trigger;t.classList.add("is-copied"),setTimeout(function(){return t.classList.remove("is-copied")},1500),e.clearSelection()})}},{key:"componentDidMount",value:function(){this.handleClipboard()}},{key:"render",value:function(){return l.a.createElement("article",{className:"home"},l.a.createElement("h2",null,"Hey,"),l.a.createElement("p",null,"I am a french front end developer working at ",l.a.createElement("a",{href:"https://www.emakina.nl/",className:"italic"},"Emakina Amsterdam"),"."),l.a.createElement("p",null,"Since 2012, I've been working for digital agencies such as ",l.a.createElement("a",{href:"http://marcelww.com/",className:"italic"},"Marcel")," or ",l.a.createElement("a",{href:"https://www.mrm-mccann.fr/",className:"italic"},"Mrm McCann")," and for brands like ",l.a.createElement("a",{href:"https://www.thekooples.com/",className:"italic"},"The Kooples")," and more recently ",l.a.createElement("a",{href:"https://www.mobhotel.com/",className:"italic"},"MOB Hotel"),"."),l.a.createElement("p",null,"As a user interface developer, I try to deliver a 'clean' code and be creative without forgetting accessibility."),l.a.createElement("p",null,"You can ",l.a.createElement("a",{href:"mailto:"+g,className:"italic"},"Contact me with a mail app"),", ",l.a.createElement("button",{type:"button",className:"btn-clipboard js-clipboard italic","data-clipboard-text":g},"copy my email address")," or via my ",l.a.createElement("a",{href:"https://www.linkedin.com/in/laurent-chean-b045465b/",className:"italic"},"Linkedin profile"),"."))}}]),t}(l.a.Component),O=a(24),j=(a(58),{height:"720",width:"1280",playerVars:{autoplay:1}}),A=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("article",{className:"more"},l.a.createElement("h2",null,"More"),l.a.createElement("section",{class:"more-section"},l.a.createElement("ul",null,l.a.createElement("li",null,"Advanced knowledge in HTML, CSS, and JS"),l.a.createElement("li",null,"Good understanding of Wordpress, Magento 1, Salesforce Commerce Cloud (Demandware)"),l.a.createElement("li",null,"This website uses the ",l.a.createElement("a",{href:"https://fonts.google.com/specimen/EB+Garamond"},"EB Garamond Google font")," and was built with ",l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App")," and ",l.a.createElement("a",{href:"https://pages.github.com/"},"Github Pages")))),l.a.createElement("section",{class:"more-section youtube-video"},l.a.createElement("p",null,"Life is too serious so let's listen to some good french (summer) music :"),l.a.createElement("figure",{className:"youtube"},l.a.createElement(O.a,{videoId:"p4JO2w5uGfE",opts:j,onReady:this._onReady}))))}}]),t}(l.a.Component),C=function(e){f.b.set(e,{clearProps:"position, opacity"})},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleGlobalClass=a.props.handleGlobalClass.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history;this.unlisten=t.listen(function(t){e.handleGlobalClass()})}},{key:"render",value:function(){var e=this.props.location;return l.a.createElement("section",{className:"content"},l.a.createElement(b.TransitionGroup,null,l.a.createElement(b.Transition,{key:e.pathname,timeout:0,mountOnEnter:!0,unmountOnExit:!0,onEnter:function(e){f.c.killTweensOf(e),f.b.set(e,{x:120,autoAlpha:0,ease:f.a.easeIn}),f.b.to(e,1,{autoAlpha:1,x:0,onComplete:C,onCompleteParams:[e]})},onExit:function(e){f.c.killTweensOf(e),f.b.to(e,0,{opacity:0,x:-120})}},l.a.createElement(E.a,{location:e},l.a.createElement(p.a,{exact:!0,path:"/",component:y}),l.a.createElement(p.a,{path:"/more",component:A})))))}}]),t}(l.a.Component);a(61);function N(e){var t=e.children;return l.a.createElement("div",{className:"main"},t)}a(63),a(64);var G=function(e){var t=e.src,a=void 0===t?"":t,n=e.alt,i=void 0===n?"":n,r=e.title,c=void 0===r?"":r,o=e.width,s=void 0===o?"":o,m=e.height,u=void 0===m?"":m;return l.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":a,className:"lazyload",alt:i,title:c,width:s,height:u})};a(66);function I(e){var t=e.entries;return l.a.createElement("aside",{className:"gallery"},t.map(function(e){var t=e.id,a=e.src,n=e.width,i=e.height,r=e.title,c=e.alt;return l.a.createElement("figure",{key:t,className:"gallery-figure"},l.a.createElement(G,{src:a,width:n,height:i,title:r,alt:c}))}))}var S=[{id:1,src:"assets/hedi-slimane-01.jpg",alt:"Hedi Slimane Diary Photo",title:"",width:"900",height:"601"},{id:2,src:"assets/hedi-slimane-02.jpg",alt:"Hedi Slimane Diary Photo",title:"",width:"900",height:"1349"},{id:3,src:"assets/hedi-slimane-03.jpg",alt:"Hedi Slimane Diary Photo",title:"",width:"900",height:"1353"},{id:4,src:"assets/hedi-slimane-04.jpg",alt:"Hedi Slimane Diary Photo",title:"",width:"900",height:"1349"}],M=(a(68),a(78));function x(){return l.a.createElement("nav",{className:"nav"},l.a.createElement(M.a,{to:"/more",activeClassName:"selected"},"More"),l.a.createElement("h1",{className:"name"},l.a.createElement(M.a,{exact:!0,to:"/",activeClassName:"selected"},"Laurent Chean")))}a(70),a(72);var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={isInverted:!1},a.handleGlobalClass=a.handleGlobalClass.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleGlobalClass",value:function(){this.setState(function(e){return{isInverted:!e.isInverted}})}},{key:"render",value:function(){var e=this,t=this.state.isInverted;return l.a.createElement("div",{className:t?"wrapper is-inverted":"wrapper"},l.a.createElement(N,null,l.a.createElement(p.a,{path:"/",render:function(t){return l.a.createElement(k,Object.assign({handleGlobalClass:e.handleGlobalClass},t))}}),l.a.createElement(x,null)),l.a.createElement(I,{entries:S}))}}]),t}(n.Component);r.a.render(l.a.createElement(c.a,null,l.a.createElement(T,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.2304b487.chunk.js.map