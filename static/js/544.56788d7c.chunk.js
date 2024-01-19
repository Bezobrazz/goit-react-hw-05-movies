"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{6368:function(r,t,n){var e=n(493),a=n(4852),o=n(1077),i=n(7689),u=n(184);t.Z=function(r){var t=r.movies,n=(0,i.TH)();return(0,u.jsx)(e.Z,{children:t.map((function(r){return(0,u.jsx)(a.ZP,{children:(0,u.jsx)(o.F,{state:{from:n},to:"/movies/".concat(r.id),children:r.title||r.name})},r.id)}))})}},9544:function(r,t,n){n.r(t);var e=n(5861),a=n(9439),o=n(4687),i=n.n(o),u=n(890),c=n(1077),p=n(6368),s=n(2791),h=n(4390),f=n(184);t.default=function(){var r=(0,s.useState)([]),t=(0,a.Z)(r,2),n=t[0],o=t[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,h.wr)();case 3:t=r.sent,console.log("API Response:",t),o(t.results),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)(c.P,{children:[(0,f.jsx)(u.Z,{variant:"h4",gutterBottom:!0,children:"Trending Movies"}),(0,f.jsx)(p.Z,{movies:n})]})}},1077:function(r,t,n){n.d(t,{F:function(){return p},P:function(){return s}});var e,a,o=n(168),i=n(1614),u=n(1087),c=n(7924),p=(0,c.ZP)(u.rU)(e||(e=(0,o.Z)(["\n  text-decoration: none;\n  color: #1976d2;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),s=(0,c.ZP)(i.Z)(a||(a=(0,o.Z)(["\n  margin-top: 20px;\n"])))},4390:function(r,t,n){n.d(t,{EW:function(){return c},LI:function(){return h},eH:function(){return p},oJ:function(){return s},wr:function(){return u}});var e=n(5861),a=n(4687),o=n.n(a),i=n(1591).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9fbcd18861474c40784b1f7f4f21e949"}}),u=function(){var r=(0,e.Z)(o().mark((function r(){var t,n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/movie/day");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),c=function(){var r=(0,e.Z)(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(o().mark((function r(t){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(o().mark((function r(t){var n,e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/search/movie",{params:{query:t}});case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error fetching movies by query:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},890:function(r,t,n){n.d(t,{Z:function(){return x}});var e=n(3366),a=n(7462),o=n(2791),i=n(3733),u=n(8519),c=n(4419),p=n(6934),s=n(1402),h=n(4036),f=n(5878),v=n(1217);function l(r){return(0,v.ZP)("MuiTypography",r)}(0,f.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(184),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],d=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,t){var n=r.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,h.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(r){var t=r.theme,n=r.ownerState;return(0,a.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=o.forwardRef((function(r,t){var n=(0,s.Z)({props:r,name:"MuiTypography"}),o=function(r){return Z[r]||r}(n.color),p=(0,u.Z)((0,a.Z)({},n,{color:o})),f=p.align,v=void 0===f?"inherit":f,x=p.className,w=p.component,b=p.gutterBottom,k=void 0!==b&&b,B=p.noWrap,W=void 0!==B&&B,P=p.paragraph,M=void 0!==P&&P,j=p.variant,R=void 0===j?"body1":j,S=p.variantMapping,T=void 0===S?y:S,_=(0,e.Z)(p,m),E=(0,a.Z)({},p,{align:v,color:o,className:x,component:w,gutterBottom:k,noWrap:W,paragraph:M,variant:R,variantMapping:T}),N=w||(M?"p":T[R]||y[R])||"span",C=function(r){var t=r.align,n=r.gutterBottom,e=r.noWrap,a=r.paragraph,o=r.variant,i=r.classes,u={root:["root",o,"inherit"!==r.align&&"align".concat((0,h.Z)(t)),n&&"gutterBottom",e&&"noWrap",a&&"paragraph"]};return(0,c.Z)(u,l,i)}(E);return(0,g.jsx)(d,(0,a.Z)({as:N,ref:t,ownerState:E,className:(0,i.Z)(C.root,x)},_))}))}}]);
//# sourceMappingURL=544.56788d7c.chunk.js.map