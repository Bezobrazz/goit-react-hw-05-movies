"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{6842:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var o=r(2791),a=r(7689),n=r(3366),i=r(7462),l=r(3733),c=r(4419),s=r(6934),p=r(1402),v=r(4036),d=r(5527),u=r(5878),h=r(1217);function g(t){return(0,h.ZP)("MuiAppBar",t)}(0,u.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var f=r(184),m=["className","color","enableColorOnDark","position"],x=function(t,e){return t?"".concat(null==t?void 0:t.replace(")",""),", ").concat(e,")"):e},b=(0,s.ZP)(d.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e["position".concat((0,v.Z)(r.position))],e["color".concat((0,v.Z)(r.color))]]}})((function(t){var e=t.theme,r=t.ownerState,o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,i.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,i.Z)({},"default"===r.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,i.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,i.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:x(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:x(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:x(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:x(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),Z=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiAppBar"}),o=r.className,a=r.color,s=void 0===a?"primary":a,d=r.enableColorOnDark,u=void 0!==d&&d,h=r.position,x=void 0===h?"fixed":h,Z=(0,n.Z)(r,m),w=(0,i.Z)({},r,{color:s,position:x,enableColorOnDark:u}),k=function(t){var e=t.color,r=t.position,o=t.classes,a={root:["root","color".concat((0,v.Z)(e)),"position".concat((0,v.Z)(r))]};return(0,c.Z)(a,g,o)}(w);return(0,f.jsx)(b,(0,i.Z)({square:!0,component:"header",ownerState:w,elevation:4,className:(0,l.Z)(k.root,o,"fixed"===x&&"mui-fixed"),ref:e},Z))})),w=r(4942);function k(t){return(0,h.ZP)("MuiToolbar",t)}(0,u.Z)("MuiToolbar",["root","gutters","regular","dense"]);var y=["className","component","disableGutters","variant"],B=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})((function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,w.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(t){var e=t.theme;return"regular"===t.ownerState.variant&&e.mixins.toolbar})),S=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiToolbar"}),o=r.className,a=r.component,s=void 0===a?"div":a,v=r.disableGutters,d=void 0!==v&&v,u=r.variant,h=void 0===u?"regular":u,g=(0,n.Z)(r,y),m=(0,i.Z)({},r,{component:s,disableGutters:d,variant:h}),x=function(t){var e=t.classes,r={root:["root",!t.disableGutters&&"gutters",t.variant]};return(0,c.Z)(r,k,e)}(m);return(0,f.jsx)(B,(0,i.Z)({as:s,className:(0,l.Z)(x.root,o),ref:e,ownerState:m},g))})),A=r(890),C=r(4402);function R(t){return(0,h.ZP)("MuiDivider",t)}(0,u.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var M=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],I=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.absolute&&e.absolute,e[r.variant],r.light&&e.light,"vertical"===r.orientation&&e.vertical,r.flexItem&&e.flexItem,r.children&&e.withChildren,r.children&&"vertical"===r.orientation&&e.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,C.Fq)(e.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.ownerState;return(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.ownerState;return(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),j=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var r=t.ownerState;return[e.wrapper,"vertical"===r.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,r=t.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),D=o.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiDivider"}),o=r.absolute,a=void 0!==o&&o,s=r.children,v=r.className,d=r.component,u=void 0===d?s?"div":"hr":d,h=r.flexItem,g=void 0!==h&&h,m=r.light,x=void 0!==m&&m,b=r.orientation,Z=void 0===b?"horizontal":b,w=r.role,k=void 0===w?"hr"!==u?"separator":void 0:w,y=r.textAlign,B=void 0===y?"center":y,S=r.variant,A=void 0===S?"fullWidth":S,C=(0,n.Z)(r,M),D=(0,i.Z)({},r,{absolute:a,component:u,flexItem:g,light:x,orientation:Z,role:k,textAlign:B,variant:A}),P=function(t){var e=t.absolute,r=t.children,o=t.classes,a=t.flexItem,n=t.light,i=t.orientation,l=t.textAlign,s={root:["root",e&&"absolute",t.variant,n&&"light","vertical"===i&&"vertical",a&&"flexItem",r&&"withChildren",r&&"vertical"===i&&"withChildrenVertical","right"===l&&"vertical"!==i&&"textAlignRight","left"===l&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,c.Z)(s,R,o)}(D);return(0,f.jsx)(I,(0,i.Z)({as:u,className:(0,l.Z)(P.root,v),role:k,ref:e,ownerState:D},C,{children:s?(0,f.jsx)(j,{className:P.wrapper,ownerState:D,children:s}):null}))}));D.muiSkipListHighlight=!0;var P,N=D,W=r(168),T=r(1087),L=(0,r(7924).ZP)(T.OL)(P||(P=(0,W.Z)(["\n  text-decoration: none;\n  color: inherit;\n  border-bottom: 2px solid transparent;\n  &:hover {\n    color: #4caf50;\n  }\n  &.active {\n    border-bottom: 2px solid #4caf50;\n  }\n"])));var q=function(){return(0,f.jsx)(Z,{position:"static",children:(0,f.jsxs)(S,{children:[(0,f.jsx)(L,{to:"/",style:{textDecoration:"none",color:"inherit"},children:(0,f.jsx)(A.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Home"})}),(0,f.jsx)(N,{orientation:"vertical",variant:"middle",sx:{mx:2}}),(0,f.jsx)(L,{to:"/movies",style:{textDecoration:"none",color:"inherit"},children:(0,f.jsx)(A.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Movies"})})]})})};var O=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("header",{children:(0,f.jsx)(q,{})}),(0,f.jsx)(S,{children:(0,f.jsx)(a.j3,{})})]})}},5527:function(t,e,r){r.d(e,{Z:function(){return x}});var o=r(3366),a=r(7462),n=r(2791),i=r(3733),l=r(4419),c=r(4402),s=r(6934),p=function(t){return((t<1?5.11916*Math.pow(t,2):4.5*Math.log(t+1)+2)/100).toFixed(2)},v=r(1402),d=r(5878),u=r(1217);function h(t){return(0,u.ZP)("MuiPaper",t)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(184),f=["className","component","elevation","square","variant"],m=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,e[r.variant],!r.square&&e.rounded,"elevation"===r.variant&&e["elevation".concat(r.elevation)]]}})((function(t){var e,r=t.theme,o=t.ownerState;return(0,a.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!o.square&&{borderRadius:r.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===o.variant&&(0,a.Z)({boxShadow:(r.vars||r).shadows[o.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",p(o.elevation)),", ").concat((0,c.Fq)("#fff",p(o.elevation)),")")},r.vars&&{backgroundImage:null==(e=r.vars.overlays)?void 0:e[o.elevation]}))})),x=n.forwardRef((function(t,e){var r=(0,v.Z)({props:t,name:"MuiPaper"}),n=r.className,c=r.component,s=void 0===c?"div":c,p=r.elevation,d=void 0===p?1:p,u=r.square,x=void 0!==u&&u,b=r.variant,Z=void 0===b?"elevation":b,w=(0,o.Z)(r,f),k=(0,a.Z)({},r,{component:s,elevation:d,square:x,variant:Z}),y=function(t){var e=t.square,r=t.elevation,o=t.variant,a=t.classes,n={root:["root",o,!e&&"rounded","elevation"===o&&"elevation".concat(r)]};return(0,l.Z)(n,h,a)}(k);return(0,g.jsx)(m,(0,a.Z)({as:s,ownerState:k,className:(0,i.Z)(y.root,n),ref:e},w))}))},890:function(t,e,r){r.d(e,{Z:function(){return Z}});var o=r(3366),a=r(7462),n=r(2791),i=r(3733),l=r(8519),c=r(4419),s=r(6934),p=r(1402),v=r(4036),d=r(5878),u=r(1217);function h(t){return(0,u.ZP)("MuiTypography",t)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(184),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],m=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(t,e){var r=t.ownerState;return[e.root,r.variant&&e[r.variant],"inherit"!==r.align&&e["align".concat((0,v.Z)(r.align))],r.noWrap&&e.noWrap,r.gutterBottom&&e.gutterBottom,r.paragraph&&e.paragraph]}})((function(t){var e=t.theme,r=t.ownerState;return(0,a.Z)({margin:0},"inherit"===r.variant&&{font:"inherit"},"inherit"!==r.variant&&e.typography[r.variant],"inherit"!==r.align&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Z=n.forwardRef((function(t,e){var r=(0,p.Z)({props:t,name:"MuiTypography"}),n=function(t){return b[t]||t}(r.color),s=(0,l.Z)((0,a.Z)({},r,{color:n})),d=s.align,u=void 0===d?"inherit":d,Z=s.className,w=s.component,k=s.gutterBottom,y=void 0!==k&&k,B=s.noWrap,S=void 0!==B&&B,A=s.paragraph,C=void 0!==A&&A,R=s.variant,M=void 0===R?"body1":R,I=s.variantMapping,j=void 0===I?x:I,D=(0,o.Z)(s,f),P=(0,a.Z)({},s,{align:u,color:n,className:Z,component:w,gutterBottom:y,noWrap:S,paragraph:C,variant:M,variantMapping:j}),N=w||(C?"p":j[M]||x[M])||"span",W=function(t){var e=t.align,r=t.gutterBottom,o=t.noWrap,a=t.paragraph,n=t.variant,i=t.classes,l={root:["root",n,"inherit"!==t.align&&"align".concat((0,v.Z)(e)),r&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,c.Z)(l,h,i)}(P);return(0,g.jsx)(m,(0,a.Z)({as:N,ref:e,ownerState:P,className:(0,i.Z)(W.root,Z)},D))}))}}]);
//# sourceMappingURL=842.63665641.chunk.js.map