(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),s=n.n(c),a=n(4),l=n(14),i=n(15),o=n(18),j=n(17),b=n(0);var u=function(e){return Object(b.jsx)("div",{id:"tableCloth",children:Object(b.jsx)("table",{className:"table",children:e.children})})},d=n(16),h=n.n(d),p={search:function(){return h.a.get("https://randomuser.me/api/?page=1&results=10&nat=us&seed=0ea9c09d5e32c23d")}};var m=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"table-light",children:[Object(b.jsx)("th",{scope:"col",children:"Email"}),Object(b.jsx)("th",{scope:"col",children:"First"}),Object(b.jsx)("th",{scope:"col",children:"Last"}),Object(b.jsx)("th",{scope:"col",children:"State"})]})}),Object(b.jsx)("tbody",{className:"table-dark table-striped",children:e.people.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:e.email}),Object(b.jsx)("td",{children:e.name.first}),Object(b.jsx)("td",{children:e.name.last}),Object(b.jsx)("td",{children:e.location.state})]},e.id.value)}))})]})};var O=function(e){return Object(b.jsxs)("header",{id:"page-header",children:[Object(b.jsx)("h1",{id:"top",children:"EMPLOYEE DIRECTORY"}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-danger",style:{marginRight:"20px"},onClick:function(){return e.sortBy("name","first",1)},children:"Sort by first name"}),Object(b.jsx)("button",{type:"button",className:"btn btn-primary",style:{marginRight:"20px"},onClick:function(){return e.sortBy("name","last",1)},children:"Sort by last name"}),Object(b.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(){return e.sortBy("location","state",1)},children:"Sort by state"})]})]})};var x=function(e){return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",id:"nameFilter",placeholder:"Filter by last name",name:"nameSearch"}),Object(b.jsx)("button",{type:"submit",onClick:function(t){return e.filterByName(t)},children:"Submit"})]})},f=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={people:[]},e.sortBy=function(t,n,r){var c=Object(a.a)(e.state.people);c.sort((function(e,c){return e[t][n]>c[t][n]?1*r:-1*r})),e.setState({people:c})},e.filterByName=function(t){t.preventDefault();var n=document.getElementById("nameFilter").value,r=Object(a.a)(e.state.people).filter((function(e){return e.name.last.toLowerCase()===n.toLowerCase()}));e.setState({people:r})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.search().then((function(t){console.log(t.data),e.setState({people:t.data.results})}))}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{sortBy:this.sortBy}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(x,{filterByName:this.filterByName}),Object(b.jsx)(u,{children:Object(b.jsx)(m,{people:this.state.people})})]})}}]),n}(r.Component);var y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})};n(42),n(43);s.a.render(Object(b.jsx)(y,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.04e80b46.chunk.js.map