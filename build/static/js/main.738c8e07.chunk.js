(this.webpackJsonprecipe_app=this.webpackJsonprecipe_app||[]).push([[0],{31:function(e,t,c){},5:function(e,t,c){e.exports={Input:"App_Input__3B7jX",Button:"App_Button__cBREv",App:"App_App__6scZG",Recipe:"App_Recipe__2jaia",item:"App_item__ZOrEb"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),i=c.n(a),r=c(19),s=c.n(r),l=(c(31),c(25)),o=c(10),u=c.n(o),p=c(20),d=c(4),j=c(5),h=c.n(j),b=function(e){return Object(n.jsxs)("div",{className:h.a.item,children:[Object(n.jsx)("h3",{style:{textAlign:"center"},children:e.title}),Object(n.jsx)("img",{src:e.url,alt:"not available",style:{borderRadius:"10px",width:"100%",margin:"auto",maxHeight:"35%"}}),Object(n.jsxs)("h4",{style:{marginTop:"10px",textAlign:"center",color:"black"},children:["calories:",e.cal.toFixed(2)]}),Object(n.jsx)("h4",{style:{color:"black",textAlign:"center"},children:"Ingredients"}),Object(n.jsx)("ul",{children:e.ingredients.map((function(e){return Object(n.jsx)("li",{children:e.text})}))})]})},x=c(9),O=c.n(x),f=function(e){var t=Object(a.useState)("none"),c=Object(d.a)(t,2),i=c[0],r=c[1],s=Object(a.useState)("0"),l=Object(d.a)(s,2),o=l[0],u=l[1],p=Object(a.useState)("none"),j=Object(d.a)(p,2),h=j[0],b=j[1],x=e.healthLabels.map((function(e){return e.value}));return Object(n.jsxs)("div",{className:O.a.container,children:[Object(n.jsx)("button",{className:O.a.header,onClick:function(){"1"===o?(u("0"),b("none")):(u("1"),b("all"))},children:"Filters"}),Object(n.jsxs)("ul",{style:{opacity:o,marginTop:"10%",padding:"0px",listStyle:"none",flexDirection:"column",width:"100%",backgroundColor:"white",borderRadius:"5px",pointerEvents:h},children:[Object(n.jsx)("li",{onClick:function(){r("none"===i&&"1"===o?"flex":"none")},children:"Health Labels"}),Object(n.jsx)("form",{className:O.a.listform,style:{display:i,flexDirection:"column",alignItems:"flex-start",height:"120px",overflowY:"scroll"},children:x.map((function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"checkbox",name:t,value:t,onClick:e.HealthOptions}),Object(n.jsx)("label",{children:t})]})}))})]})]})},v=c(21),m=c.n(v),g=c(22);var k=function(){var e=[{value:"vegan",checked:!1},{value:"alcohol-free",checked:!1},{value:"vegetarian",checked:!1},{value:"balanced",checked:!1},{value:"high-fiber",checked:!1},{value:"high protein",checked:!1},{value:"low-carb",checked:!1},{value:"low-fat",checked:!1},{value:"peanut-free",checked:!1},{value:"sugar-conscious",checked:!1},{value:"tree-nut-free",checked:!1}],t=Object(a.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1],s=Object(a.useState)(""),o=Object(d.a)(s,2),j=o[0],x=o[1],O=Object(a.useState)(""),v=Object(d.a)(O,2),k=v[0],y=v[1],_=Object(a.useState)(e),w=Object(d.a)(_,2),S=w[0],A=w[1],N=Object(a.useState)([]),C=Object(d.a)(N,2),D=C[0],F=C[1],B=Object(a.useState)("ok"),I=Object(d.a)(B,2),R=I[0],T=I[1];Object(a.useEffect)((function(){var e=!0;(""!==k||D.length)&&e&&E(),e=!1}),[k,D]);var E=function(){var e=Object(p.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.stringify({q:k,health:D}),e.next=3,m.a.post("https://recipe---app.herokuapp.com/",t,{headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.data.hits;case 6:n=e.sent,T("undefined"===typeof n?"notok":"ok"),r(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:h.a.App,children:[Object(n.jsx)(g.a,{children:Object(n.jsx)("script",{src:"https://developer.edamam.com/attribution/badge.js"})}),Object(n.jsxs)("div",{style:{display:"flex",flexFlow:"row"},children:[Object(n.jsx)(f,{healthLabels:S,HealthOptions:function(t){(e=Object(l.a)(S)).forEach((function(e){t.target.value===e.value&&(e.checked=!e.checked)}));for(var c=[],n=0;n<e.length;n++)e[n].checked?c.push(e[n].value):c.push(void 0);F(c),A(e)}}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(j)},style:{margin:"auto",marginTop:"0px"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",className:h.a.Input,value:j,onChange:function(e){x(e.target.value)}})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",className:h.a.Button,children:"submit"})})]})]}),Object(n.jsxs)("div",{className:h.a.Recipe,children:["ok"===R?i.map((function(e,t){return Object(n.jsx)(b,{title:e.recipe.label,url:e.recipe.image,cal:e.recipe.calories,ingredients:e.recipe.ingredients},t)})):Object(n.jsx)("div",{style:{margin:"auto",width:"fit-content"},children:"Sorry! No Results Matched Your Search"}),"     "]}),Object(n.jsx)("div",{id:"edamam-badge","data-color":"white",style:{marginTop:"100%"}})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),y()},9:function(e,t,c){e.exports={container:"DropDown_container__2zDLJ",header:"DropDown_header__3dwpF"}}},[[54,1,2]]]);
//# sourceMappingURL=main.738c8e07.chunk.js.map