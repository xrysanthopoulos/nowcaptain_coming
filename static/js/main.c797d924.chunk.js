(this.webpackJsonpnowcaptain_coming=this.webpackJsonpnowcaptain_coming||[]).push([[0],{25:function(e,t,c){},43:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),s=c.n(n),A=c(13),o=c.n(A),i=(c(25),c(18)),m=c(14),r=c.n(m),h=c.p+"static/media/logo_hat_blue.a45f23ff.svg",l=c.p+"static/media/logo_text_blue.1ea5d04e.svg",j=c.p+"static/media/hero_image.868dca62.jpg",g=c.p+"static/media/favicon_blue.98f43a57.ico",w=c.p+"static/media/favicon_white.7d575ce1.ico",b=(c(43),c.p+"static/media/hero_video.83ce1696.mp4"),u=c(19),d=c(15);var O=function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{class:"alert alert-primary",role:"alert",children:["Got this! You are more",Object(a.jsx)("br",{}),"closer to explore more."]})})},c=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{class:"alert alert-warning",role:"alert",children:"Oops.. Something went wrong with the sending form."})})},s=Object(n.useState)({submitting:null,status:null}),A=Object(i.a)(s,2),o=A[0],m=A[1],O=function(e,t){m({submitting:null,status:e,submited:!0}),e&&t.reset()};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)("meta",{charSet:"utf-8"}),Object(a.jsx)("title",{children:"NowCaptain - Explore the coastline!!"}),e?Object(a.jsx)("link",{rel:"icon",href:w,id:"light-scheme-icon"}):Object(a.jsx)("link",{rel:"icon",href:g,id:"dark-scheme-icon"})]}),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,poster:j,children:Object(a.jsx)("source",{src:b,type:"video/mp4"})}),Object(a.jsxs)("div",{className:"App-content",children:[Object(a.jsx)("img",{src:h,className:"logo-hat",alt:"logo"}),Object(a.jsx)("img",{src:l,className:"logo-text",alt:"logo"}),Object(a.jsx)("p",{className:"p-soon",children:"Ahoy.. Coming Soon"}),Object(a.jsx)("p",{className:"paragraph",children:"The App that gives you access to explore more coastline."}),Object(a.jsxs)("div",{className:"newsletter-form",children:[Object(a.jsx)("h5",{className:"newsletter d-block",children:"Subscribe to our newsletter"}),o.submited?Object(a.jsxs)("div",{className:"alert",children:[!0===o.status?Object(a.jsx)(t,{}):null,!1===o.status?Object(a.jsx)(c,{}):null]}):Object(a.jsxs)("form",{className:"form-inline contact-form",onSubmit:function(e){e.preventDefault();var t=e.target;m({submitting:!0,submited:!0}),r()({method:"post",url:"https://getform.io/f/1db7a86a-0f42-4a2a-9570-fe7e7c12bc1b",data:new FormData(t)}).then((function(e){O(!0,t)})).catch((function(e){O(!1,t)}))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",name:"email",className:"form-control","aria-describedby":"emailHelp",id:"exampleInputName",placeholder:"Your email",required:"required"})}),Object(a.jsx)("button",{type:"submit",className:"btn",disabled:o.submitting,children:Object(a.jsx)(u.a,{size:20})})]})]}),Object(a.jsxs)("div",{className:"social",children:[Object(a.jsxs)("p",{className:"social-text",children:["Follow ",Object(a.jsx)("span",{className:"blue-text",children:"nowCaptain"})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"https://www.facebook.com/nowCaptain",target:"_blank",children:Object(a.jsx)("img",{className:"social-icon float-right",src:"data:image/png;base64,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"})})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("a",{href:"https://www.instagram.com/nowcaptain/",target:"_blank",children:Object(a.jsx)("img",{className:"social-icon float-left",src:"data:image/png;base64,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"})})})]})]})]})]})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,A=t.getTTFB;c(e),a(e),n(e),s(e),A(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}},[[47,1,2]]]);
//# sourceMappingURL=main.c797d924.chunk.js.map