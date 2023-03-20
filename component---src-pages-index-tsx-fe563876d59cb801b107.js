"use strict";(self.webpackChunkgh_pages_new_4=self.webpackChunkgh_pages_new_4||[]).push([[691],{1570:function(e,a,l){l.d(a,{Z:function(){return k}});var t=l(4942),c=l(3366),s=l(7462),n=l(7294),m=l(5505),i=l(9236),r=l(8230),d=l(9308),o=l(9240),u=l(7113),v=l(7761),E=l(9508),N=l(8400);function p(e){return(0,N.Z)("MuiFormControlLabel",e)}var g=(0,E.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),b=l(1825),x=l(5893),f=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],h=(0,u.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,a){var l=e.ownerState;return[(0,t.Z)({},"& .".concat(g.label),a.label),a.root,a["labelPlacement".concat((0,o.Z)(l.labelPlacement))]]}})((function(e){var a=e.theme,l=e.ownerState;return(0,s.Z)((0,t.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(g.disabled),{cursor:"default"}),"start"===l.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===l.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===l.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,t.Z)({},"& .".concat(g.label),(0,t.Z)({},"&.".concat(g.disabled),{color:(a.vars||a).palette.text.disabled})))})),k=n.forwardRef((function(e,a){var l,t=(0,v.Z)({props:e,name:"MuiFormControlLabel"}),u=t.className,E=t.componentsProps,N=void 0===E?{}:E,g=t.control,k=t.disabled,S=t.disableTypography,Z=t.label,y=t.labelPlacement,P=void 0===y?"end":y,C=t.slotProps,A=void 0===C?{}:C,I=(0,c.Z)(t,f),w=(0,r.Z)(),F=k;void 0===F&&void 0!==g.props.disabled&&(F=g.props.disabled),void 0===F&&w&&(F=w.disabled);var M={disabled:F};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===g.props[e]&&void 0!==t[e]&&(M[e]=t[e])}));var B=(0,b.Z)({props:t,muiFormControl:w,states:["error"]}),R=(0,s.Z)({},t,{disabled:F,labelPlacement:P,error:B.error}),L=function(e){var a=e.classes,l=e.disabled,t=e.labelPlacement,c=e.error,s={root:["root",l&&"disabled","labelPlacement".concat((0,o.Z)(t)),c&&"error"],label:["label",l&&"disabled"]};return(0,i.Z)(s,p,a)}(R),z=null!=(l=A.typography)?l:N.typography,H=Z;return null==H||H.type===d.Z||S||(H=(0,x.jsx)(d.Z,(0,s.Z)({component:"span"},z,{className:(0,m.Z)(L.label,null==z?void 0:z.className),children:H}))),(0,x.jsxs)(h,(0,s.Z)({className:(0,m.Z)(L.root,u),ownerState:R,ref:a},I,{children:[n.cloneElement(g,M),H]}))}))},443:function(e,a,l){l.d(a,{Z:function(){return h}});var t=l(885),c=l(3366),s=l(7462),n=l(7294),m=l(5505),i=l(9236),r=l(9240),d=l(7113),o=l(2583),u=l(8230),v=l(4317),E=l(9508),N=l(8400);function p(e){return(0,N.Z)("PrivateSwitchBase",e)}(0,E.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var g=l(5893),b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,d.ZP)(v.Z)((function(e){var a=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),f=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),h=n.forwardRef((function(e,a){var l=e.autoFocus,n=e.checked,d=e.checkedIcon,v=e.className,E=e.defaultChecked,N=e.disabled,h=e.disableFocusRipple,k=void 0!==h&&h,S=e.edge,Z=void 0!==S&&S,y=e.icon,P=e.id,C=e.inputProps,A=e.inputRef,I=e.name,w=e.onBlur,F=e.onChange,M=e.onFocus,B=e.readOnly,R=e.required,L=void 0!==R&&R,z=e.tabIndex,H=e.type,j=e.value,O=(0,c.Z)(e,b),T=(0,o.Z)({controlled:n,default:Boolean(E),name:"SwitchBase",state:"checked"}),D=(0,t.Z)(T,2),X=D[0],$=D[1],V=(0,u.Z)(),W=N;V&&void 0===W&&(W=V.disabled);var _="checkbox"===H||"radio"===H,q=(0,s.Z)({},e,{checked:X,disabled:W,disableFocusRipple:k,edge:Z}),G=function(e){var a=e.classes,l=e.checked,t=e.disabled,c=e.edge,s={root:["root",l&&"checked",t&&"disabled",c&&"edge".concat((0,r.Z)(c))],input:["input"]};return(0,i.Z)(s,p,a)}(q);return(0,g.jsxs)(x,(0,s.Z)({component:"span",className:(0,m.Z)(G.root,v),centerRipple:!0,focusRipple:!k,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){M&&M(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){w&&w(e),V&&V.onBlur&&V.onBlur(e)},ownerState:q,ref:a},O,{children:[(0,g.jsx)(f,(0,s.Z)({autoFocus:l,checked:n,defaultChecked:E,className:G.input,disabled:W,id:_?P:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var a=e.target.checked;$(a),F&&F(e,a)}},readOnly:B,ref:A,required:L,ownerState:q,tabIndex:z,type:H},"checkbox"===H&&void 0===j?{}:{value:j},C)),X?d:y]}))}))},1166:function(e,a,l){l.r(a),l.d(a,{default:function(){return Ie}});var t=l(7294),c=l(6287),s=l(4435),n=l(1570),m=l(4942),i=l(3366),r=l(7462),d=l(5505),o=l(9236),u=l(7663),v=l(443),E=l(2067),N=l(5893),p=(0,E.Z)((0,N.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),g=(0,E.Z)((0,N.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=(0,E.Z)((0,N.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),x=l(9240),f=l(7761),h=l(7113),k=l(9508),S=l(8400);function Z(e){return(0,S.Z)("MuiCheckbox",e)}var y=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),P=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],C=(0,h.ZP)(v.Z,{shouldForwardProp:function(e){return(0,h.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,a){var l=e.ownerState;return[a.root,l.indeterminate&&a.indeterminate,"default"!==l.color&&a["color".concat((0,x.Z)(l.color))]]}})((function(e){var a,l=e.theme,t=e.ownerState;return(0,r.Z)({color:(l.vars||l).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:l.vars?"rgba(".concat("default"===t.color?l.vars.palette.action.activeChannel:l.vars.palette.primary.mainChannel," / ").concat(l.vars.palette.action.hoverOpacity,")"):(0,u.Fq)("default"===t.color?l.palette.action.active:l.palette[t.color].main,l.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(a={},(0,m.Z)(a,"&.".concat(y.checked,", &.").concat(y.indeterminate),{color:(l.vars||l).palette[t.color].main}),(0,m.Z)(a,"&.".concat(y.disabled),{color:(l.vars||l).palette.action.disabled}),a))})),A=(0,N.jsx)(g,{}),I=(0,N.jsx)(p,{}),w=(0,N.jsx)(b,{}),F=t.forwardRef((function(e,a){var l,c,s=(0,f.Z)({props:e,name:"MuiCheckbox"}),n=s.checkedIcon,m=void 0===n?A:n,u=s.color,v=void 0===u?"primary":u,E=s.icon,p=void 0===E?I:E,g=s.indeterminate,b=void 0!==g&&g,h=s.indeterminateIcon,k=void 0===h?w:h,S=s.inputProps,y=s.size,F=void 0===y?"medium":y,M=s.className,B=(0,i.Z)(s,P),R=b?k:p,L=b?k:m,z=(0,r.Z)({},s,{color:v,indeterminate:b,size:F}),H=function(e){var a=e.classes,l=e.indeterminate,t=e.color,c={root:["root",l&&"indeterminate","color".concat((0,x.Z)(t))]},s=(0,o.Z)(c,Z,a);return(0,r.Z)({},a,s)}(z);return(0,N.jsx)(C,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":b},S),icon:t.cloneElement(R,{fontSize:null!=(l=R.props.fontSize)?l:F}),checkedIcon:t.cloneElement(L,{fontSize:null!=(c=L.props.fontSize)?c:F}),ownerState:z,ref:a,className:(0,d.Z)(H.root,M)},B,{classes:H}))})),M=l(5980),B=l(8650),R=l(6836),L=l(1082),z="index-module--airline--1f599",H="index-module--airlinePrice--4c66e",j="index-module--airlineSection--4522b",O="index-module--airlinelogoIcon--108a2",T="index-module--am--717d4",D="index-module--arrival--af3c2",X="index-module--arrivalDetails--f212f",$="index-module--arrname--98398",V="index-module--bookingCard--196aa",W="index-module--calenderParent--04932",_="index-module--classIcon--b9ae1",q="index-module--company--265da",G="index-module--component1formcheckbox--1f0ed",Y="index-module--component1formcheckbox1--dac8e",K="index-module--departure--7c434",J="index-module--departureDetails--f3f8f",Q="index-module--departureField--6232c",U="index-module--depcode--13f2f",ee="index-module--depname--997da",ae="index-module--details--7fa65",le="index-module--expedia--22279",te="index-module--explore--28955",ce="index-module--flightCard--9b129",se="index-module--flightDetailsSection--3f65b",ne="index-module--flightIcon--85820",me="index-module--flightclass--45d05",ie="index-module--flightduration--90a73",re="index-module--flighticon--6ef91",de="index-module--formText--58d27",oe="index-module--formTitleSubtext--1340c",ue="index-module--frameChild--d5530",ve="index-module--h55mNonStop--4ce31",Ee="index-module--howWeWork--8e790",Ne="index-module--input--2f049",pe="index-module--inputGroup--29d34",ge="index-module--japanIcon--2bda8",be="index-module--locations--3757a",xe="index-module--price--4f6cc",fe="index-module--priceSection--5a3d2",he="index-module--priceSectionChild--2668f",ke="index-module--provider--79312",Se="index-module--s730--a1de5",Ze="index-module--sin--91de9",ye="index-module--sin1--992f3",Pe="index-module--singaporeAirlines--2d422",Ce="index-module--timeago--5115c",Ae="index-module--turkishIcon--5c43c",Ie=function(){var e=(0,t.useState)(null),a=e[0],l=e[1],m=(0,t.useCallback)((function(){(0,L.c4)("/homepage")}),[]),i=(0,t.useCallback)((function(){(0,L.c4)("/homepage")}),[]),r=(0,t.useCallback)((function(){(0,L.c4)("/hotels-page")}),[]);return t.createElement(M._,{dateAdapter:R.H},t.createElement("div",{className:"index-module--resultsPage--48c88"},t.createElement("header",{className:"index-module--topHeader--bb45c"},t.createElement("div",{className:"index-module--topContainer--f0c55"},t.createElement("button",{className:"index-module--fickleflightLogo--a5064",onClick:m},t.createElement("img",{className:"index-module--symbolsIcon--3de9c",alt:"",src:"/symbols1.svg"})),t.createElement("div",{className:"index-module--navigationRight--e87e8"},t.createElement("div",{className:"index-module--navigationMenu--c6d64"},t.createElement("div",{className:te,onClick:i},"Explore"),t.createElement("button",{className:"index-module--search--f489e"},"Search"),t.createElement("div",{className:te,onClick:r},"Hotels"),t.createElement("button",{className:"index-module--offers--a9bec"},"Offers")),t.createElement("div",{className:"index-module--accountSection--014a2"},t.createElement("img",{className:"index-module--hamburgerMenuIcon--de234",alt:"",src:"/notification2.svg"}),t.createElement("img",{className:"index-module--notificationBellIcon--3578d",alt:"",src:"/notification3.svg"}),t.createElement("img",{className:"index-module--unsplashd1upkifd04aIcon--2868f",alt:"",src:"/top_avatar1@2x.png"}))))),t.createElement("div",{className:"index-module--searchFormSection--a86ff"},t.createElement("div",{className:"index-module--searchContainer--6b737"},t.createElement("div",{className:"index-module--bannerGradient--42e5c"}),t.createElement("img",{className:"index-module--bannerBackgroundIcon--56f76",alt:"",src:"/banner-background@2x.png"}),t.createElement("div",{className:"index-module--searchSection--cd0a7"},t.createElement("div",{className:"index-module--title--16c47"},t.createElement("div",{className:"index-module--whereAreYou--5f42e"},"Where are you off too?")),t.createElement("div",{className:"index-module--searchForm--a4a38"},t.createElement("div",{className:"index-module--inputsRow--af1cb"},t.createElement("div",{className:pe},t.createElement(c.Z,{className:Q,disablePortal:!0,options:["Singapore (SIN)","Sydney (SYD)","Siem Reap (REP)","Shanghai (PVG)Sanya (SYX)"],renderInput:function(e){return t.createElement(s.Z,Object.assign({},e,{color:"primary",label:"Departure",variant:"outlined",placeholder:"",helperText:""}))},defaultValue:"Singapore -  Changi (SIN)",size:"medium"})),t.createElement("div",{className:pe},t.createElement(c.Z,{className:Q,sx:{width:"100%"},disablePortal:!0,options:["Clark (CRK)","Launceston (LST)","Kalibo (KLO)","Colombo CMB","Melbourne (AVV)","Los Angeles (LA)"],renderInput:function(e){return t.createElement(s.Z,Object.assign({},e,{color:"primary",label:"Arrival",variant:"outlined",placeholder:"",helperText:""}))},defaultValue:"Los Angeles (LA)",size:"medium"})),t.createElement("div",{className:pe},t.createElement("div",{className:Q},t.createElement(B.M,{label:"Date",value:a,onChange:function(e){l(e)},renderInput:function(e){return t.createElement(s.Z,Object.assign({},e,{color:"primary",variant:"outlined",size:"medium",renderInput:{placeholder:"01/05/2022"},helperText:"",fullWidth:!0}))}})))),t.createElement("div",{className:"index-module--buttonGroup--75f72"},t.createElement("button",{className:"index-module--searchFlightsButton--f9b6b"},t.createElement("div",{className:"index-module--button--d758f"},"Search flights"))))))),t.createElement("div",{className:"index-module--searchResults--a7632"},t.createElement("div",{className:"index-module--searchFilters--77625"},t.createElement("div",{className:"index-module--resultsSummary--64c20"},t.createElement("div",{className:"index-module--resultsParent--c11f2"},t.createElement("div",{className:"index-module--results--4c6a5"},"10 out of 177 Results"),t.createElement("img",{className:ue,alt:"",src:"/vector-2.svg"}))),t.createElement("div",{className:"index-module--stops--b053a"},t.createElement("b",{className:"index-module--results1--09692"},"Stops"),t.createElement(n.Z,{className:G,label:"1 Stop",labelPlacement:"end",control:t.createElement(F,{size:"medium"})}),t.createElement(n.Z,{className:Y,label:"2 Stops",labelPlacement:"end",control:t.createElement(F,{size:"medium"})})),t.createElement("div",{className:"index-module--bookingOptions--1dc55"},t.createElement("b",{className:"index-module--results2--7f221"},"Booking Options"),t.createElement(n.Z,{className:G,label:"Book on Fickleflight",labelPlacement:"end",control:t.createElement(F,{size:"medium"})}),t.createElement(n.Z,{className:Y,label:"Official Airline Websites",labelPlacement:"end",control:t.createElement(F,{size:"medium"})})),t.createElement("div",{className:"index-module--flightExperience--31c19"},t.createElement("b",{className:"index-module--results3--24a6b"},"Flight Experience"),t.createElement(n.Z,{className:G,label:"No overnight flights",labelPlacement:"end",control:t.createElement(F,{color:"primary",size:"medium"})}),t.createElement(n.Z,{className:Y,label:"No long stop-overs",labelPlacement:"end",control:t.createElement(F,{color:"primary",size:"medium"})})),t.createElement("img",{className:ue,alt:"",src:"/vector-2.svg"}),t.createElement("div",{className:"index-module--airlines--f210a"},t.createElement("b",{className:"index-module--results4--1b927"},"Airlines"),t.createElement(n.Z,{className:G,label:"Singapore Airlines",labelPlacement:"end",control:t.createElement(F,{color:"primary",size:"medium"})}),t.createElement(n.Z,{className:Y,label:"Qatar Airways",labelPlacement:"end",control:t.createElement(F,{color:"primary",size:"medium"})}))),t.createElement("div",{className:"index-module--resultsSection--f07d8"},t.createElement("div",{className:"index-module--flightCards--427ec"},t.createElement("div",{className:"index-module--results5--ba3c6"},"10 out of 177 Results"),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:Ae,alt:"",src:"/turkish.svg"}),t.createElement("div",{className:Pe},"Turkish Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"11:35 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"33H 10M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"4:45 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 723"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:Ae,alt:"",src:"/sia.svg"}),t.createElement("div",{className:Pe},"Singapore Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"8:45 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:"index-module--flightduration1--9237a"},t.createElement("img",{className:"index-module--flighticon1--7872b",alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"15H 10M, 2-stops")),t.createElement("div",{className:X},t.createElement("div",{className:T},"7:55 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 900"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:ge,alt:"",src:"/japan.svg"}),t.createElement("div",{className:Pe},"Japan Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"8:20 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"17H 30M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"9:50 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 859"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:ge,alt:"",src:"/ana.svg"}),t.createElement("div",{className:Pe},"ANA")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"6:35 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"19H 15M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"9:50 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 936"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:"index-module--americanAirlinesIcon--94262",alt:"",src:"/americanairlines.svg"}),t.createElement("div",{className:Pe},"American Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"8:20 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"17H 30M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"9:50 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 936"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:Ae,alt:"",src:"/turkish.svg"}),t.createElement("div",{className:Pe},"Turkish Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"11:35 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"33H 10M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"4:45 PM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 673"))),t.createElement("div",{className:ce},t.createElement("div",{className:j},t.createElement("img",{className:ge,alt:"",src:"/japan1.svg"}),t.createElement("div",{className:Pe},"Japan Airlines")),t.createElement("div",{className:se},t.createElement("div",{className:J},t.createElement("div",{className:T},"10:25 PM"),t.createElement("div",{className:Ze},"SIN")),t.createElement("div",{className:ie},t.createElement("img",{className:re,alt:"",src:"/flighticon.svg"}),t.createElement("div",{className:ve},"26H 45M, 1-stop")),t.createElement("div",{className:X},t.createElement("div",{className:T},"9:10 AM"),t.createElement("div",{className:ye},"LAX"))),t.createElement("div",{className:fe},t.createElement("img",{className:he,alt:"",src:"/vector-1.svg"}),t.createElement("b",{className:Se},"S$ 859"))),t.createElement("div",{className:"index-module--primaryButton--c3f8c"},t.createElement("div",{className:"index-module--primaryButtonChild--d0117"}),t.createElement("div",{className:"index-module--searchFlights--04207"},"Show more results"))),t.createElement("div",{className:"index-module--recentlyBooked--90a82"},t.createElement("div",{className:"index-module--recentlyBookedTitle--da4e5"},t.createElement("b",{className:oe},"Recently booked"),t.createElement("img",{className:"index-module--recentlyBookedTitleChild--f06cb",alt:"",src:"/vector-21.svg"})),t.createElement("div",{className:"index-module--bookingCards--57ac7"},t.createElement("div",{className:V},t.createElement("div",{className:H},t.createElement("div",{className:z},t.createElement("img",{className:O,alt:"",src:"/icon.svg"}),t.createElement("div",{className:me},"Singapore Airlines")),t.createElement("div",{className:xe},"$1128")),t.createElement("div",{className:be},t.createElement("div",{className:K},t.createElement("div",{className:U},"SIN"),t.createElement("div",{className:ee},"Singapore")),t.createElement("img",{className:ne,alt:"",src:"/flight-icon.svg"}),t.createElement("div",{className:D},t.createElement("div",{className:U},"LAX"),t.createElement("div",{className:$},"Los Angeles"))),t.createElement("div",{className:ae},t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/class-icon.svg"}),t.createElement("div",{className:me},"Economy")),t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/calender.svg"}),t.createElement("div",{className:me},"2 Adults"))),t.createElement("div",{className:ke},t.createElement("div",{className:me},t.createElement("span",null,"Booked on "),t.createElement("span",{className:le},"Expedia")),t.createElement("div",{className:Ce},"1s ago!"))),t.createElement("div",{className:V},t.createElement("div",{className:H},t.createElement("div",{className:z},t.createElement("img",{className:O,alt:"",src:"/icon1.svg"}),t.createElement("div",{className:me},"American Airlines")),t.createElement("div",{className:xe},"$1024")),t.createElement("div",{className:be},t.createElement("div",{className:K},t.createElement("div",{className:U},"SFO"),t.createElement("div",{className:ee},"San Francisco")),t.createElement("img",{className:ne,alt:"",src:"/flight-icon.svg"}),t.createElement("div",{className:D},t.createElement("div",{className:U},"SIN"),t.createElement("div",{className:$},"Singapore"))),t.createElement("div",{className:ae},t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/class-icon.svg"}),t.createElement("div",{className:me},"First Class")),t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/calender1.svg"}),t.createElement("div",{className:me},"1 Adults"))),t.createElement("div",{className:ke},t.createElement("div",{className:me},t.createElement("span",null,"Booked on "),t.createElement("span",{className:le},"Kayak")),t.createElement("div",{className:Ce},"2s ago!"))),t.createElement("div",{className:V},t.createElement("div",{className:H},t.createElement("div",{className:z},t.createElement("img",{className:O,alt:"",src:"/icon2.svg"}),t.createElement("div",{className:me},"Japan Airlines")),t.createElement("div",{className:xe},"$2996")),t.createElement("div",{className:be},t.createElement("div",{className:K},t.createElement("div",{className:U},"PHX"),t.createElement("div",{className:ee},"Phoenix")),t.createElement("img",{className:ne,alt:"",src:"/flight-icon.svg"}),t.createElement("div",{className:D},t.createElement("div",{className:U},"DXB"),t.createElement("div",{className:ee},"Dubai"))),t.createElement("div",{className:ae},t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/class-icon.svg"}),t.createElement("div",{className:me},"Economy")),t.createElement("div",{className:W},t.createElement("img",{className:_,alt:"",src:"/calender2.svg"}),t.createElement("div",{className:me},"3 Adults"))),t.createElement("div",{className:ke},t.createElement("div",{className:me},t.createElement("span",null,"Booked on "),t.createElement("span",{className:le},"Skyscanner")),t.createElement("div",{className:Ce},"3s ago!"))),t.createElement("div",{className:"index-module--showMore--948f9"},t.createElement("div",{className:me},"Show more"),t.createElement("img",{className:_,alt:"",src:"/icon--back.svg"})))))),t.createElement("div",{className:"index-module--footerSection--4505f"},t.createElement("div",{className:de},t.createElement("div",{className:"index-module--newsletterFormSection--b54cb"},t.createElement("img",{className:"index-module--newsletterSectionBackground--d0e08",alt:"",src:"/newsletter-section-background@2x.png"}),t.createElement("div",{className:"index-module--subscribeForm--9bcd1"},t.createElement("div",{className:"index-module--formHeader--35076"},t.createElement("b",{className:oe},"subscribe to our newsletter"),t.createElement("b",{className:"index-module--formTitle--23631"},"Get weekly updates")),t.createElement("div",{className:"index-module--form--655cf"},t.createElement("div",{className:de},t.createElement("div",{className:"index-module--fillInYour--fe8d8"},"Fill in your details to join the party!")),t.createElement("div",{className:"index-module--formFields--e9e42"},t.createElement("div",{className:de},t.createElement(s.Z,{className:Ne,color:"primary",variant:"outlined",type:"text",label:"Your name",size:"medium",margin:"none"})),t.createElement("div",{className:de},t.createElement(s.Z,{className:Ne,color:"primary",variant:"outlined",type:"text",label:"Email address",size:"medium",margin:"none"}))),t.createElement("button",{className:"index-module--button1--7390b"},t.createElement("div",{className:"index-module--unstyledbutton--d1fca"},t.createElement("div",{className:"index-module--button2--50eec"},"submit")))))),t.createElement("footer",{className:"index-module--footer--9c344"},t.createElement("div",{className:"index-module--fickleflightBio--72066"},t.createElement("img",{className:"index-module--logoIcon--c720e",alt:"",src:"/logo1.svg"}),t.createElement("div",{className:"index-module--fickleFlightIs--c1969"},"Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop."),t.createElement("img",{className:"index-module--socialIcons--b5d29",alt:"",src:"/social-icons1.svg"})),t.createElement("div",{className:"index-module--seperator--a64cd"}),t.createElement("div",{className:"index-module--footerLinks--8c571"},t.createElement("div",{className:q},t.createElement("div",{className:"index-module--aboutUs--0b57d"},"About Us"),t.createElement("div",{className:"index-module--company1--19241"},"Company"),t.createElement("div",{className:"index-module--news--4ffb0"},"News"),t.createElement("div",{className:"index-module--careers--43cb8"},"Careers"),t.createElement("div",{className:Ee},"How we work")),t.createElement("div",{className:q},t.createElement("div",{className:"index-module--account--e24b0"},"Account"),t.createElement("div",{className:"index-module--support1--7ba9c"},"Support"),t.createElement("div",{className:"index-module--supportCenter--ee02a"},"Support Center"),t.createElement("div",{className:"index-module--faq--52e99"},"FAQ"),t.createElement("div",{className:"index-module--accessibility--92058"},"Accessibility")),t.createElement("div",{className:"index-module--more--920d4"},t.createElement("div",{className:"index-module--covidAdvisory--11084"},"Covid Advisory"),t.createElement("div",{className:"index-module--more1--8d375"},"More"),t.createElement("div",{className:"index-module--airlineFees--16e1c"},"Airline Fees"),t.createElement("div",{className:"index-module--tips--6bcc5"},"Tips"),t.createElement("div",{className:Ee},"Quarantine Rules"))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fe563876d59cb801b107.js.map