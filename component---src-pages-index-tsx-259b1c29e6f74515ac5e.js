"use strict";(self.webpackChunkgh_pages_new_4=self.webpackChunkgh_pages_new_4||[]).push([[691],{1570:function(e,a,t){t.d(a,{Z:function(){return C}});var l=t(4942),n=t(3366),c=t(7462),s=t(7294),i=t(5505),m=t(9236),r=t(8230),o=t(9308),d=t(9240),u=t(7113),v=t(7761),E=t(9508),N=t(8400);function p(e){return(0,N.Z)("MuiFormControlLabel",e)}var x=(0,E.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),b=t(1825),g=t(5893),f=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],h=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[(0,l.Z)({},"& .".concat(x.label),a.label),a.root,a["labelPlacement".concat((0,d.Z)(t.labelPlacement))]]}})((function(e){var a=e.theme,t=e.ownerState;return(0,c.Z)((0,l.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(x.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,l.Z)({},"& .".concat(x.label),(0,l.Z)({},"&.".concat(x.disabled),{color:(a.vars||a).palette.text.disabled})))})),C=s.forwardRef((function(e,a){var t,l=(0,v.Z)({props:e,name:"MuiFormControlLabel"}),u=l.className,E=l.componentsProps,N=void 0===E?{}:E,x=l.control,C=l.disabled,y=l.disableTypography,k=l.label,w=l.labelPlacement,Z=void 0===w?"end":w,S=l.slotProps,I=void 0===S?{}:S,P=(0,n.Z)(l,f),R=(0,r.Z)(),F=C;void 0===F&&void 0!==x.props.disabled&&(F=x.props.disabled),void 0===F&&R&&(F=R.disabled);var B={disabled:F};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===x.props[e]&&void 0!==l[e]&&(B[e]=l[e])}));var D=(0,b.Z)({props:l,muiFormControl:R,states:["error"]}),A=(0,c.Z)({},l,{disabled:F,labelPlacement:Z,error:D.error}),z=function(e){var a=e.classes,t=e.disabled,l=e.labelPlacement,n=e.error,c={root:["root",t&&"disabled","labelPlacement".concat((0,d.Z)(l)),n&&"error"],label:["label",t&&"disabled"]};return(0,m.Z)(c,p,a)}(A),M=null!=(t=I.typography)?t:N.typography,L=k;return null==L||L.type===o.Z||y||(L=(0,g.jsx)(o.Z,(0,c.Z)({component:"span"},M,{className:(0,i.Z)(z.label,null==M?void 0:M.className),children:L}))),(0,g.jsxs)(h,(0,c.Z)({className:(0,i.Z)(z.root,u),ownerState:A,ref:a},P,{children:[s.cloneElement(x,B),L]}))}))},443:function(e,a,t){t.d(a,{Z:function(){return h}});var l=t(885),n=t(3366),c=t(7462),s=t(7294),i=t(5505),m=t(9236),r=t(9240),o=t(7113),d=t(2583),u=t(8230),v=t(4317),E=t(9508),N=t(8400);function p(e){return(0,N.Z)("PrivateSwitchBase",e)}(0,E.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var x=t(5893),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,o.ZP)(v.Z)((function(e){var a=e.ownerState;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),f=(0,o.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),h=s.forwardRef((function(e,a){var t=e.autoFocus,s=e.checked,o=e.checkedIcon,v=e.className,E=e.defaultChecked,N=e.disabled,h=e.disableFocusRipple,C=void 0!==h&&h,y=e.edge,k=void 0!==y&&y,w=e.icon,Z=e.id,S=e.inputProps,I=e.inputRef,P=e.name,R=e.onBlur,F=e.onChange,B=e.onFocus,D=e.readOnly,A=e.required,z=void 0!==A&&A,M=e.tabIndex,L=e.type,T=e.value,j=(0,n.Z)(e,b),O=(0,d.Z)({controlled:s,default:Boolean(E),name:"SwitchBase",state:"checked"}),H=(0,l.Z)(O,2),$=H[0],V=H[1],_=(0,u.Z)(),q=N;_&&void 0===q&&(q=_.disabled);var W="checkbox"===L||"radio"===L,Y=(0,c.Z)({},e,{checked:$,disabled:q,disableFocusRipple:C,edge:k}),G=function(e){var a=e.classes,t=e.checked,l=e.disabled,n=e.edge,c={root:["root",t&&"checked",l&&"disabled",n&&"edge".concat((0,r.Z)(n))],input:["input"]};return(0,m.Z)(c,p,a)}(Y);return(0,x.jsxs)(g,(0,c.Z)({component:"span",className:(0,i.Z)(G.root,v),centerRipple:!0,focusRipple:!C,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){R&&R(e),_&&_.onBlur&&_.onBlur(e)},ownerState:Y,ref:a},j,{children:[(0,x.jsx)(f,(0,c.Z)({autoFocus:t,checked:s,defaultChecked:E,className:G.input,disabled:q,id:W?Z:void 0,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var a=e.target.checked;V(a),F&&F(e,a)}},readOnly:D,ref:I,required:z,ownerState:Y,tabIndex:M,type:L},"checkbox"===L&&void 0===T?{}:{value:T},S)),$?o:w]}))}))},8959:function(e,a,t){t.d(a,{Z:function(){return n}});var l=t(7294),n=function(e){e.onClose;return l.createElement("div",{className:"matterhorn-popup-module--matterhornPopup--bc456"},l.createElement("iframe",{className:"matterhorn-popup-module--video--a5191",src:"https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1",frameBorder:"0",allowFullScreen:!0}))}},1206:function(e,a,t){t.d(a,{Z:function(){return i}});var l=t(7294),n=t(3935),c="portal-popup-module--portalPopupOverlay--56d4e",s=function(e){var a=e.children,t=e.containerId,c=void 0===t?"portals":t;if("undefined"!=typeof window){var s=document.getElementById(c);return s||((s=document.createElement("div")).setAttribute("id",c),document.body.appendChild(s)),(0,n.createPortal)(a,s)}return l.createElement("div",null)},i=function(e){var a=e.children,t=e.overlayColor,n=e.placement,i=void 0===n?"Centered":n,m=e.onOutsideClick,r=e.zIndex,o=void 0===r?100:r,d=e.left,u=void 0===d?0:d,v=e.right,E=void 0===v?0:v,N=e.top,p=void 0===N?0:N,x=e.bottom,b=void 0===x?0:x,g=e.relativeLayerRef,f=(0,l.useRef)(null),h=(0,l.useState)({}),C=h[0],y=h[1],k=(0,l.useMemo)((function(){var e={};if(e.zIndex=o,t&&(e.backgroundColor=t),null==g||!g.current)switch(i){case"Centered":e.alignItems="center",e.justifyContent="center";break;case"Top left":e.alignItems="flex-start";break;case"Top center":e.alignItems="center";break;case"Top right":e.alignItems="flex-end";break;case"Bottom left":e.alignItems="flex-start",e.justifyContent="flex-end";break;case"Bottom center":e.alignItems="center",e.justifyContent="flex-end";break;case"Bottom right":e.alignItems="flex-end",e.justifyContent="flex-end"}return e}),[i,t,o,null==g?void 0:g.current]),w=(0,l.useCallback)((function(){var e,a,t=null==g||null===(e=g.current)||void 0===e?void 0:e.getBoundingClientRect(),l=null==f||null===(a=f.current)||void 0===a?void 0:a.getBoundingClientRect(),n={};if(t&&l){var c=t.x,s=t.y,m=t.width,r=t.height,o=l.width,d=l.height;switch(n.position="absolute",i){case"Top left":n.top=s-d-p,n.left=c+u;break;case"Top right":n.top=s-d-p,n.left=c+m-o-E;break;case"Bottom left":n.top=s+r+b,n.left=c+u;break;case"Bottom right":n.top=s+r+b,n.left=c+m-o-E}y(n)}else n.maxWidth="90%",n.maxHeight="90%",y(n)}),[u,E,p,b,i,null==g?void 0:g.current,null==f?void 0:f.current]);(0,l.useEffect)((function(){return w(),window.addEventListener("resize",w),window.addEventListener("scroll",w,!0),function(){window.removeEventListener("resize",w),window.removeEventListener("scroll",w,!0)}}),[w]);var Z=(0,l.useCallback)((function(e){m&&e.target.classList.contains(c)&&m(),e.stopPropagation()}),[m]);return l.createElement(s,null,l.createElement("div",{className:c,style:k,onClick:Z},l.createElement("div",{ref:f,style:C},a)))}},3419:function(e,a,t){t.r(a),t.d(a,{default:function(){return Ye}});var l=t(7294),n=t(1570),c=t(4942),s=t(3366),i=t(7462),m=t(5505),r=t(9236),o=t(7663),d=t(443),u=t(7761),v=t(2067),E=t(5893),N=(0,v.Z)((0,E.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=(0,v.Z)((0,E.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),x=t(7113),b=(0,x.ZP)("span")({position:"relative",display:"flex"}),g=(0,x.ZP)(N)({transform:"scale(1)"}),f=(0,x.ZP)(p)((function(e){var a=e.theme,t=e.ownerState;return(0,i.Z)({left:0,position:"absolute",transform:"scale(0)",transition:a.transitions.create("transform",{easing:a.transitions.easing.easeIn,duration:a.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:a.transitions.create("transform",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.shortest})})}));var h=function(e){var a=e.checked,t=void 0!==a&&a,l=e.classes,n=void 0===l?{}:l,c=e.fontSize,s=(0,i.Z)({},e,{checked:t});return(0,E.jsxs)(b,{className:n.root,ownerState:s,children:[(0,E.jsx)(g,{fontSize:c,className:n.background,ownerState:s}),(0,E.jsx)(f,{fontSize:c,className:n.dot,ownerState:s})]})},C=t(9240),y=t(721).Z;var k=l.createContext(void 0);var w=t(9508),Z=t(8400);function S(e){return(0,Z.Z)("MuiRadio",e)}var I=(0,w.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),P=["checked","checkedIcon","color","icon","name","onChange","size","className"],R=(0,x.ZP)(d.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["color".concat((0,C.Z)(t.color))]]}})((function(e){var a=e.theme,t=e.ownerState;return(0,i.Z)({color:(a.vars||a).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===t.color?a.vars.palette.action.activeChannel:a.vars.palette[t.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,o.Fq)("default"===t.color?a.palette.action.active:a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(0,c.Z)({},"&.".concat(I.checked),{color:(a.vars||a).palette[t.color].main}),(0,c.Z)({},"&.".concat(I.disabled),{color:(a.vars||a).palette.action.disabled}))}));var F=(0,E.jsx)(h,{checked:!0}),B=(0,E.jsx)(h,{}),D=l.forwardRef((function(e,a){var t,n,c,o,d=(0,u.Z)({props:e,name:"MuiRadio"}),v=d.checked,N=d.checkedIcon,p=void 0===N?F:N,x=d.color,b=void 0===x?"primary":x,g=d.icon,f=void 0===g?B:g,h=d.name,w=d.onChange,Z=d.size,I=void 0===Z?"medium":Z,D=d.className,A=(0,s.Z)(d,P),z=(0,i.Z)({},d,{color:b,size:I}),M=function(e){var a=e.classes,t=e.color,l={root:["root","color".concat((0,C.Z)(t))]};return(0,i.Z)({},a,(0,r.Z)(l,S,a))}(z),L=l.useContext(k),T=v,j=y(w,L&&L.onChange),O=h;return L&&(void 0===T&&(c=L.value,T="object"==typeof(o=d.value)&&null!==o?c===o:String(c)===String(o)),void 0===O&&(O=L.name)),(0,E.jsx)(R,(0,i.Z)({type:"radio",icon:l.cloneElement(f,{fontSize:null!=(t=B.props.fontSize)?t:I}),checkedIcon:l.cloneElement(p,{fontSize:null!=(n=F.props.fontSize)?n:I}),ownerState:z,classes:M,name:O,checked:T,onChange:j,ref:a,className:(0,m.Z)(M.root,D)},A))})),A=D,z=t(6287),M=t(4435),L=t(5980),T=t(8650),j=t(6836),O=t(1082),H=t(8959),$=t(1206),V="index-module--arcticHut--124e4",_="index-module--attractions1--d1940",q="index-module--avatar--46a74",W="index-module--bali--0ff2f",Y="index-module--baliParent--5ea83",G="index-module--button1--7390b",U="index-module--chip--e89f3",X="index-module--chip1--551e6",Q="index-module--col1--43936",J="index-module--company--265da",K="index-module--container--f8c32",ee="index-module--d3n--d9743",ae="index-module--departOn7Container--763c3",te="index-module--departureField--6232c",le="index-module--destinationDetails--166d9",ne="index-module--details--7fa65",ce="index-module--div--64074",se="index-module--div4--060b9",ie="index-module--div8--c7058",me="index-module--durationIcon--97e0e",re="index-module--entireBungalow--b4429",oe="index-module--flightMainContainer--70ae7",de="index-module--formText--58d27",ue="index-module--from--2dab0",ve="index-module--fromDetails--af110",Ee="index-module--holidayDetails--d1ad4",Ne="index-module--hotel--2a4e1",pe="index-module--hotelCard--feddd",xe="index-module--hotelCard1--78f40",be="index-module--hotelIcon--a5e4f",ge="index-module--howWeWork--8e790",fe="index-module--input1--e9f60",he="index-module--lax--5cc0c",Ce="index-module--matterhornSuites--ccc7e",ye="index-module--matterhornSuitesImage--d1579",ke="index-module--moreDetailsButton--5560b",we="index-module--night--58364",Ze="index-module--notificationBellIcon--3578d",Se="index-module--op--22daa",Ie="index-module--parent1--5ef6c",Pe="index-module--paris--4ef16",Re="index-module--pariscard--5951e",Fe="index-module--parisimageIcon--cbe75",Be="index-module--rating--f3609",De="index-module--recCard1--f850b",Ae="index-module--recTitle--938b6",ze="index-module--recentSearches--25128",Me="index-module--reviews--3a9d0",Le="index-module--search--f489e",Te="index-module--sin--91de9",je="index-module--stayDetails--d0d0e",Oe="index-module--stayDetailsRows--eba73",He="index-module--toAndFrom--dfe4b",$e="index-module--toDetails--9df56",Ve="index-module--typography--e2b01",_e="index-module--unsplash5mv818tzxeoIcon--2754e",qe="index-module--vectorIcon--525bb",We="index-module--videoIcon--49048",Ye=function(){var e=(0,l.useState)(null),a=e[0],t=e[1],c=(0,l.useState)(!1),s=c[0],i=c[1],m=(0,l.useState)(!1),r=m[0],o=m[1],d=(0,l.useState)(!1),u=d[0],v=d[1],E=(0,l.useState)(!1),N=E[0],p=E[1],x=(0,l.useCallback)((function(){(0,O.c4)("/results-page")}),[]),b=(0,l.useCallback)((function(){(0,O.c4)("/hotels-page")}),[]),g=(0,l.useCallback)((function(){(0,O.c4)("/results-page")}),[]),f=(0,l.useCallback)((function(){(0,O.c4)("/hotels-page")}),[]),h=(0,l.useCallback)((function(){(0,O.c4)("/hotels-page")}),[]),C=(0,l.useCallback)((function(){i(!0)}),[]),y=(0,l.useCallback)((function(){i(!1)}),[]),k=(0,l.useCallback)((function(){o(!0)}),[]),w=(0,l.useCallback)((function(){o(!1)}),[]),Z=(0,l.useCallback)((function(){v(!0)}),[]),S=(0,l.useCallback)((function(){v(!1)}),[]),I=(0,l.useCallback)((function(){p(!0)}),[]),P=(0,l.useCallback)((function(){p(!1)}),[]);return l.createElement(L._,{dateAdapter:j.H},l.createElement(l.Fragment,null,l.createElement("div",{className:"index-module--homepage--10aa7"},l.createElement("div",{className:"index-module--heroSection--7f6f7"},l.createElement("header",{className:"index-module--topHeader--bb45c"},l.createElement("div",{className:"index-module--topContainer--f0c55"},l.createElement("button",{className:"index-module--fickleflightLogo--a5064"},l.createElement("img",{className:"index-module--symbolsIcon--3de9c",alt:"",src:"/symbols.svg"})),l.createElement("div",{className:"index-module--navigationRight--e87e8"},l.createElement("div",{className:"index-module--navigationMenu--c6d64"},l.createElement("button",{className:"index-module--explore--28955"},"Explore"),l.createElement("div",{className:Le,onClick:x},"Search"),l.createElement("div",{className:Le,onClick:b},"Hotels"),l.createElement("button",{className:"index-module--offers--a9bec"},"Offers")),l.createElement("div",{className:"index-module--accountSection--014a2"},l.createElement("img",{className:"index-module--hamburgerMenuIcon--de234",alt:"",src:"/notification2.svg"}),l.createElement("img",{className:Ze,alt:"",src:"/notification3.svg"}),l.createElement("img",{className:"index-module--profilePictureIcon--9c280",alt:"",src:"/top_avatar1@2x.png"}))))),l.createElement("div",{className:"index-module--searchSection--cd0a7"},l.createElement("div",{className:"index-module--bannerGradient--42e5c"}),l.createElement("img",{className:"index-module--bannerBackground--b518b",alt:"",src:"/banner--background1@2x.png"}),l.createElement("div",{className:"index-module--searchContainer--6b737"},l.createElement("div",{className:"index-module--title--16c47"},l.createElement("div",{className:"index-module--letsExplore--7f25e"},"Let’s explore & travel the world"),l.createElement("div",{className:"index-module--findTheBest--dda8c"},"Find the best destinations and the most popular stays!")),l.createElement("div",{className:"index-module--searchForm--a4a38"},l.createElement("div",{className:"index-module--formTitleGroup--86963"},l.createElement("b",{className:"index-module--searchFlights--04207"},"Search flights"),l.createElement("div",{className:"index-module--flightOptions--d1f87"},l.createElement("div",{className:"index-module--flightType--1b3d1"},l.createElement(n.Z,{className:"index-module--radio--3d304",label:"Return",labelPlacement:"end",control:l.createElement(A,{size:"medium"})}),l.createElement(n.Z,{className:"index-module--radio1--8ee8e",label:"One-way",labelPlacement:"end",control:l.createElement(A,{color:"primary",checked:!0,size:"medium"})})))),l.createElement("div",{className:"index-module--formInputsRow--ae547"},l.createElement("div",{className:"index-module--inputsRow--af1cb"},l.createElement(z.Z,{className:te,disablePortal:!0,options:["Singapore (SIN)","Sydney (SYD)","Siem Reap (REP)","Shanghai (PVG)","Sanya (SYX)"],renderInput:function(e){return l.createElement(M.Z,Object.assign({},e,{color:"primary",label:"Departure",variant:"outlined",placeholder:"",helperText:""}))},defaultValue:"Singapore -  Changi (SIN)",size:"medium"}),l.createElement("div",{className:"index-module--arrivalField--cbf03"},l.createElement("div",{className:"index-module--input--2f049"},l.createElement("div",{className:"index-module--labelContainer--aa595"},l.createElement("div",{className:"index-module--arrival--af3c2"},"Arrival")),l.createElement("div",{className:"index-module--active--12881"},l.createElement("div",{className:"index-module--muiautocompletetag--18392"},l.createElement("div",{className:U},l.createElement("div",{className:K},l.createElement("div",{className:q},l.createElement("div",{className:Se},"F")),l.createElement("div",{className:Ve},l.createElement("div",{className:X},"Chip")),l.createElement("img",{className:Ze,alt:"",src:"/cancel2.svg"}))),l.createElement("div",{className:U},l.createElement("div",{className:K},l.createElement("div",{className:q},l.createElement("div",{className:Se},"F")),l.createElement("div",{className:Ve},l.createElement("div",{className:X},"Chip")),l.createElement("img",{className:Ze,alt:"",src:"/cancel2.svg"})))),l.createElement("div",{className:"index-module--losAngelesLa--2e8af"},"Los Angeles (LA)")))),l.createElement("div",{className:te},l.createElement(T.M,{label:"Date",value:a,onChange:function(e){t(e)},renderInput:function(e){return l.createElement(M.Z,Object.assign({},e,{color:"primary",variant:"outlined",size:"medium",renderInput:{placeholder:"01/05/2022"},helperText:"",fullWidth:!0}))}}))),l.createElement("div",{className:"index-module--buttonGroup--75f72"},l.createElement("div",{className:"index-module--searchFlightsButton--f9b6b",onClick:g},l.createElement("div",{className:"index-module--button--d758f"},"Search flights")))))))),l.createElement("div",{className:"index-module--homeContents--48e9f"},l.createElement("div",{className:"index-module--upcomingFlightSection--f522b"},l.createElement("div",{className:"index-module--upcomingFlightSection1--d6040"},l.createElement("b",{className:ze},"Recent Searches"),l.createElement("div",{className:"index-module--flightDetails--216b8"},l.createElement("div",{className:"index-module--recentSearches1--5aab8"},l.createElement("div",{className:oe},l.createElement("div",{className:He},l.createElement("div",{className:ve},l.createElement("b",{className:Te},"SIN")),l.createElement("img",{className:me,alt:"",src:"/duration.svg"}),l.createElement("div",{className:$e},l.createElement("b",{className:he},"LAX"))),l.createElement("div",{className:ae},l.createElement("b",null,"Depart on: "),l.createElement("span",null,"7 Sep 2021"))),l.createElement("div",{className:oe},l.createElement("div",{className:He},l.createElement("div",{className:ve},l.createElement("b",{className:Te},"MY")),l.createElement("img",{className:me,alt:"",src:"/duration1.svg"}),l.createElement("div",{className:$e},l.createElement("b",{className:he},"DUB"))),l.createElement("div",{className:ae},l.createElement("b",null,"Depart on:"),l.createElement("span",null," 9 Sep 2021")))),l.createElement("div",{className:"index-module--prepareMenu--20ade"},l.createElement("div",{className:ze},"Prepare for your trip"),l.createElement("div",{className:"index-module--tripMenus--cff26"},l.createElement("button",{className:Ne,onClick:f},l.createElement("img",{className:be,alt:"",src:"/hotel-icon.svg"}),l.createElement("div",{className:"index-module--hotel1--1420e"},"Hotel")),l.createElement("button",{className:Ne},l.createElement("div",{className:be},l.createElement("div",{className:"index-module--background--0a4d3"}),l.createElement("img",{className:"index-module--ticketIcon--18626",alt:"",src:"/ticket.svg"})),l.createElement("div",{className:_},"Attractions")),l.createElement("button",{className:Ne},l.createElement("img",{className:be,alt:"",src:"/eats-icon.svg"}),l.createElement("div",{className:_},"Eats")),l.createElement("button",{className:Ne},l.createElement("div",{className:be},l.createElement("div",{className:"index-module--background1--80f00"}),l.createElement("img",{className:"index-module--trainIcon--d3061",alt:"",src:"/vector1.svg"})),l.createElement("div",{className:_},"Commute")),l.createElement("button",{className:Ne},l.createElement("div",{className:"index-module--taxiIcon--91cb8"},l.createElement("div",{className:"index-module--background2--bfa9f"}),l.createElement("img",{className:"index-module--taxiIcon1--7b4ee",alt:"",src:"/vector2.svg"})),l.createElement("div",{className:"index-module--taxi1--0faf0"},"Taxi")),l.createElement("button",{className:Ne},l.createElement("div",{className:be},l.createElement("div",{className:"index-module--background3--290c3"}),l.createElement("img",{className:"index-module--movieIcon--aad01",alt:"",src:"/vector3.svg"})),l.createElement("div",{className:_},"Movies"))))))),l.createElement("div",{className:"index-module--popDestinationsMain--e1e46"},l.createElement("div",{className:"index-module--destinationsTitles--0214d"},l.createElement("div",{className:"index-module--titleContainer--466d7"},l.createElement("b",{className:ze},"Plan your next trip"),l.createElement("b",{className:"index-module--mostPopularDestinations--bc08c"},"Most Popular Destinations")),l.createElement("button",{className:"index-module--viewAllTop--aa40f"},l.createElement("div",{className:"index-module--viewAllDestinations--8289b"},"View all destinations"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright.svg"}))),l.createElement("div",{className:"index-module--cardsContainer--7083f"},l.createElement("button",{className:Q},l.createElement("div",{className:Re},l.createElement("img",{className:Fe,alt:"",src:"/parisimage@2x.png"}),l.createElement("div",{className:le},l.createElement("b",{className:Pe},"Paris"),l.createElement("div",{className:ne},l.createElement("div",{className:ce},"$699"),l.createElement("div",{className:ue},"from"))))),l.createElement("button",{className:Q},l.createElement("div",{className:Re},l.createElement("img",{className:Fe,alt:"",src:"/greeceimage@2x.png"}),l.createElement("div",{className:le},l.createElement("b",{className:Pe},"Greece"),l.createElement("div",{className:"index-module--details1--04585"},l.createElement("div",{className:"index-module--div1--38b66"},"$1079"),l.createElement("div",{className:"index-module--from1--e44e0"},"from"))))),l.createElement("button",{className:Q},l.createElement("div",{className:Re},l.createElement("img",{className:Fe,alt:"",src:"/norwayimage@2x.png"}),l.createElement("div",{className:le},l.createElement("b",{className:Pe},"Norway"),l.createElement("div",{className:ne},l.createElement("div",{className:ce},"$895"),l.createElement("div",{className:ue},"from"))))),l.createElement("button",{className:Q},l.createElement("div",{className:Re},l.createElement("img",{className:Fe,alt:"",src:"/tuscanyimage@2x.png"}),l.createElement("div",{className:le},l.createElement("b",{className:Pe},"Tuscany"),l.createElement("div",{className:"index-module--details3--3c05b"},l.createElement("div",{className:"index-module--div3--aba84"},"$1245"),l.createElement("div",{className:"index-module--from3--4449d"},"from")))))),l.createElement("div",{className:"index-module--viewAllBottom--31185"},l.createElement("div",{className:"index-module--viewAllDestinations1--150a2"},"View all destinations"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright1.svg"}))),l.createElement("div",{className:"index-module--recommendedHolidaysContainer--4b31d"},l.createElement("div",{className:Ae},l.createElement("b",{className:"index-module--recommendedHolidays--5074a"},"Recommended Holidays"),l.createElement("button",{className:"index-module--viewAllHolidaysParent--56dfa"},l.createElement("div",{className:"index-module--viewAllHolidays--0d49c"},"View all holidays"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright2.svg"}))),l.createElement("div",{className:"index-module--recCardsContainer--b11a8"},l.createElement("button",{className:De},l.createElement("img",{className:_e,alt:"",src:"/unsplash5mv818tzxeo1@2x.png"}),l.createElement("div",{className:Ee},l.createElement("div",{className:Ae},l.createElement("div",{className:Y},l.createElement("div",{className:W},"Bali"),l.createElement("div",{className:ee},"4D3N")),l.createElement("div",{className:se},"$899")))),l.createElement("button",{className:De},l.createElement("img",{className:_e,alt:"",src:"/switzerlandimage@2x.png"}),l.createElement("div",{className:Ee},l.createElement("div",{className:Ae},l.createElement("div",{className:Y},l.createElement("div",{className:W},"Swiss"),l.createElement("div",{className:ee},"6D5N")),l.createElement("div",{className:se},"$900")))),l.createElement("button",{className:"index-module--recCard3--14eda"},l.createElement("img",{className:_e,alt:"",src:"/boracayimage@2x.png"}),l.createElement("div",{className:Ee},l.createElement("div",{className:Ae},l.createElement("div",{className:Y},l.createElement("div",{className:W},"Boracay"),l.createElement("div",{className:ee},"5D4N")),l.createElement("div",{className:se},"$699")))),l.createElement("button",{className:"index-module--recCard4--94c32"},l.createElement("img",{className:_e,alt:"",src:"/palawanimage@2x.png"}),l.createElement("div",{className:Ee},l.createElement("div",{className:Ae},l.createElement("div",{className:Y},l.createElement("div",{className:W},"Palawan"),l.createElement("div",{className:ee},"4D3N")),l.createElement("div",{className:se},"$789"))))),l.createElement("div",{className:"index-module--viewAllBottom1--c8d0c"},l.createElement("div",{className:"index-module--viewAllHolidays1--38a4a"},"View all holidays"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright3.svg"}))),l.createElement("div",{className:"index-module--popularStays--79e75"},l.createElement("div",{className:"index-module--popularStaysHeader--11910"},l.createElement("div",{className:"index-module--popularStaysTitle--fc1ae"},l.createElement("b",{className:"index-module--popularStays1--256d1"},"Popular Stays")),l.createElement("button",{className:"index-module--viewAllStaysButton--61bb1",onClick:h},l.createElement("div",{className:"index-module--viewAllStays--48b6d"},"View all stays"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright4.svg"}))),l.createElement("div",{className:"index-module--hotelCards--79044"},l.createElement("div",{className:xe},l.createElement("div",{className:pe},l.createElement("img",{className:ye,alt:"",src:"/unsplashrlwe8f8anoc1@2x.png"}),l.createElement("div",{className:je},l.createElement("div",{className:Oe},l.createElement("div",{className:re},"Entire bungalow"),l.createElement("b",{className:Ce},"Matterhorn Suites"),l.createElement("div",{className:we},"$575/night")),l.createElement("img",{className:We,alt:"",src:"/video1.svg",onClick:C})),l.createElement("div",{className:Be},l.createElement("div",{className:Me},"(60 reviews)"),l.createElement("div",{className:Ie},l.createElement("div",{className:ie},"4.9"),l.createElement("img",{className:qe,alt:"",src:"/vector4.svg"}))),l.createElement("button",{className:ke},l.createElement("div",{className:G},"More details")))),l.createElement("div",{className:xe},l.createElement("div",{className:pe},l.createElement("img",{className:ye,alt:"",src:"/unsplashtsn8bpopveo@2x.png"}),l.createElement("div",{className:"index-module--stayDetails1--312c4"},l.createElement("div",{className:Oe},l.createElement("div",{className:re},"2-Story beachfront suite"),l.createElement("b",{className:Ce},"Discovery Shores"),l.createElement("div",{className:we},"$360/night")),l.createElement("img",{className:We,alt:"",src:"/video2.svg",onClick:k})),l.createElement("div",{className:Be},l.createElement("div",{className:Me},"(116 reviews)"),l.createElement("div",{className:Ie},l.createElement("div",{className:ie},"4.8"),l.createElement("img",{className:qe,alt:"",src:"/vector5.svg"}))),l.createElement("button",{className:ke},l.createElement("div",{className:G},"More details")))),l.createElement("div",{className:xe},l.createElement("div",{className:"index-module--hotelCard4--0f5bc"},l.createElement("img",{className:ye,alt:"",src:"/unsplashrlwe8f8anoc2@2x.png"}),l.createElement("div",{className:"index-module--stayDetails2--c6056"},l.createElement("div",{className:Oe},l.createElement("div",{className:re},"Single deluxe hut"),l.createElement("b",{className:V},"Arctic Hut "),l.createElement("div",{className:we},"$420/night")),l.createElement("img",{className:We,alt:"",src:"/video2.svg",onClick:Z})),l.createElement("div",{className:Be},l.createElement("div",{className:"index-module--reviews2--aaa20"},"(78 reviews)"),l.createElement("div",{className:"index-module--parent3--94d13"},l.createElement("div",{className:"index-module--div10--64703"},"4.7"),l.createElement("img",{className:"index-module--vectorIcon2--92eb7",alt:"",src:"/vector6.svg"}))),l.createElement("button",{className:ke},l.createElement("div",{className:G},"More details")))),l.createElement("div",{className:"index-module--hotelCard41--4aba8"},l.createElement("div",{className:"index-module--hotelCard5--c1c96"},l.createElement("img",{className:ye,alt:"",src:"/unsplashyqrybvxug5q@2x.png"}),l.createElement("div",{className:je},l.createElement("div",{className:Oe},l.createElement("div",{className:re},"Deluxe King Room"),l.createElement("b",{className:V},"Lake Louise Inn"),l.createElement("div",{className:we},"$244/night")),l.createElement("img",{className:We,alt:"",src:"/video1.svg",onClick:I})),l.createElement("div",{className:Be},l.createElement("div",{className:Me},"(63 reviews)"),l.createElement("div",{className:Ie},l.createElement("div",{className:ie},"4.6"),l.createElement("img",{className:qe,alt:"",src:"/vector7.svg"}))),l.createElement("button",{className:ke},l.createElement("div",{className:G},"More details"))))),l.createElement("div",{className:"index-module--mobileViewAllStays--9171c"},l.createElement("div",{className:"index-module--viewAllStays1--625e9"},"View all stays"),l.createElement("img",{className:Ze,alt:"",src:"/arrowright5.svg"})))),l.createElement("div",{className:"index-module--footerSection--4505f"},l.createElement("div",{className:"index-module--subscribeSection--28235"},l.createElement("img",{className:"index-module--subscribeSectionBackground--24dc0",alt:"",src:"/subscribe-section-background@2x.png"}),l.createElement("div",{className:"index-module--shareYourTravelsForm--8097c"},l.createElement("div",{className:"index-module--formHeader--35076"},l.createElement("b",{className:ze},"subscribe to our newsletter"),l.createElement("b",{className:"index-module--formTitle--23631"},"Get weekly updates")),l.createElement("div",{className:"index-module--form--655cf"},l.createElement("div",{className:de},l.createElement("div",{className:"index-module--fillInYour--fe8d8"},"Fill in your details to join the party!")),l.createElement("div",{className:"index-module--formFields--e9e42"},l.createElement("div",{className:de},l.createElement(M.Z,{className:fe,color:"primary",variant:"outlined",type:"text",label:"Your name",size:"medium",margin:"none"})),l.createElement("div",{className:de},l.createElement(M.Z,{className:fe,color:"primary",variant:"outlined",type:"text",label:"Email address",size:"medium",margin:"none"}))),l.createElement("button",{className:"index-module--button5--3ae7f"},l.createElement("div",{className:"index-module--unstyledbutton--d1fca"},l.createElement("div",{className:"index-module--button6--aa0f8"},"submit")))))),l.createElement("footer",{className:"index-module--footer--9c344"},l.createElement("div",{className:"index-module--fickleflightBio--72066"},l.createElement("img",{className:"index-module--logoIcon--c720e",alt:"",src:"/logo.svg"}),l.createElement("div",{className:"index-module--fickleFlightIs--c1969"},"Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop."),l.createElement("img",{className:"index-module--socialIcons--b5d29",alt:"",src:"/social-icons.svg"})),l.createElement("div",{className:"index-module--footerChild--42c7d"}),l.createElement("div",{className:"index-module--footerLinks--8c571"},l.createElement("div",{className:J},l.createElement("div",{className:"index-module--aboutUs--0b57d"},"About Us"),l.createElement("div",{className:"index-module--company1--19241"},"Company"),l.createElement("div",{className:"index-module--news--4ffb0"},"News"),l.createElement("div",{className:"index-module--careers--43cb8"},"Careers"),l.createElement("div",{className:ge},"How we work")),l.createElement("div",{className:J},l.createElement("div",{className:"index-module--account--e24b0"},"Account"),l.createElement("div",{className:"index-module--support1--7ba9c"},"Support"),l.createElement("div",{className:"index-module--supportCenter--ee02a"},"Support Center"),l.createElement("div",{className:"index-module--faq--52e99"},"FAQ"),l.createElement("div",{className:"index-module--accessibility--92058"},"Accessibility")),l.createElement("div",{className:"index-module--more--920d4"},l.createElement("div",{className:"index-module--covidAdvisory--11084"},"Covid Advisory"),l.createElement("div",{className:"index-module--more1--8d375"},"More"),l.createElement("div",{className:"index-module--airlineFees--16e1c"},"Airline Fees"),l.createElement("div",{className:"index-module--tips--6bcc5"},"Tips"),l.createElement("div",{className:ge},"Quarantine Rules")))))),s&&l.createElement($.Z,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:y},l.createElement(H.Z,{onClose:y})),r&&l.createElement($.Z,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:w},l.createElement(H.Z,{onClose:w})),u&&l.createElement($.Z,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:S},l.createElement(H.Z,{onClose:S})),N&&l.createElement($.Z,{overlayColor:"rgba(0, 0, 0, 0.3)",placement:"Centered",onOutsideClick:P},l.createElement(H.Z,{onClose:P}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-259b1c29e6f74515ac5e.js.map