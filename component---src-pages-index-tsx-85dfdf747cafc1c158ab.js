(self.webpackChunkvariety_labs=self.webpackChunkvariety_labs||[]).push([[691],{9806:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var o=n(7294),r=n(5433),i=n(8364),a=n(1375),l=n(2214),c=n(3366),s=n(7462),u=n(2585),d=n(3259);function p(e,t,n){var o={};return Object.keys(e).forEach((function(r){o[r]=e[r].reduce((function(e,o){return o&&(e.push(t(o)),n&&n[o]&&e.push(n[o])),e}),[]).join(" ")})),o}var h=n(8824),f=n(2698).Z,v=n(4827),m={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o=m[t];return o?"".concat(n,"-").concat(o):"".concat(v.Z.generate(e),"-").concat(t)}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",o={};return t.forEach((function(t){o[t]=C(e,t,n)})),o}function b(e){return C("MuiTypography",e)}g("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var y=n(5893),x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,r.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat(f(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,s.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),E={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=o.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTypography"}),o=function(e){return S[e]||e}(n.color),r=(0,d.Z)((0,s.Z)({},n,{color:o})),i=r.align,a=void 0===i?"inherit":i,l=r.className,v=r.component,m=r.gutterBottom,C=void 0!==m&&m,g=r.noWrap,w=void 0!==g&&g,M=r.paragraph,L=void 0!==M&&M,R=r.variant,k=void 0===R?"body1":R,z=r.variantMapping,V=void 0===z?E:z,T=(0,c.Z)(r,x),H=(0,s.Z)({},r,{align:a,color:o,className:l,component:v,gutterBottom:C,noWrap:w,paragraph:L,variant:k,variantMapping:V}),I=v||(L?"p":V[k]||E[k])||"span",P=function(e){var t=e.align,n=e.gutterBottom,o=e.noWrap,r=e.paragraph,i=e.variant,a=e.classes;return p({root:["root",i,"inherit"!==e.align&&"align".concat(f(t)),n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]},b,a)}(H);return(0,y.jsx)(Z,(0,s.Z)({as:I,ref:t,ownerState:H,className:(0,u.Z)(P.root,l)},T))})),M=n(4942),L=n(1425),R=n(2915),k=n(885);function z(e,t){"function"==typeof e?e(t):e&&(e.current=t)}var V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.useMemo((function(){return t.every((function(e){return null==e}))?null:function(e){t.forEach((function(t){z(t,e)}))}}),t)},T="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;var H,I=function(e){var t=o.useRef(e);return T((function(){t.current=e})),o.useCallback((function(){return t.current.apply(void 0,arguments)}),[])},P=!0,B=!1,W={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function N(e){e.metaKey||e.altKey||e.ctrlKey||(P=!0)}function O(){P=!1}function F(){"hidden"===this.visibilityState&&B&&(P=!0)}function j(e){var t,n,o,r=e.target;try{return r.matches(":focus-visible")}catch(i){}return P||(n=(t=r).type,!("INPUT"!==(o=t.tagName)||!W[n]||t.readOnly)||"TEXTAREA"===o&&!t.readOnly||!!t.isContentEditable)}var D=function(){var e=o.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",N,!0),t.addEventListener("mousedown",O,!0),t.addEventListener("pointerdown",O,!0),t.addEventListener("touchstart",O,!0),t.addEventListener("visibilitychange",F,!0))}),[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!j(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(B=!0,window.clearTimeout(H),H=window.setTimeout((function(){B=!1}),100),t.current=!1,!0)},ref:e}},_=n(2982);function U(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var A=n(1721),q=o.createContext(null);function K(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function X(e,t,n){return null!=n[t]?n[t]:e.props[t]}function Y(e,t,n){var r=K(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o,r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var l={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var s=r[c][o];l[r[c][o]]=n(s)}l[c]=n(c)}for(o=0;o<i.length;o++)l[i[o]]=n(i[o]);return l}(t,r);return Object.keys(i).forEach((function(a){var l=i[a];if((0,o.isValidElement)(l)){var c=a in t,s=a in r,u=t[a],d=(0,o.isValidElement)(u)&&!u.props.in;!s||c&&!d?s||!c||d?s&&c&&(0,o.isValidElement)(u)&&(i[a]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:u.props.in,exit:X(l,"exit",e),enter:X(l,"enter",e)})):i[a]=(0,o.cloneElement)(l,{in:!1}):i[a]=(0,o.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:X(l,"exit",e),enter:X(l,"enter",e)})}})),i}var G=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},J=function(e){function t(t,n){var o,r=(o=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}(0,A.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,K(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:X(e,"appear",n),enter:X(e,"enter",n),exit:X(e,"exit",n)})}))):Y(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=K(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,s.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,c.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=G(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(q.Provider,{value:i},a):o.createElement(q.Provider,{value:i},o.createElement(t,r,a))},t}(o.Component);J.defaultProps={component:"div",childFactory:function(e){return e}};var Q=J,$=n(4382);var ee=function(e){var t=e.className,n=e.classes,r=e.pulsate,i=void 0!==r&&r,a=e.rippleX,l=e.rippleY,c=e.rippleSize,s=e.in,d=e.onExited,p=e.timeout,h=o.useState(!1),f=(0,k.Z)(h,2),v=f[0],m=f[1],C=(0,u.Z)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),g={width:c,height:c,top:-c/2+l,left:-c/2+a},b=(0,u.Z)(n.child,v&&n.childLeaving,i&&n.childPulsate);return s||v||m(!0),o.useEffect((function(){if(!s&&null!=d){var e=setTimeout(d,p);return function(){clearTimeout(e)}}}),[d,s,p]),(0,y.jsx)("span",{className:C,style:g,children:(0,y.jsx)("span",{className:b})})};var te,ne,oe,re,ie,ae,le,ce,se=g("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ue=["center","classes","className"],de=(0,$.keyframes)(ie||(ie=te||(te=U(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),pe=(0,$.keyframes)(ae||(ae=ne||(ne=U(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),he=(0,$.keyframes)(le||(le=oe||(oe=U(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),fe=(0,r.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ve=(0,r.ZP)(ee,{name:"MuiTouchRipple",slot:"Ripple"})(ce||(ce=re||(re=U(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),se.rippleVisible,de,550,(function(e){return e.theme.transitions.easing.easeInOut}),se.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),se.child,se.childLeaving,pe,550,(function(e){return e.theme.transitions.easing.easeInOut}),se.childPulsate,he,(function(e){return e.theme.transitions.easing.easeInOut})),me=o.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiTouchRipple"}),r=n.center,i=void 0!==r&&r,a=n.classes,l=void 0===a?{}:a,d=n.className,p=(0,c.Z)(n,ue),f=o.useState([]),v=(0,k.Z)(f,2),m=v[0],C=v[1],g=o.useRef(0),b=o.useRef(null);o.useEffect((function(){b.current&&(b.current(),b.current=null)}),[m]);var x=o.useRef(!1),Z=o.useRef(null),E=o.useRef(null),S=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(Z.current)}}),[]);var w=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,o=e.rippleY,r=e.rippleSize,i=e.cb;C((function(e){return[].concat((0,_.Z)(e),[(0,y.jsx)(ve,{classes:{ripple:(0,u.Z)(l.ripple,se.ripple),rippleVisible:(0,u.Z)(l.rippleVisible,se.rippleVisible),ripplePulsate:(0,u.Z)(l.ripplePulsate,se.ripplePulsate),child:(0,u.Z)(l.child,se.child),childLeaving:(0,u.Z)(l.childLeaving,se.childLeaving),childPulsate:(0,u.Z)(l.childPulsate,se.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:o,rippleSize:r},g.current)])})),g.current+=1,b.current=i}),[l]),M=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=t.pulsate,r=void 0!==o&&o,a=t.center,l=void 0===a?i||t.pulsate:a,c=t.fakeElement,s=void 0!==c&&c;if("mousedown"===(null==e?void 0:e.type)&&x.current)x.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);var u,d,p,h=s?null:S.current,f=h?h.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(l||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,C=v.clientY;u=Math.round(m-f.left),d=Math.round(C-f.top)}if(l)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var g=2*Math.max(Math.abs((h?h.clientWidth:0)-u),u)+2,b=2*Math.max(Math.abs((h?h.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(g,2)+Math.pow(b,2))}null!=e&&e.touches?null===E.current&&(E.current=function(){w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})},Z.current=setTimeout((function(){E.current&&(E.current(),E.current=null)}),80)):w({pulsate:r,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[i,w]),L=o.useCallback((function(){M({},{pulsate:!0})}),[M]),R=o.useCallback((function(e,t){if(clearTimeout(Z.current),"touchend"===(null==e?void 0:e.type)&&E.current)return E.current(),E.current=null,void(Z.current=setTimeout((function(){R(e,t)})));E.current=null,C((function(e){return e.length>0?e.slice(1):e})),b.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:L,start:M,stop:R}}),[L,M,R]),(0,y.jsx)(fe,(0,s.Z)({className:(0,u.Z)(se.root,l.root,d),ref:S},p,{children:(0,y.jsx)(Q,{component:null,exit:!0,children:m})}))})),Ce=me;function ge(e){return C("MuiButtonBase",e)}var be,ye=g("MuiButtonBase",["root","disabled","focusVisible"]),xe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Ze=(0,r.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,t){return t.root}})((be={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,M.Z)(be,"&.".concat(ye.disabled),{pointerEvents:"none",cursor:"default"}),(0,M.Z)(be,"@media print",{colorAdjust:"exact"}),be)),Ee=o.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiButtonBase"}),r=n.action,i=n.centerRipple,a=void 0!==i&&i,l=n.children,d=n.className,f=n.component,v=void 0===f?"button":f,m=n.disabled,C=void 0!==m&&m,g=n.disableRipple,b=void 0!==g&&g,x=n.disableTouchRipple,Z=void 0!==x&&x,E=n.focusRipple,S=void 0!==E&&E,w=n.LinkComponent,M=void 0===w?"a":w,L=n.onBlur,R=n.onClick,z=n.onContextMenu,T=n.onDragLeave,H=n.onFocus,P=n.onFocusVisible,B=n.onKeyDown,W=n.onKeyUp,N=n.onMouseDown,O=n.onMouseLeave,F=n.onMouseUp,j=n.onTouchEnd,_=n.onTouchMove,U=n.onTouchStart,A=n.tabIndex,q=void 0===A?0:A,K=n.TouchRippleProps,X=n.touchRippleRef,Y=n.type,G=(0,c.Z)(n,xe),J=o.useRef(null),Q=o.useRef(null),$=V(Q,X),ee=D(),te=ee.isFocusVisibleRef,ne=ee.onFocus,oe=ee.onBlur,re=ee.ref,ie=o.useState(!1),ae=(0,k.Z)(ie,2),le=ae[0],ce=ae[1];C&&le&&ce(!1),o.useImperativeHandle(r,(function(){return{focusVisible:function(){ce(!0),J.current.focus()}}}),[]);var se=o.useState(!1),ue=(0,k.Z)(se,2),de=ue[0],pe=ue[1];o.useEffect((function(){pe(!0)}),[]);var he=de&&!b&&!C;function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Z;return I((function(o){return t&&t(o),!n&&Q.current&&Q.current[e](o),!0}))}o.useEffect((function(){le&&S&&!b&&de&&Q.current.pulsate()}),[b,S,le,de]);var ve=fe("start",N),me=fe("stop",z),be=fe("stop",T),ye=fe("stop",F),Ee=fe("stop",(function(e){le&&e.preventDefault(),O&&O(e)})),Se=fe("start",U),we=fe("stop",j),Me=fe("stop",_),Le=fe("stop",(function(e){oe(e),!1===te.current&&ce(!1),L&&L(e)}),!1),Re=I((function(e){J.current||(J.current=e.currentTarget),ne(e),!0===te.current&&(ce(!0),P&&P(e)),H&&H(e)})),ke=function(){var e=J.current;return v&&"button"!==v&&!("A"===e.tagName&&e.href)},ze=o.useRef(!1),Ve=I((function(e){S&&!ze.current&&le&&Q.current&&" "===e.key&&(ze.current=!0,Q.current.stop(e,(function(){Q.current.start(e)}))),e.target===e.currentTarget&&ke()&&" "===e.key&&e.preventDefault(),B&&B(e),e.target===e.currentTarget&&ke()&&"Enter"===e.key&&!C&&(e.preventDefault(),R&&R(e))})),Te=I((function(e){S&&" "===e.key&&Q.current&&le&&!e.defaultPrevented&&(ze.current=!1,Q.current.stop(e,(function(){Q.current.pulsate(e)}))),W&&W(e),R&&e.target===e.currentTarget&&ke()&&" "===e.key&&!e.defaultPrevented&&R(e)})),He=v;"button"===He&&(G.href||G.to)&&(He=M);var Ie={};"button"===He?(Ie.type=void 0===Y?"button":Y,Ie.disabled=C):(G.href||G.to||(Ie.role="button"),C&&(Ie["aria-disabled"]=C));var Pe=V(t,re,J);var Be=(0,s.Z)({},n,{centerRipple:a,component:v,disabled:C,disableRipple:b,disableTouchRipple:Z,focusRipple:S,tabIndex:q,focusVisible:le}),We=function(e){var t=e.disabled,n=e.focusVisible,o=e.focusVisibleClassName,r=p({root:["root",t&&"disabled",n&&"focusVisible"]},ge,e.classes);return n&&o&&(r.root+=" ".concat(o)),r}(Be);return(0,y.jsxs)(Ze,(0,s.Z)({as:He,className:(0,u.Z)(We.root,d),ownerState:Be,onBlur:Le,onClick:R,onContextMenu:me,onFocus:Re,onKeyDown:Ve,onKeyUp:Te,onMouseDown:ve,onMouseLeave:Ee,onMouseUp:ye,onDragLeave:be,onTouchEnd:we,onTouchMove:Me,onTouchStart:Se,ref:Pe,tabIndex:C?-1:q,type:Y},Ie,G,{children:[l,he?(0,y.jsx)(Ce,(0,s.Z)({ref:$,center:a},K)):null]}))})),Se=Ee;function we(e){return C("MuiButton",e)}var Me=g("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var Le=o.createContext({}),Re=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ke=function(e){return(0,s.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},ze=(0,r.ZP)(Se,{shouldForwardProp:function(e){return(0,r.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(f(n.color))],t["size".concat(f(n.size))],t["".concat(n.variant,"Size").concat(f(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n,o,r=e.theme,i=e.ownerState;return(0,s.Z)({},r.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":(0,s.Z)({textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[i.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette[i.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat((r.vars||r).palette[i.color].main),backgroundColor:r.vars?"rgba(".concat(r.vars.palette[i.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,R.Fq)(r.palette[i.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:(r.vars||r).palette.grey.A100,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:(r.vars||r).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[i.color].main}}),"&:active":(0,s.Z)({},"contained"===i.variant&&{boxShadow:(r.vars||r).shadows[8]})},(0,M.Z)(t,"&.".concat(Me.focusVisible),(0,s.Z)({},"contained"===i.variant&&{boxShadow:(r.vars||r).shadows[6]})),(0,M.Z)(t,"&.".concat(Me.disabled),(0,s.Z)({color:(r.vars||r).palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)},"outlined"===i.variant&&"secondary"===i.color&&{border:"1px solid ".concat((r.vars||r).palette.action.disabled)},"contained"===i.variant&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})),t),"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].main,border:r.vars?"1px solid rgba(".concat(r.vars.palette[i.color].mainChannel," / 0.5)"):"1px solid ".concat((0,R.Fq)(r.palette[i.color].main,.5))},"contained"===i.variant&&{color:r.vars?r.vars.palette.text.primary:null==(n=(o=r.palette).getContrastText)?void 0:n.call(o,r.palette.grey[300]),backgroundColor:(r.vars||r).palette.grey[300],boxShadow:(r.vars||r).shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:(r.vars||r).palette[i.color].contrastText,backgroundColor:(r.vars||r).palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,M.Z)(t,"&.".concat(Me.focusVisible),{boxShadow:"none"}),(0,M.Z)(t,"&:active",{boxShadow:"none"}),(0,M.Z)(t,"&.".concat(Me.disabled),{boxShadow:"none"}),t)})),Ve=(0,r.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(f(n.size))]]}})((function(e){var t=e.ownerState;return(0,s.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},ke(t))})),Te=(0,r.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(f(n.size))]]}})((function(e){var t=e.ownerState;return(0,s.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},ke(t))})),He=o.forwardRef((function(e,t){var n=o.useContext(Le),r=(0,L.Z)(n,e),i=(0,h.Z)({props:r,name:"MuiButton"}),a=i.children,l=i.color,d=void 0===l?"primary":l,v=i.component,m=void 0===v?"button":v,C=i.className,g=i.disabled,b=void 0!==g&&g,x=i.disableElevation,Z=void 0!==x&&x,E=i.disableFocusRipple,S=void 0!==E&&E,w=i.endIcon,M=i.focusVisibleClassName,R=i.fullWidth,k=void 0!==R&&R,z=i.size,V=void 0===z?"medium":z,T=i.startIcon,H=i.type,I=i.variant,P=void 0===I?"text":I,B=(0,c.Z)(i,Re),W=(0,s.Z)({},i,{color:d,component:m,disabled:b,disableElevation:Z,disableFocusRipple:S,fullWidth:k,size:V,type:H,variant:P}),N=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,r=e.size,i=e.variant,a=e.classes,l=p({root:["root",i,"".concat(i).concat(f(t)),"size".concat(f(r)),"".concat(i,"Size").concat(f(r)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(f(r))],endIcon:["endIcon","iconSize".concat(f(r))]},we,a);return(0,s.Z)({},a,l)}(W),O=T&&(0,y.jsx)(Ve,{className:N.startIcon,ownerState:W,children:T}),F=w&&(0,y.jsx)(Te,{className:N.endIcon,ownerState:W,children:w});return(0,y.jsxs)(ze,(0,s.Z)({ownerState:W,className:(0,u.Z)(n.className,N.root,C),component:m,disabled:b,focusRipple:!S,focusVisibleClassName:(0,u.Z)(N.focusVisible,M),ref:t,type:H},B,{classes:N,children:[O,a,F]}))})),Ie=n(433),Pe=n(8791),Be=n.n(Pe),We=function(){return o.createElement(a.Z,{bgcolor:function(e){return e.palette.background.default},height:"100vh"},o.createElement(Ie.N,{spacing:"3rem",alignItems:"center",height:"100%",maxWidth:"38rem"},o.createElement(l.Z,{width:"100%",alignItems:"flex-start",borderBottom:function(e){return"1px solid "+e.palette.divider},pt:"2rem",pb:"1rem",sx:{svg:{width:"auto"}}},o.createElement(Be(),{height:"3.5rem",width:"auto"})),o.createElement(l.Z,{spacing:"2rem"},o.createElement(w,{variant:"h1",fontWeight:600,fontSize:"1.5rem",lineHeight:"2.125rem",maxWidth:{xs:"100%",sm:"80%"}},"Variety Labs provides software development and advisory services"),o.createElement(l.Z,{spacing:"1rem",direction:{xs:"column"},maxWidth:"38rem"},o.createElement(w,{color:function(e){return e.palette.text.secondary}},"We turn your ideas from proof-of-concept into production-ready applications. Using the latest technologies, we deliver high-quality, scalable software solutions, including iOS apps and web apps, tailored to your needs."),o.createElement(w,{color:function(e){return e.palette.text.secondary}},"Additionally, our consultancy services guide you from ideation to implementation. We offer insights and advice on both technical aspects like engineering and security, in addition to operational support."))),o.createElement(He,{variant:"contained",href:"mailto:contact@varietylabs.xyz",sx:{height:"3rem",fontWeight:600},color:"secondary",fullWidth:!0},"Get in touch")))},Ne=(0,r.ZP)(i.W)((function(e){return{display:"flex",position:"relative",background:e.theme.palette.background.default}})),Oe=function(){return o.createElement(Ne,{title:"Variety Labs",description:"Software development made easy",pathName:"/"},o.createElement(We,null))}},8791:function(e,t,n){var o=n(7294);function r(e){return o.createElement("svg",e,[o.createElement("path",{d:"M142.874 116L108.994 39H120.874L152.004 110.06H145.184L176.534 39H187.534L153.764 116H142.874ZM222.098 116V103.68L221.548 101.37V80.36C221.548 75.8867 220.228 72.44 217.588 70.02C215.022 67.5267 211.135 66.28 205.928 66.28C202.482 66.28 199.108 66.8667 195.808 68.04C192.508 69.14 189.722 70.6433 187.448 72.55L183.048 64.63C186.055 62.21 189.648 60.3767 193.828 59.13C198.082 57.81 202.518 57.15 207.138 57.15C215.132 57.15 221.292 59.0933 225.618 62.98C229.945 66.8667 232.108 72.8067 232.108 80.8V116H222.098ZM202.958 116.66C198.632 116.66 194.818 115.927 191.518 114.46C188.292 112.993 185.798 110.977 184.038 108.41C182.278 105.77 181.398 102.8 181.398 99.5C181.398 96.3467 182.132 93.4867 183.598 90.92C185.138 88.3533 187.595 86.3 190.968 84.76C194.415 83.22 199.035 82.45 204.828 82.45H223.308V90.04H205.268C199.988 90.04 196.432 90.92 194.598 92.68C192.765 94.44 191.848 96.5667 191.848 99.06C191.848 101.92 192.985 104.23 195.258 105.99C197.532 107.677 200.685 108.52 204.718 108.52C208.678 108.52 212.125 107.64 215.058 105.88C218.065 104.12 220.228 101.553 221.548 98.18L223.638 105.44C222.245 108.887 219.788 111.637 216.268 113.69C212.748 115.67 208.312 116.66 202.958 116.66ZM246.151 116V57.7H256.271V73.54L255.281 69.58C256.894 65.5467 259.607 62.4667 263.421 60.34C267.234 58.2133 271.927 57.15 277.501 57.15V67.38C277.061 67.3067 276.621 67.27 276.181 67.27C275.814 67.27 275.447 67.27 275.081 67.27C269.434 67.27 264.961 68.9567 261.661 72.33C258.361 75.7033 256.711 80.58 256.711 86.96V116H246.151ZM285.016 116V57.7H295.576V116H285.016ZM290.296 46.48C288.243 46.48 286.519 45.82 285.126 44.5C283.806 43.18 283.146 41.5667 283.146 39.66C283.146 37.68 283.806 36.03 285.126 34.71C286.519 33.39 288.243 32.73 290.296 32.73C292.349 32.73 294.036 33.39 295.356 34.71C296.749 35.9567 297.446 37.5333 297.446 39.44C297.446 41.42 296.786 43.1067 295.466 44.5C294.146 45.82 292.423 46.48 290.296 46.48ZM336.199 116.66C329.965 116.66 324.465 115.377 319.699 112.81C315.005 110.243 311.339 106.723 308.699 102.25C306.132 97.7767 304.849 92.6433 304.849 86.85C304.849 81.0567 306.095 75.9233 308.589 71.45C311.155 66.9767 314.639 63.4933 319.039 61C323.512 58.4333 328.535 57.15 334.109 57.15C339.755 57.15 344.742 58.3967 349.069 60.89C353.395 63.3833 356.769 66.9033 359.189 71.45C361.682 75.9233 362.929 81.1667 362.929 87.18C362.929 87.62 362.892 88.1333 362.819 88.72C362.819 89.3067 362.782 89.8567 362.709 90.37H313.099V82.78H357.209L352.919 85.42C352.992 81.68 352.222 78.3433 350.609 75.41C348.995 72.4767 346.759 70.2033 343.899 68.59C341.112 66.9033 337.849 66.06 334.109 66.06C330.442 66.06 327.179 66.9033 324.319 68.59C321.459 70.2033 319.222 72.5133 317.609 75.52C315.995 78.4533 315.189 81.8267 315.189 85.64V87.4C315.189 91.2867 316.069 94.77 317.829 97.85C319.662 100.857 322.192 103.203 325.419 104.89C328.645 106.577 332.349 107.42 336.529 107.42C339.975 107.42 343.092 106.833 345.879 105.66C348.739 104.487 351.232 102.727 353.359 100.38L359.189 107.2C356.549 110.28 353.249 112.627 349.289 114.24C345.402 115.853 341.039 116.66 336.199 116.66ZM392.112 116.66C386.245 116.66 381.699 115.083 378.472 111.93C375.245 108.777 373.632 104.267 373.632 98.4V44.94H384.192V97.96C384.192 101.113 384.962 103.533 386.502 105.22C388.115 106.907 390.389 107.75 393.322 107.75C396.622 107.75 399.372 106.833 401.572 105L404.872 112.59C403.259 113.983 401.315 115.01 399.042 115.67C396.842 116.33 394.532 116.66 392.112 116.66ZM363.732 66.39V57.7H400.912V66.39H363.732ZM413.595 138C410.808 138 408.095 137.523 405.455 136.57C402.815 135.69 400.541 134.37 398.635 132.61L403.145 124.69C404.611 126.083 406.225 127.147 407.985 127.88C409.745 128.613 411.615 128.98 413.595 128.98C416.161 128.98 418.288 128.32 419.975 127C421.661 125.68 423.238 123.333 424.705 119.96L428.335 111.93L429.435 110.61L452.315 57.7H462.655L434.385 121.83C432.698 125.937 430.791 129.163 428.665 131.51C426.611 133.857 424.338 135.507 421.845 136.46C419.351 137.487 416.601 138 413.595 138ZM427.455 117.87L400.835 57.7H411.835L434.495 109.62L427.455 117.87Z",fill:"black",key:0}),o.createElement("path",{d:"M486.907 116V39H497.907V106.43H539.597V116H486.907ZM581.37 116V103.68L580.82 101.37V80.36C580.82 75.8867 579.5 72.44 576.86 70.02C574.293 67.5267 570.407 66.28 565.2 66.28C561.753 66.28 558.38 66.8667 555.08 68.04C551.78 69.14 548.993 70.6433 546.72 72.55L542.32 64.63C545.327 62.21 548.92 60.3767 553.1 59.13C557.353 57.81 561.79 57.15 566.41 57.15C574.403 57.15 580.563 59.0933 584.89 62.98C589.217 66.8667 591.38 72.8067 591.38 80.8V116H581.37ZM562.23 116.66C557.903 116.66 554.09 115.927 550.79 114.46C547.563 112.993 545.07 110.977 543.31 108.41C541.55 105.77 540.67 102.8 540.67 99.5C540.67 96.3467 541.403 93.4867 542.87 90.92C544.41 88.3533 546.867 86.3 550.24 84.76C553.687 83.22 558.307 82.45 564.1 82.45H582.58V90.04H564.54C559.26 90.04 555.703 90.92 553.87 92.68C552.037 94.44 551.12 96.5667 551.12 99.06C551.12 101.92 552.257 104.23 554.53 105.99C556.803 107.677 559.957 108.52 563.99 108.52C567.95 108.52 571.397 107.64 574.33 105.88C577.337 104.12 579.5 101.553 580.82 98.18L582.91 105.44C581.517 108.887 579.06 111.637 575.54 113.69C572.02 115.67 567.583 116.66 562.23 116.66ZM636.332 116.66C631.345 116.66 626.835 115.56 622.802 113.36C618.842 111.087 615.689 107.75 613.342 103.35C611.069 98.95 609.932 93.45 609.932 86.85C609.932 80.25 611.105 74.75 613.452 70.35C615.872 65.95 619.062 62.65 623.022 60.45C627.055 58.25 631.492 57.15 636.332 57.15C642.052 57.15 647.112 58.3967 651.512 60.89C655.912 63.3833 659.395 66.8667 661.962 71.34C664.529 75.74 665.812 80.91 665.812 86.85C665.812 92.79 664.529 97.9967 661.962 102.47C659.395 106.943 655.912 110.427 651.512 112.92C647.112 115.413 642.052 116.66 636.332 116.66ZM605.422 116V34.38H615.982V73.21L614.882 86.74L615.542 100.27V116H605.422ZM635.452 107.42C639.192 107.42 642.529 106.577 645.462 104.89C648.469 103.203 650.815 100.82 652.502 97.74C654.262 94.5867 655.142 90.9567 655.142 86.85C655.142 82.67 654.262 79.0767 652.502 76.07C650.815 72.99 648.469 70.6067 645.462 68.92C642.529 67.2333 639.192 66.39 635.452 66.39C631.785 66.39 628.449 67.2333 625.442 68.92C622.509 70.6067 620.162 72.99 618.402 76.07C616.715 79.0767 615.872 82.67 615.872 86.85C615.872 90.9567 616.715 94.5867 618.402 97.74C620.162 100.82 622.509 103.203 625.442 104.89C628.449 106.577 631.785 107.42 635.452 107.42ZM691.623 116.66C686.783 116.66 682.163 116 677.763 114.68C673.436 113.36 670.026 111.747 667.533 109.84L671.933 101.48C674.426 103.167 677.506 104.597 681.173 105.77C684.839 106.943 688.579 107.53 692.393 107.53C697.306 107.53 700.826 106.833 702.953 105.44C705.153 104.047 706.253 102.103 706.253 99.61C706.253 97.7767 705.593 96.3467 704.273 95.32C702.953 94.2933 701.193 93.5233 698.993 93.01C696.866 92.4967 694.483 92.0567 691.843 91.69C689.203 91.25 686.563 90.7367 683.923 90.15C681.283 89.49 678.863 88.61 676.663 87.51C674.463 86.3367 672.703 84.76 671.383 82.78C670.063 80.7267 669.403 78.0133 669.403 74.64C669.403 71.12 670.393 68.04 672.373 65.4C674.353 62.76 677.139 60.7433 680.733 59.35C684.399 57.8833 688.726 57.15 693.713 57.15C697.526 57.15 701.376 57.6267 705.263 58.58C709.223 59.46 712.449 60.7433 714.943 62.43L710.433 70.79C707.793 69.03 705.043 67.82 702.183 67.16C699.323 66.5 696.463 66.17 693.603 66.17C688.983 66.17 685.536 66.94 683.263 68.48C680.989 69.9467 679.853 71.8533 679.853 74.2C679.853 76.18 680.513 77.72 681.833 78.82C683.226 79.8467 684.986 80.6533 687.113 81.24C689.313 81.8267 691.733 82.34 694.373 82.78C697.013 83.1467 699.653 83.66 702.293 84.32C704.933 84.9067 707.316 85.75 709.443 86.85C711.643 87.95 713.403 89.49 714.723 91.47C716.116 93.45 716.813 96.09 716.813 99.39C716.813 102.91 715.786 105.953 713.733 108.52C711.679 111.087 708.783 113.103 705.043 114.57C701.303 115.963 696.829 116.66 691.623 116.66Z",fill:"black",key:1}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.7794 71.7189C27.9509 77.4484 24.9049 83.5849 21.9591 89.5174C21.7273 89.9843 21.4961 90.4498 21.2657 90.9138C18.5409 96.4011 15.9263 101.667 13.6658 106.241L13.8255 106.546H54.6644L55.4013 105.232L38.7394 71.7189H30.7794ZM46.2881 59.5356L23.1974 59.5356C19.3442 67.3899 14.7157 76.711 10.3474 85.508C6.44419 93.3684 2.74878 100.81 0 106.413L6.45662 118.729H61.7991L69.178 105.576L46.2881 59.5356Z",fill:"url(#paint0_linear_201_105)",key:2}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.6016 71.7189C50.7732 77.4484 47.7272 83.5849 44.7814 89.5174C44.5496 89.9843 44.3184 90.4498 44.088 90.9138C41.3632 96.4011 38.7486 101.667 36.4881 106.241L36.6477 106.546H77.4866L78.2236 105.232L61.5616 71.7189H53.6016ZM69.1104 59.5356L46.0197 59.5356C42.1665 67.3899 37.538 76.711 33.1697 85.508C29.2665 93.3684 25.571 100.81 22.8223 106.413L29.2789 118.729H84.6213L92.0003 105.576L69.1104 59.5356Z",fill:"url(#paint1_linear_201_105)",key:3}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.1905 48.1833C39.362 53.9128 36.3161 60.0492 33.3703 65.9817C33.1386 66.4483 32.9075 66.9136 32.6773 67.3773C29.9523 72.8649 27.3375 78.1307 25.077 82.7058L25.2366 83.0103H66.0755L66.8124 81.6967L50.1505 48.1833L42.1905 48.1833ZM57.6993 36L34.6085 36C30.7554 43.8543 26.1268 53.1754 21.7586 61.9724C17.8553 69.8328 14.1599 77.2747 11.4111 82.8778L17.8678 95.1936H73.2102L80.5892 82.0402L57.6993 36Z",fill:"url(#paint2_linear_201_105)",key:4}),o.createElement("defs",{key:5},[o.createElement("linearGradient",{id:"paint0_linear_201_105",x1:"34.589",y1:"59.5356",x2:"34.589",y2:"118.729",gradientUnits:"userSpaceOnUse",key:0},[o.createElement("stop",{stopColor:"#71CCFE",key:0}),o.createElement("stop",{offset:"1",stopColor:"#30A3D4",key:1})]),o.createElement("linearGradient",{id:"paint1_linear_201_105",x1:"57.4113",y1:"59.5356",x2:"57.4113",y2:"118.729",gradientUnits:"userSpaceOnUse",key:1},[o.createElement("stop",{stopColor:"#71CCFE",key:0}),o.createElement("stop",{offset:"1",stopColor:"#30A3D4",key:1})]),o.createElement("linearGradient",{id:"paint2_linear_201_105",x1:"46.0002",y1:"36",x2:"46.0002",y2:"95.1936",gradientUnits:"userSpaceOnUse",key:2},[o.createElement("stop",{stopColor:"#71CCFE",key:0}),o.createElement("stop",{offset:"1",stopColor:"#30A3D4",key:1})])])])}r.defaultProps={width:"720",height:"146",viewBox:"0 0 720 146",fill:"none"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-85dfdf747cafc1c158ab.js.map