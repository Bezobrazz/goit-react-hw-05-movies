"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[717],{8717:function(r,t,n){n.r(t),n.d(t,{default:function(){return ar}});var e=n(5861),a=n(9439),i=n(4687),o=n.n(i),s=n(2791),c=n(7689),l=n(4390),u=n(1614),p=n(168),d=n(3366),h=n(7462),v=n(3733),f=n(4419),m=n(2554),g=n(4036),x=n(1402),Z=n(6934),y=n(5878),w=n(1217);function b(r){return(0,w.ZP)("MuiCircularProgress",r)}(0,y.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var k,j,S,P,B,C,M,R,W,N,_,D,T,E=n(184),F=["className","color","disableShrink","size","style","thickness","value","variant"],I=44,L=(0,m.F4)(B||(B=k||(k=(0,p.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),z=(0,m.F4)(C||(C=j||(j=(0,p.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),O=(0,Z.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(r,t){var n=r.ownerState;return[t.root,t[n.variant],t["color".concat((0,g.Z)(n.color))]]}})((function(r){var t=r.ownerState,n=r.theme;return(0,h.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})}),(function(r){return"indeterminate"===r.ownerState.variant&&(0,m.iv)(M||(M=S||(S=(0,p.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),L)})),q=(0,Z.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(r,t){return t.svg}})({display:"block"}),A=(0,Z.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(r,t){var n=r.ownerState;return[t.circle,t["circle".concat((0,g.Z)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((function(r){var t=r.ownerState,n=r.theme;return(0,h.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(r){var t=r.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,m.iv)(R||(R=P||(P=(0,p.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),z)})),U=s.forwardRef((function(r,t){var n=(0,x.Z)({props:r,name:"MuiCircularProgress"}),e=n.className,a=n.color,i=void 0===a?"primary":a,o=n.disableShrink,s=void 0!==o&&o,c=n.size,l=void 0===c?40:c,u=n.style,p=n.thickness,m=void 0===p?3.6:p,Z=n.value,y=void 0===Z?0:Z,w=n.variant,k=void 0===w?"indeterminate":w,j=(0,d.Z)(n,F),S=(0,h.Z)({},n,{color:i,disableShrink:s,size:l,thickness:m,value:y,variant:k}),P=function(r){var t=r.classes,n=r.variant,e=r.color,a=r.disableShrink,i={root:["root",n,"color".concat((0,g.Z)(e))],svg:["svg"],circle:["circle","circle".concat((0,g.Z)(n)),a&&"circleDisableShrink"]};return(0,f.Z)(i,b,t)}(S),B={},C={},M={};if("determinate"===k){var R=2*Math.PI*((I-m)/2);B.strokeDasharray=R.toFixed(3),M["aria-valuenow"]=Math.round(y),B.strokeDashoffset="".concat(((100-y)/100*R).toFixed(3),"px"),C.transform="rotate(-90deg)"}return(0,E.jsx)(O,(0,h.Z)({className:(0,v.Z)(P.root,e),style:(0,h.Z)({width:l,height:l},C,u),ownerState:S,ref:t,role:"progressbar"},M,j,{children:(0,E.jsx)(q,{className:P.svg,ownerState:S,viewBox:"".concat(22," ").concat(22," ").concat(I," ").concat(I),children:(0,E.jsx)(A,{className:P.circle,style:B,ownerState:S,cx:I,cy:I,r:(I-m)/2,fill:"none",strokeWidth:m})})}))})),H=n(4294),J=n(5527),G=n(890),K=n(4852),Q=n(697),V=n(493),X=n(7924),Y=X.ZP.div(W||(W=(0,p.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 15px;\n"]))),$=X.ZP.div(N||(N=(0,p.Z)(["\n  max-width: 600px;\n"]))),rr=X.ZP.div(_||(_=(0,p.Z)(["\n  display: flex;\n  margin-top: 10px;\n  align-items: center;\n"]))),tr=(0,X.ZP)(V.Z)(D||(D=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n"]))),nr=X.ZP.div(T||(T=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),er=n(1087);var ar=function(){var r,t=(0,c.UO)().movieId,n=(0,s.useState)(null),i=(0,a.Z)(n,2),p=i[0],d=i[1],h=(0,c.s0)(),v=(0,c.TH)(),f=(0,s.useRef)((null===(r=v.state)||void 0===r?void 0:r.from)||"/");return(0,s.useEffect)((function(){var r=function(){var r=(0,e.Z)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,l.EW)(t);case 3:n=r.sent,d(n),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),p?(0,E.jsxs)(u.Z,{children:[(0,E.jsx)(H.Z,{onClick:function(){h(f.current)},sx:{marginTop:2},color:"success",variant:"contained",children:"Go Back"}),(0,E.jsx)(J.Z,{elevation:3,sx:{padding:2,marginTop:2,marginBottom:2},children:(0,E.jsxs)(Y,{children:[(0,E.jsx)("img",{src:p.poster_path?"https://image.tmdb.org/t/p/w500/".concat(p.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,E.jsxs)($,{children:[(0,E.jsxs)(nr,{children:[(0,E.jsx)(G.Z,{sx:{margin:"0"},variant:"h4",gutterBottom:!0,children:p.title}),p.vote_average&&(0,E.jsxs)(G.Z,{sx:{display:"flex",gap:"5px",alignItems:"center",padding:"5px",backgroundColor:"gold",borderRadius:"3px"},variant:"subtitle1",fontWeight:"bold",children:["Rating:",(0,E.jsx)(G.Z,{variant:"body1",children:p.vote_average.toFixed(1)})]})]}),(0,E.jsx)(G.Z,{variant:"body1",paragraph:!0,children:p.overview}),p.genres&&(0,E.jsx)(rr,{children:(0,E.jsx)(tr,{children:p.genres.map((function(r){return(0,E.jsx)(K.ZP,{sx:{padding:"5px",backgroundColor:"teal",borderRadius:"3px",fontSize:"10px",color:"white",justifyContent:"center"},children:r.name},r.id)}))})})]})]})}),(0,E.jsxs)("div",{children:[(0,E.jsx)(G.Z,{variant:"h4",children:"Additional information"}),(0,E.jsxs)(Q.Z,{sx:{display:"flex",gap:2,marginTop:2,marginBottom:2},children:[(0,E.jsx)(H.Z,{component:er.OL,to:"cast",variant:"contained",color:"primary",children:"Show Cast"}),(0,E.jsx)(H.Z,{component:er.OL,to:"reviews",variant:"contained",color:"primary",children:"Show Reviews"})]}),(0,E.jsx)(c.j3,{})]})]}):(0,E.jsx)(u.Z,{children:(0,E.jsx)(U,{})})}},4390:function(r,t,n){n.d(t,{EW:function(){return c},LI:function(){return p},eH:function(){return l},oJ:function(){return u},wr:function(){return s}});var e=n(5861),a=n(4687),i=n.n(a),o=n(1591).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"9fbcd18861474c40784b1f7f4f21e949"}}),s=function(){var r=(0,e.Z)(i().mark((function r(){var t,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/trending/movie/day");case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),c=function(){var r=(0,e.Z)(i().mark((function r(t){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(i().mark((function r(t){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),u=function(){var r=(0,e.Z)(i().mark((function r(t){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(i().mark((function r(t){var n,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/search/movie",{params:{query:t}});case 3:return n=r.sent,e=n.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error fetching movies by query:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},890:function(r,t,n){n.d(t,{Z:function(){return y}});var e=n(3366),a=n(7462),i=n(2791),o=n(3733),s=n(8519),c=n(4419),l=n(6934),u=n(1402),p=n(4036),d=n(5878),h=n(1217);function v(r){return(0,h.ZP)("MuiTypography",r)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(184),m=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,t){var n=r.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,p.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(r){var t=r.theme,n=r.ownerState;return(0,a.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=i.forwardRef((function(r,t){var n=(0,u.Z)({props:r,name:"MuiTypography"}),i=function(r){return Z[r]||r}(n.color),l=(0,s.Z)((0,a.Z)({},n,{color:i})),d=l.align,h=void 0===d?"inherit":d,y=l.className,w=l.component,b=l.gutterBottom,k=void 0!==b&&b,j=l.noWrap,S=void 0!==j&&j,P=l.paragraph,B=void 0!==P&&P,C=l.variant,M=void 0===C?"body1":C,R=l.variantMapping,W=void 0===R?x:R,N=(0,e.Z)(l,m),_=(0,a.Z)({},l,{align:h,color:i,className:y,component:w,gutterBottom:k,noWrap:S,paragraph:B,variant:M,variantMapping:W}),D=w||(B?"p":W[M]||x[M])||"span",T=function(r){var t=r.align,n=r.gutterBottom,e=r.noWrap,a=r.paragraph,i=r.variant,o=r.classes,s={root:["root",i,"inherit"!==r.align&&"align".concat((0,p.Z)(t)),n&&"gutterBottom",e&&"noWrap",a&&"paragraph"]};return(0,c.Z)(s,v,o)}(_);return(0,f.jsx)(g,(0,a.Z)({as:D,ref:t,ownerState:_,className:(0,o.Z)(T.root,y)},N))}))}}]);
//# sourceMappingURL=717.89c80bec.chunk.js.map