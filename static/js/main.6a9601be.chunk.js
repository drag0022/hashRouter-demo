(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(16),i=n.n(a),j=(n(24),n(25),n(26),n(7)),r=n(0);function l(e){return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)(j.b,{activeClassName:"active",to:"/",exact:!0,children:"Home"}),Object(r.jsx)(j.b,{activeClassName:"active",to:"/people",children:"People"}),Object(r.jsx)(j.b,{activeClassName:"active",to:"/planets",children:"Planets"}),Object(r.jsx)(j.b,{activeClassName:"active",to:"/iojnklm",children:"Nowhere"})]})}n(33);function b(e){return Object(r.jsx)("div",{className:"Home",children:Object(r.jsx)("p",{children:"This is home page"})})}n(34);function o(e){return Object(r.jsx)("div",{className:"People",children:Object(r.jsx)("p",{children:"This is People Page"})})}var p=n(14),h=n.n(p),d=n(19),u=n(10),O=(n(36),n(2));n(37);function x(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],a=n[1],i=Object(O.g)().id;return Object(c.useEffect)((function(){a(e.findPlanet(i)),console.log(s)}),[i]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:i}),Object(r.jsx)("p",{children:"this is the planet details page"}),Object(r.jsx)("p",{children:s.name})]})}function f(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],a=n[1];function i(){return(i=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi.dev/api/planets",e.next=3,fetch("https://swapi.dev/api/planets");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"planets",children:[Object(r.jsxs)("div",{className:"planet-list",children:[0===s.length&&Object(r.jsx)("p",{children:"There are no planets yet"}),s.map((function(e,t){return Object(r.jsxs)("p",{children:[Object(r.jsx)(j.b,{to:"/planets/".concat(t+1),children:e.name}),Object(r.jsx)("span",{children:e.terrain})]},e.name)}))]}),Object(r.jsx)("div",{className:"planet-details",children:Object(r.jsx)(O.b,{path:"/planets/:id",children:Object(r.jsx)(x,{findPlanet:function(e){return console.log("found plane"),s.find((function(t,n){return e==n+1}))}})})})]})}n(38);function m(e){return Object(r.jsx)("div",{className:"Not",children:Object(r.jsx)("p",{children:"This is 404 page"})})}function v(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)(l,{})}),Object(r.jsx)("main",{children:Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{path:"/planets",children:Object(r.jsx)(f,{})}),Object(r.jsx)(O.b,{path:"/people",children:Object(r.jsx)(o,{})}),Object(r.jsx)(O.b,{path:"/404",children:Object(r.jsx)(m,{})}),Object(r.jsx)(O.b,{path:"/",exact:!0,children:Object(r.jsx)(b,{})}),Object(r.jsx)(O.a,{to:"/404"})]})})]})}i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(j.a,{hashType:"hashbang",children:Object(r.jsx)(v,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6a9601be.chunk.js.map