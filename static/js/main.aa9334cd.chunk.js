(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{213:function(e,t){},233:function(e,t,a){},234:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(33),r=a.n(c),i=(a(233),a(21)),l=a(225),o=a(20),j=(a(234),a(381)),d=a(221),u=a(382),b=a(383),m=a.p+"static/media/login.d01e0b22.jpg",h=a.p+"static/media/logo.c3b4ca2c.svg",O=a(29),p=a(387),x=a(388),f=a(38),g=a(109),v=a(395),y=a(396),N=a(53),k=a(28),I=a.n(k),w=a(2),C=j.a.Content;var S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(o.a)(c,2),i=r[0],l=r[1],k=p.a.useForm(),S=Object(o.a)(k,1)[0],T=localStorage.getItem("login");Object(n.useEffect)((function(){var e=JSON.parse(T);null!==T&&S.setFieldsValue({username:e.username,password:e.password})}),[]);var A=Object(O.g)();return a&&A.push("/"),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{children:Object(w.jsx)("title",{children:"Ticketing - Login Page"})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(C,{className:"login__layout",children:Object(w.jsxs)(u.a,{children:[Object(w.jsxs)(b.a,{className:"item_center",span:12,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:h,className:"imglogo ",alt:""})}),Object(w.jsx)("p",{className:"p-size",children:"Welcome Back"}),Object(w.jsx)(p.a,{name:"normal_login",className:"login-form",form:S,initialValues:{remember:!0},onFinish:function(e){var t=e.username,a=e.password;I.a.post("https://api.ticket.tempserver.ir/api/token/",{username:t,password:a}).then((function(e){if(200===e.status)return!0===i&&localStorage.setItem("login",JSON.stringify({username:t,password:a})),e.data;401===e.status&&d.b.error("username or password is invalid")})).then((function(e){return localStorage.setItem("auth","true"),localStorage.setItem("token",e.access),localStorage.setItem("username",t)})).then((function(){setTimeout((function(){localStorage.removeItem("token"),localStorage.removeItem("auth"),localStorage.removeItem("username")}),108e5),s(!0)})).catch((function(e){console.log(e.message)}))},children:Object(w.jsxs)("div",{className:"flex-space",children:[Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"username",rules:[{required:!0,message:"Please enter your Username!"}],children:Object(w.jsx)(x.a,{prefix:Object(w.jsx)(v.a,{className:"ant-icon site-form-item-icon "}),placeholder:"Username/Email *"})}),Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"password",rules:[{required:!0,message:"Please enter your Password!"}],children:Object(w.jsx)(x.a.Password,{prefix:Object(w.jsx)(y.a,{className:"ant-icon site-form-item-icon"}),type:"password",placeholder:"Password *"})}),Object(w.jsx)(p.a.Item,{children:Object(w.jsx)(f.a,{type:"primary",htmlType:"submit",className:"login-form-button ",children:"Login"})}),Object(w.jsx)(p.a.Item,{children:Object(w.jsxs)("div",{className:"width-style",children:[Object(w.jsx)(p.a.Item,{name:"remember",noStyle:!0,children:Object(w.jsx)(g.a,{onChange:function(e){l(e.target.checked)},children:"Remember me"})}),Object(w.jsx)("a",{className:"login-form-forgot",href:"./forgot",children:"Forgot password"})]})}),Object(w.jsxs)(p.a.Item,{className:"botoom-border",children:["Having an issue?",Object(w.jsx)("a",{className:"a-style",href:"./guide",children:"Contact us"})]})]})})]}),Object(w.jsx)(b.a,{className:"login__right-image",span:12,children:Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:m,className:"grayscale loginImag",width:"100%",height:"721vh",alt:""}),Object(w.jsx)("p",{className:"para",children:Object(w.jsxs)("span",{children:["Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis."," "]})})]})})]})})})]})},T=(a(315),a(226)),A=a(397),_=a(398),F=(a(316),a.p+"static/media/white-logo.31b7a34d.svg"),P=a(63),q=a(140),z=a(389),R=a(143),B=(a(317),a(139)),H=a.n(B);var U=function(e){var t=s.a.useState("normal"),a=Object(o.a)(t,2),c=a[0],r=a[1],l=s.a.useState(""),j=Object(o.a)(l,2),u=j[0],b=j[1],m=Object(n.useRef)(null),h=Object(n.useState)(""),O=Object(o.a)(h,2),p=O[0],g=O[1];function v(){e.hidefunc(),d.b.error("Ticket canceled")}return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(z.a,{title:[Object(w.jsxs)("div",{children:[Object(w.jsx)("p",{children:"Add ticket"}),Object(w.jsx)(x.a,{value:u,onChange:function(e){return b(e.target.value)},placeholder:"Subject"})]},"1")],centered:!0,visible:e.open,onCancel:v,footer:[Object(w.jsx)(f.a,{onClick:v,className:"btn-cancel  btn-modal",children:"Cancel"},"back"),Object(w.jsx)(f.a,{onClick:function(t){return function(t){if(t.preventDefault(),""===p.trim())return d.b.error("Please fill in the subject field"),!1;if(""===u.trim())return d.b.error("Please fill in the message field"),!1;var a=localStorage.getItem("token"),n={subject:u,priority:c,description:p,team:"2",file01:"",file02:""};I.a.post("https://api.ticket.tempserver.ir/api/ticket/",Object(i.a)({},n),{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+a}}).then((function(t){return g(""),b(""),201===t.status||200===t.status?(d.b.success("Tickets added"),e.changeTicket(),t.data):(d.b.error("something wrong"),t)})).catch((function(e){console.log(e.message)})),e.hidefunc()}(t)},className:"btn-modal",children:"Add"},"submit")],children:[Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"b-border",children:[Object(w.jsx)("span",{className:"m-r",children:"Priority "}),Object(w.jsxs)(R.a.Group,{onChange:function(e){r(e.target.value)},value:c,children:[Object(w.jsx)(R.a,{value:"normal",children:"Normal"}),Object(w.jsx)(R.a,{value:"urgent",children:"Urgent"}),Object(w.jsx)(R.a,{value:"critical",children:"critical"})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("p",{className:"m-r align-text",children:"Description "}),Object(w.jsx)(H.a,{ref:m,value:p,config:{readonly:!1},tabIndex:1,onBlur:function(e){return g(e)}})]})})},D=a(384),E=j.a.Header;var L=function(e){var t=Object(O.g)(),a=Object(n.useState)(!1),s=Object(o.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),m=l[0],h=l[1],p=localStorage.getItem("username"),x=Object(w.jsxs)(P.a,{children:[Object(w.jsx)(P.a.Item,{children:Object(w.jsx)("a",{href:"./profile",onClick:function(){d.b.success("profile"),t.push("/profile")},children:"Profile"})},"1"),Object(w.jsx)(P.a.Item,{children:Object(w.jsx)(D.a,{title:"Sure to logout?",onConfirm:function(){d.b.success("Log out"),localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("auth"),t.push("/login")},onCancel:function(){d.b.error("Log out canceled")},children:Object(w.jsx)("a",{href:"./login",children:"Log out"})})},"2")]}),f="",g="",y="",N=Object(w.jsx)("a",{href:"/login",children:Object(w.jsx)("span",{className:"login",children:"Login"})});return localStorage.getItem("auth")&&(g=Object(w.jsx)("a",{href:"/guide",title:"Guide",children:Object(w.jsx)("span",{className:"icons-list",children:Object(w.jsx)(T.a,{onClick:function(){d.b.success("Guide page"),t.push("/guide")}})})}),f=Object(w.jsx)("abbr",{title:"Add Ticket",className:"icons-list",children:Object(w.jsx)(A.a,{style:{paddingRight:"15px"},onClick:function(){r(!0)}})}),y=Object(w.jsx)("a",{href:"/admin",title:"Admin",children:Object(w.jsx)("span",{className:"icons-list",children:Object(w.jsx)(_.a,{twoToneColor:"white",style:{padding:"0px 13px 0px 2px"}})})}),N=Object(w.jsx)(q.a,{overlay:x,visible:m,onVisibleChange:function(e){h(e)},placement:"bottomRight",children:Object(w.jsxs)("span",{className:"username-style icons-list",children:[p,Object(w.jsx)(v.a,{})]})})),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{className:"layout",children:Object(w.jsx)(E,{children:Object(w.jsxs)(u.a,{wrap:!1,className:"display",children:[Object(w.jsx)(b.a,{flex:"none",children:Object(w.jsx)("div",{children:Object(w.jsx)("a",{to:"/dashboard",title:"Dashboard",children:Object(w.jsx)("img",{src:F,width:"40px",height:"40px",alt:"logo",onClick:function(){d.b.success("Dashboard page"),t.push("/dashboard")}})})})}),Object(w.jsx)(b.a,{children:Object(w.jsxs)("div",{children:[f,y,g,N]})})]})})}),Object(w.jsx)(U,{changeTicket:function(){e.changeTicket()},open:c,hidefunc:function(){r(!1)}})]})},Z=a(141),J=a.n(Z),G=j.a.Header,M=j.a.Content;var V=function(){var e=Object(n.useState)({name:"",email:"",first_name:"",last_name:""}),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)({pass:"",confimpass:"",oldpass:""}),r=Object(o.a)(c,2),l=r[0],m=r[1],h=localStorage.getItem("token");return Object(n.useEffect)((function(){I.a.get("https://api.ticket.tempserver.ir/api/users/",{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+h}}).then((function(e){if(200===e.status)return e.data;d.b.error("something wrong to fetch data user")})).then((function(e){return e.results})).then((function(e){var t=e.find((function(e){return e.username===localStorage.getItem("username")}));s({name:t.username,email:t.email,last_name:t.last_name,first_name:t.first_name})})).catch((function(e){console.log(e.message)}))}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{children:Object(w.jsx)("title",{children:"Ticketing - Profile Page"})}),Object(w.jsxs)(j.a,{className:"layout",children:[Object(w.jsx)(G,{children:Object(w.jsx)(L,{})}),Object(w.jsx)(M,{style:{padding:"0 100px"},children:Object(w.jsx)("div",{className:"site-layout-content",children:Object(w.jsxs)(u.a,{style:{marginTop:"8%"},children:[Object(w.jsxs)(b.a,{flex:2,style:{margin:"50px",marginBottom:"0px"},children:[Object(w.jsx)("div",{className:"avatar",children:Object(w.jsx)(J.a,{email:a.email,size:120,className:"CustomAvatar-image"})}),Object(w.jsx)("p",{className:"user-name",children:a.name}),Object(w.jsx)("p",{children:a.first_name}),Object(w.jsx)("p",{children:a.last}),Object(w.jsx)("p",{children:a.email})]}),Object(w.jsx)(b.a,{flex:1,className:"left-border"}),Object(w.jsx)(b.a,{flex:4,className:"form-con",style:{margin:"50px",marginBottom:"0px"},children:Object(w.jsxs)("form",{onSubmit:function(e){!function(e){if(e.preventDefault(),l.pass!==l.confimpass)return d.b.error("password and confirm password not equal"),!1;var t={old_password:l.oldpass,password:l.pass};console.log(t),I.a.post("https://api.ticket.tempserver.ir/api/changepassword/",t,{"content-type":"application/json","WWW-Authenticate":"Bearer "+h}).then((function(){m({email:"",name:"",lastname:"",pass:"",confimpass:""})})).catch((function(e){console.log(e.message)}))}(e)},children:[Object(w.jsx)("h2",{children:"User Information change"}),Object(w.jsx)(x.a,{value:l.oldpass,onChange:function(e){m((function(t){return Object(i.a)(Object(i.a)({},t),{},{oldpass:e.target.value})}))},size:"large",placeholder:"old password",className:"ant-icon",prefix:Object(w.jsx)(y.a,{})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:l.pass,onChange:function(e){m((function(t){return Object(i.a)(Object(i.a)({},t),{},{pass:e.target.value})}))},size:"large",placeholder:"Password",className:"ant-icon",prefix:Object(w.jsx)(y.a,{})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:l.confimpass,onChange:function(e){m((function(t){return Object(i.a)(Object(i.a)({},t),{},{confimpass:e.target.value})}))},size:"large",placeholder:"Confirm Password",className:"ant-icon",prefix:Object(w.jsx)(y.a,{})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"btn-position",children:Object(w.jsx)(f.a,{className:"button",htmlType:"submit",ghost:!0,children:"Save"},"submit")})]})})]})})})]})]})},W=(a(325),j.a.Header),K=j.a.Content,Q=j.a.Footer;var X=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{children:Object(w.jsx)("title",{children:"Ticketing - Guide Page"})}),Object(w.jsxs)(j.a,{className:"layout",style:{minHeight:"100vh;"},children:[Object(w.jsx)(W,{children:Object(w.jsx)(L,{})}),Object(w.jsx)(K,{style:{margin:"24px 16px 0",overflow:"initial"},children:Object(w.jsxs)("div",{className:"site-layout-content",children:[Object(w.jsx)("h2",{className:"arashweb",children:Object(w.jsx)("a",{href:"https://arashweb.com/fa/blog/",children:"Arashweb Company"})}),Object(w.jsx)("div",{className:"or"}),Object(w.jsxs)("div",{style:{padding:"0 40px"},children:[Object(w.jsx)("h4",{className:"goal",children:"Team's Goal : "}),Object(w.jsx)("h5",{className:"goal_context",children:"This is a platform for communication between the employer and the company's programming team. In this context, programmers are required to support projects implemented by them, during the project or after delivery to the client. If the employer encounters any questions during the project, he can create his question on this site as a task or issue and determine its priority level. The programming team will evaluate the ticket at the first opportunity and solve it."})]}),Object(w.jsx)("div",{className:"or"})]})}),Object(w.jsxs)(Q,{style:{textAlign:"center"},className:"footer_content",children:[Object(w.jsxs)("a",{href:"https://arashweb.com/fa/blog/",children:[Object(w.jsx)("img",{src:F}),Object(w.jsx)("h4",{className:"white",children:"Arashweb Company"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"footer_content",children:Object(w.jsxs)("p",{children:["front-end developer : ",Object(w.jsx)("b",{children:"Mobina Ansari Astaneh"})]})}),Object(w.jsx)("div",{className:"footer_content",children:Object(w.jsxs)("p",{children:["back-end developer : ",Object(w.jsx)("b",{children:"Atta Attarian"})]})}),Object(w.jsx)("div",{className:"footer_content",children:Object(w.jsx)("a",{href:"info@arashweb.ir",children:"Email: info@arashweb.ir"})})]})," "]})]})]})},Y=a(32),$=(a(326),a(392)),ee=a(393),te=a(386),ae=a(216),ne=a(394),se=a(210),ce=a(391),re=(a(327),a(385)),ie=a(390),le=a(399),oe=function(e){var t="";return localStorage.getItem("username")!==e.name&&(t="active"),Object(w.jsx)(re.a,{className:t,actions:[Object(w.jsx)("span",{onClick:e.reply,children:"Reply to"},"comment-nested-reply-to")],author:Object(w.jsxs)("div",{children:[e.name," ",Object(w.jsx)("span",{children:e.email})]}),datetime:Object(w.jsx)("div",{className:"mt-1",children:e.date.split(".")[0].replace(/-/g,"/").replace("T"," - ")}),avatar:Object(w.jsx)(ie.a,{className:"b-color",alt:"sepideh",children:Object(w.jsx)(J.a,{email:e.email,className:"CustomAvatar-image"})}),content:Object(w.jsx)("pre",{dangerouslySetInnerHTML:{__html:e.message}}),children:e.children})};function je(e){var t=localStorage.getItem("token"),a=Object(n.useRef)(null),s=Object(n.useState)(""),c=Object(o.a)(s,2),r=c[0],l=c[1],j=Object(n.useState)([{ticket:0}]),u=Object(o.a)(j,2),b=u[0],m=u[1],h=Object(n.useState)(!1),O=Object(o.a)(h,2),p=O[0],x=O[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),y=v[0],N=v[1];function k(){e.hidefunc()}Object(n.useEffect)((function(){m(e.comments),x(!0)}),[p]),Object(n.useEffect)((function(){}),[]);var C=function(a){I.a.put("https://api.ticket.tempserver.ir/api/ticket/"+e.data.key+"/",{subject:e.data.subject,priority:e.data.priority,description:e.data.description,team:e.data.team.id,tag:a},{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+t}}).then((function(t){console.log(t),200!==t.status&&201!==t.status||e.changeComment()})).catch((function(e){console.log(e.message)}))};Object(n.useEffect)((function(){"new"===e.data.status[0]&&C("open")}),[]);var S,T,A,_,F,P=function(){var e=document.querySelectorAll(".jodit-wysiwyg");void 0!==e&&e[e.length-1].focus()};return S=p?e.comments.map((function(e,t){return Object(w.jsx)(oe,{reply:P,name:e.user.username,date:e.updated_at,email:e.user.email,message:e.body},t)})):"",y&&(A={disabled:!0},T=Object(w.jsx)(se.a,{})),_="ant-tag-green",F=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{className:"align-text",children:"Add Comment "}),Object(w.jsx)(H.a,{direction:"ltr",ref:a,value:r,config:{readonly:!1},tabIndex:1,onBlur:function(e){return l(e)}}),Object(w.jsx)("br",{}),Object(w.jsx)(f.a,{onClick:function(){e.deletTicket(b[0].ticket),k()},className:"btn-drwer btn-cancel ",children:"Close"}),Object(w.jsx)(f.a,{onClick:k,style:{marginRight:8},className:"btn-cancel btn-drwer",children:"Cancel"}),Object(w.jsxs)(f.a,Object(i.a)(Object(i.a)({},A),{},{onClick:function(){if(""===r.trim())return d.b.error("plase type somthing"),!1;N(!0),I.a.post("https://api.ticket.tempserver.ir/api/comment/",{body:r,file01:"",file02:"",ticket:b[0].ticket},{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+t}}).then((function(t){if(console.log(t),200===t.status||201===t.status){var a="open"===e.data.status[0]?"answered":"open";C(a),l(""),e.changeComment(),x(!0),N(!1),d.b.success("Tickets sent")}else d.b.error("somthing Wrong")})).catch((function(e){N(!1),console.log(e.message)}))},className:"btn-drwer",children:["Send",T]}))]}),"done"===e.data.status[0]?(_="ant-tag-red",F=""):"open"===e.data.status[0]?_="ant-tag-yellow":"answered"===e.data.status[0]&&(_="ant-tag-blue"),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(ce.a,{title:[Object(w.jsxs)("div",{className:"header_open_ticket",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("p",{className:"p-align",children:[Object(w.jsx)(le.a,{className:"icon-back",onClick:k}),Object(w.jsxs)("span",{className:"ticket-id",children:["ticket ",e.data.key]})]}),Object(w.jsx)("span",{children:Object(w.jsx)("span",{className:"openTicket__subject",children:e.data.subject})}),Object(w.jsx)("span",{children:Object(w.jsx)("span",{className:"ant-tag "+_,children:e.data.status[0].toUpperCase()})}),Object(w.jsxs)("span",{className:"font-span",children:["- Created ",e.data.created.split("T")[0].replace(/-/g,"/")," ","- Requester: ",e.data.requester,Object(w.jsx)("span",{className:"color-name"})]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{children:Object(w.jsx)(f.a,{onClick:function(){return C("pending")},type:"danger",className:"pending",children:"Pending"})}),Object(w.jsx)("span",{children:Object(w.jsx)(f.a,{onClick:function(){return C("in progress")},className:"inprogress",children:"In Progress"})})]})]},"2")],width:720,onClose:k,visible:e.open,bodyStyle:{paddingBottom:30},footer:Object(w.jsx)("div",{style:{textAlign:"right"},children:F}),children:S})})}var de=Object(n.memo)(je),ue=a(142),be=a.n(ue),me=j.a.Header,he=j.a.Content,Oe=x.a.Search;var pe=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),r=Object(o.a)(c,2),i=r[0],l=r[1],m=Object(n.useState)(!0),h=Object(o.a)(m,2),p=h[0],x=h[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),y=v[0],k=v[1],C=Object(n.useState)(!1),S=Object(o.a)(C,2),T=S[0],A=S[1],_=Object(n.useState)({name:"",subject:""}),F=Object(o.a)(_,2),P=F[0],q=F[1],z=Object(n.useState)(),R=Object(o.a)(z,2),B=R[0],H=R[1],U=Object(n.useState)(),E=Object(o.a)(U,2),Z=E[0],J=E[1],G=Object(n.useState)(!0),M=Object(o.a)(G,2),V=M[0],W=M[1],K=Object(n.useState)("https://api.ticket.tempserver.ir/api/ticket/"),Q=Object(o.a)(K,2),X=Q[0],se=Q[1],ce=localStorage.getItem("token"),re=function(e){I.a.get("https://api.ticket.tempserver.ir/api/close/"+e+"/",{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+ce}}).then((function(e){return e.data})).then((function(t){"OK"===t.message?(d.b.success("Ticket "+e+" deleted"),l((function(e){return!e}))):(console.log(t),d.b.error("somthing wrong"))})).catch((function(e){return console.log(e.message)}))},ie=Object(O.g)(),le=function(e){I.a.get("https://api.ticket.tempserver.ir/api/ticket/?limit=10000&offset=0",{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+ce}}).then((function(e){if(200===e.status)return e.data;d.b.error("try agin")})).then((function(e){return e.results})).then((function(t){return Object(Y.a)(t).find((function(t){return Number(e)===t.id}))})).then((function(t){ie.push("/"+e),console.log(t),q({key:t.id,description:t.description,priority:t.priority,team:t.team,status:[t.tag],subject:t.subject,created:t.created_at,created2:+new Date(t.created_at),requester:t.user.username}),H(t.comments),k(!0),A(!0)})).catch((function(e){console.log(e.message)}))},oe=[{title:"Status",dataIndex:"status",render:function(e){return Object(w.jsx)("span",{children:e.map((function(e){var t="green";return"done"===e?t="red":"open"===e?t="yellow":"answered"===e?t="blue":"inprogres"===e&&(t="purple"),Object(w.jsx)(ee.a,{color:t,children:e.toUpperCase()},e)}))})},filters:[{text:"New",value:"new"},{text:"Pending",value:"pending"},{text:"In Progress",value:"in progress"},{text:"Open",value:"open"},{text:"Done",value:"done"}],onFilter:function(e,t){return 0===t.status.indexOf(e)}},{title:"#",dataIndex:"number",sorter:function(e,t){return e.number-t.number}},{title:"Subject",dataIndex:"subject"},{title:"Created",dataIndex:"created",sorter:function(e,t){return e.created2-t.created2}},{title:"Requester",dataIndex:"requester",render:function(e){return Object(w.jsx)("a",{style:{color:"#3699FF"},href:"./profile",children:e})}},{title:"Customer",dataIndex:"customer"},{title:"Team",dataIndex:"team"},{title:"Updated",dataIndex:"updated",sorter:function(e,t){return e.updated2-t.updated2}},{title:"Action",dataIndex:"action",render:function(e,t){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(ne.b,{size:"middle",style:{color:"#3699FF"},children:[Object(w.jsx)(D.a,{title:"Do you want to delete this ticket?",onConfirm:function(){re(t.key)},children:Object(w.jsxs)("a",{children:["Delete ",t.name]})}),Object(w.jsx)("a",{onClick:function(){le(t.key)},children:"Open"}),V?Object(w.jsx)("a",{onClick:function(){!function(e){I.a.get("https://api.ticket.tempserver.ir/api/archive/".concat(e,"/"),{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+ce}}).then((function(e){if(200===e.status)return e.data;d.b.error("try agin")})).then((function(e){d.b.success(e.message)})).catch((function(e){console.log(e.message)}))}(t.key)},children:"add archive"}):""]})})}}],je=[];Object(n.useEffect)((function(){I.a.get(X,{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+ce}}).then((function(e){if(200===e.status)return e.data;d.b.error("try agin")})).then((function(e){return console.log(e),J(e.count),e.results})).then((function(e){je=[];var t=Object(Y.a)(e);return console.log(t[0].created_at.split(".")[0]),t.map((function(e){je.push({key:e.id,status:[e.tag],number:e.id,subject:e.subject,created:e.created_at.split(".")[0],created2:+new Date(e.created_at.split(".")[0]),requester:e.user.username,team:e.team.title,customer:"Main",updated:e.updated_at.split(".")[0],updated2:+new Date(e.updated_at.split(".")[0])})})),e})).then((function(){s(je)})).catch((function(e){console.log(e.message)}))}),[i]);var ue=T?Object(w.jsx)(de,{deletTicket:re,data:P,comments:B,open:y,changeComment:function(){l((function(e){return!e})),le(P.key)},hidefunc:function(){k(!1),setTimeout((function(){A(!1)}),1e3)}}):"",pe=Object(O.h)().pathname.split("/")[1];p&&""!==pe&&null!==pe&&void 0!==pe&&void 0!==a[0]&&(x(!1),le(pe));var xe=be()((function(e){""!==e.target.value.trim()?I.a.get("https://api.ticket.tempserver.ir/api/ticket/?search="+e.target.value,{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+ce}}).then((function(e){if(200===e.status)return e.data;d.b.error("try agin")})).then((function(e){return e.results})).then((function(e){return je=[],Object(Y.a)(e).map((function(e){je.push({key:e.id,status:[e.tag],number:je.length+1,subject:e.subject,created:e.created_at,created2:+new Date(e.created_at),requester:e.user.username,team:e.team.title,customer:"Main",updated:e.updated_at,updated2:+new Date(e.updated_at)})})),e})).then((function(){s(je)})).catch((function(e){console.log(e)})):""===e.target.value.trim()&&l((function(e){return!e}))}),1e3),fe=V?"Archive":"Ticket";return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{children:Object(w.jsx)("title",{children:"Ticketing - Dashboard"})}),Object(w.jsxs)(j.a,{className:"layout",children:[Object(w.jsx)(me,{children:Object(w.jsx)(L,{changeTicket:function(){l((function(e){return!e}))}})}),Object(w.jsxs)(he,{style:{padding:"0 50px",margin:"0px 50px"},children:[Object(w.jsx)($.a,{style:{margin:"16px 0"},children:Object(w.jsxs)(u.a,{wrap:!1,className:"display",children:[Object(w.jsx)(b.a,{flex:"none",children:Object(w.jsx)("div",{children:Object(w.jsx)(f.a,{type:"dashed",onClick:function(){return se("https://api.ticket.tempserver.ir/api/"+(V?"ticketarchive/":"ticket/")),l((function(e){return!e})),void W((function(e){return!e}))},primary:!0,children:fe})})}),Object(w.jsx)(b.a,{children:Object(w.jsxs)("div",{className:"search-table",children:[Object(w.jsx)(Oe,{onChange:function(e){return xe(e)},style:{width:200,height:30,marginRight:"20px"}}),Object(w.jsx)(ae.a,{defaultCurrent:1,onChange:function(e){var t=10*(e-1);se("https://api.ticket.tempserver.ir/api/".concat(V?"ticket/":"ticketarchive/","?limit=10&offset=")+t),l((function(e){return!e}))},total:Z})]})})]})}),Object(w.jsx)("div",{className:"site-layout-content",children:Object(w.jsx)(te.a,{columns:oe,dataSource:a,scroll:{x:"calc(650px + 50%)"}})})]}),ue]})]})},xe=(a(331),j.a.Content);var fe=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(w.jsx)(p.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){I.a.post("https://api.ticket.tempserver.ir/api/reset-password/",{email:e.email},{headers:{"content-type":"application/json"}}).then((function(e){return console.log(e),200===e.status&&(s(!0),d.b.success(e.data.message)),e.data})).then((function(e){console.log(e)})).catch((function(e){return console.log(e.message)}))},children:Object(w.jsxs)("div",{className:"flex-space",children:[Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"email",rules:[{required:!0,message:"Please enter your Email!"}],children:Object(w.jsx)(x.a,{type:"email",placeholder:"Email"})}),Object(w.jsx)(p.a.Item,{children:Object(w.jsx)(f.a,{htmlType:"submit",className:"login-form-button-purple",children:"Submit"})}),Object(w.jsxs)(p.a.Item,{className:"botoom-border",children:["Having an issue?"," ",Object(w.jsx)("a",{className:"a-style",href:"#",children:"Contact us"})]})]})});return a&&(c=Object(w.jsx)(p.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){I.a.post("https://api.ticket.tempserver.ir/api/confirm-password/",{token:e.token,uid:e.uid,password:e.password},{headers:{"content-type":"application/json"}}).then((function(e){return 200===e.status&&s(!1),e.data})).then((function(e){alert(JSON.stringify(e)),console.log(e)})).catch((function(e){return console.log(e.message)}))},children:Object(w.jsxs)("div",{className:"flex-space",children:[Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"token",rules:[{required:!0,message:"Please enter your token!"}],children:Object(w.jsx)(x.a,{type:"token",placeholder:"token"})}),Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"uid",rules:[{required:!0,message:"Please enter your uid!"}],children:Object(w.jsx)(x.a,{type:"uid",placeholder:"uid"})}),Object(w.jsx)(p.a.Item,{className:"ant-input-size",name:"password",rules:[{required:!0,message:"Please enter your new password!"}],children:Object(w.jsx)(x.a,{type:"new password",placeholder:"new password"})}),Object(w.jsx)(p.a.Item,{children:Object(w.jsx)(f.a,{htmlType:"submit",className:"login-form-button-purple",children:"Submit"})})]})})),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{children:Object(w.jsx)("title",{children:"Ticketing - Forgotten Password Page"})}),Object(w.jsx)(j.a,{children:Object(w.jsx)(xe,{children:Object(w.jsxs)(u.a,{style:{height:"100vh"},children:[Object(w.jsxs)(b.a,{className:"item_center",span:12,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:h,className:"imglogo",alt:""})}),Object(w.jsx)("p",{className:"p-size",children:"Forgotten Password ?"}),Object(w.jsx)("p",{className:"note-size",children:"Enter your email to reset your password"}),c]}),Object(w.jsx)(b.a,{span:12,children:Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:m,className:"original loginImag",width:"100%",height:"721vh",alt:""}),Object(w.jsx)("p",{className:"para",children:Object(w.jsxs)("span",{children:["Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis."," "]})})]})})]})})})]})},ge=a(213),ve=a.n(ge),ye=(a(332),a(400)),Ne=a(217),ke=j.a.Header,Ie=j.a.Content,we={labels:["comments","tickets","users"],datasets:[{label:"done",data:[1,6,4],backgroundColor:"rgb(255, 99, 132)"},{label:"new",data:[9,1,8],backgroundColor:"#79EC7D"}]},Ce={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};var Se=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),r=Object(o.a)(c,2),l=r[0],d=r[1],m=Object(n.useState)(),h=Object(o.a)(m,2),p=h[0],g=h[1],k=Object(n.useState)(!1),C=Object(o.a)(k,2),S=C[0],T=C[1],A=Object(n.useState)(!1),_=Object(o.a)(A,2),F=_[0],P=_[1],q=Object(n.useState)({active:!0,staff:!1,name:"",teams:"",lastname:"",pass:"",confimpass:"",email:""}),B=Object(o.a)(q,2),H=B[0],U=B[1],E=Object(n.useState)("https://api.ticket.tempserver.ir/api/users/"),Z=Object(o.a)(E,2),J=Z[0],G=Z[1],M=localStorage.getItem("token"),V=localStorage.getItem("username"),W=[{title:"id",dataIndex:"id",sorter:function(e,t){return e.number-t.number}},{title:"username",dataIndex:"username"},{title:"firstname",dataIndex:"firstname"},{title:"lastname",dataIndex:"lastname"},{title:"email",dataIndex:"email",render:function(e){return Object(w.jsxs)("a",{style:{color:"#3699FF"},children:[" ",e," "]})}},{title:"team",dataIndex:"team"},{title:"active",dataIndex:"active",render:function(e){return Object(w.jsxs)("a",{style:{color:"#3699FF"},children:[" ",e?"yes":"no"," "]})}},{title:"staff",dataIndex:"staff",render:function(e){return Object(w.jsxs)("a",{style:{color:"#3699FF"},children:[" ",e?"yes":"no"," "]})}},{title:"Action",dataIndex:"action",render:function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(ne.b,{size:"middle",style:{color:"#3699FF"},children:[Object(w.jsxs)(D.a,{title:"Do you want to delete this ticket?",onConfirm:function(){t.key},children:[Object(w.jsx)("a",{children:" remove user "})," "]})," "]})," "]})}}],K=[];Object(n.useEffect)((function(){I.a.get(J,{headers:{"content-type":"application/json",AUTHORIZATION:"Bearer "+M}}).then((function(e){if(g(e.data.count),200===e.status)return e.data.results;T(!0)})).then((function(e){K=[];var t=Object(Y.a)(e),a="";t.map((function(e){a="",e.username===V&&(a=" (you)"),K.push({id:e.id,firstname:e.first_name,lastname:e.last_name,team:e.team,username:e.username+a,active:e.is_active,email:e.email,staff:e.is_staff})})),s(K)})).catch((function(e){console.log(e.message),T(!0)}))}),[l]);var Q="";return!0===S&&(Q=Object(w.jsx)(O.a,{to:"/"})),Object(w.jsxs)(w.Fragment,{children:[" ",Q," ",Object(w.jsxs)(N.a,{children:[Object(w.jsx)("title",{children:" Ticketing - admin "})," "]})," ",Object(w.jsxs)(j.a,{className:"layout",children:[Object(w.jsxs)(ke,{children:[Object(w.jsx)(L,{changeTicket:function(){d((function(e){return!e}))}})," "]}),Object(w.jsxs)(Ie,{style:{padding:"0 100px"},children:[Object(w.jsxs)($.a,{style:{margin:"16px 0"},children:[Object(w.jsxs)(u.a,{wrap:!1,className:"display",children:[Object(w.jsxs)(b.a,{flex:"none",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)(f.a,{type:"primary",onClick:function(){return P(!0)},size:20,children:["Add New User"," "]})," "]})," "]})," ",Object(w.jsxs)(b.a,{children:[Object(w.jsxs)("div",{className:"search-table",children:[Object(w.jsx)(ae.a,{defaultCurrent:1,onChange:function(e){G("https://api.ticket.tempserver.ir/api/users/?limit=10&offset="+10*(e-1)),d((function(e){return!e}))},total:p})," "]})," "]})," "]})," "]})," ",Object(w.jsxs)("div",{className:"site-layout-content",children:[Object(w.jsx)(te.a,{columns:W,dataSource:a,scroll:{x:"calc(650px + 50%)"}})," "]})," "]})," ",Object(w.jsxs)("div",{className:"chart",children:[Object(w.jsxs)("div",{className:"chartContainer",children:[Object(w.jsx)("div",{className:"titleChart",children:" chart site "})," ",Object(w.jsx)(Ne.a,{data:we,options:Ce})," "]})," "]})," ",Object(w.jsxs)(z.a,{title:[Object(w.jsx)("h2",{children:" Add new user "},"1")],centered:!0,visible:F,onCancel:function(){return P(!1)},footer:[Object(w.jsxs)(f.a,{onClick:function(){return P(!1)},className:"btn-cancel  btn-modal",children:["Cancel"," "]},"back"),Object(w.jsxs)(f.a,{onClick:function(e){return function(e){e.preventDefault();var t={email:H.email,username:H.name,first_name:H.name,last_name:H.lastname,is_staff:H.staff,is_active:H.active,team:H.teams,password:H.pass};console.log(t),I.a.post("https://api.ticket.tempserver.ir/api/users/",t,{"content-type":"application/json",AUTHORIZATION:"Bearer "+M}).then((function(e){if(200===e.status||201===e.status)return e.data})).then((function(e){alert(JSON.stringify(e)),U({email:"",name:"",active:!0,staff:!1,teams:"",lastname:"",pass:"",confimpass:""}),d((function(e){return!e}))})).catch((function(e){console.log(e.message)}))}(e)},className:"btn-modal",children:["Add user"," "]},"submit")],children:[Object(w.jsxs)("form",{children:[Object(w.jsx)(x.a,{value:H.email,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{email:e.target.value})}))},size:"large",placeholder:"Email",className:"ant-icon",prefix:Object(w.jsx)(ye.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{size:"large",value:H.name,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{name:e.target.value})}))},placeholder:"Name",className:"ant-icon",prefix:Object(w.jsx)(v.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:H.lastname,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{lastname:e.target.value})}))},size:"large",placeholder:"Last Name",className:"ant-icon",prefix:Object(w.jsx)(v.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:H.pass,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{pass:e.target.value})}))},size:"large",placeholder:"Password",className:"ant-icon",prefix:Object(w.jsx)(y.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:H.confimpass,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{confimpass:e.target.value})}))},size:"large",placeholder:"Confirm Password",className:"ant-icon",prefix:Object(w.jsx)(y.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(x.a,{value:H.teams,onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{teams:e.target.value})}))},size:"large",placeholder:"teams",className:"ant-icon",prefix:Object(w.jsx)(v.a,{})})," ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{})," "," ",Object(w.jsxs)("div",{className:"b-border",children:[Object(w.jsx)("span",{className:"m-r",children:" staff "})," ",Object(w.jsxs)(R.a.Group,{onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{staff:e.target.value})}))},value:H.staff,children:[Object(w.jsx)(R.a,{value:!0,children:" yes "})," ",Object(w.jsx)(R.a,{value:!1,children:" no "})," "]})," "]})," ",Object(w.jsxs)("div",{children:[Object(w.jsx)("span",{className:"m-r",children:" active "})," ",Object(w.jsxs)(R.a.Group,{onChange:function(e){U((function(t){return Object(i.a)(Object(i.a)({},t),{},{active:e.target.value})}))},value:H.active,children:[Object(w.jsx)(R.a,{value:!0,children:" yes "})," ",Object(w.jsx)(R.a,{value:!1,children:" no "})," "]})," "]})," "]})," "]})," "]})," "]})},Te=(a(378),a(89));var Ae=function(){return Object(w.jsx)(Te.a,{children:Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(O.d,{children:[Object(w.jsx)(O.b,{path:"/login",children:Object(w.jsx)(S,{})}),Object(w.jsx)(O.b,{path:"/register",children:Object(w.jsx)(ve.a,{})}),Object(w.jsx)(O.b,{path:"/forgot",children:Object(w.jsx)(fe,{})}),Object(w.jsx)(O.b,{path:"/guide",children:Object(w.jsx)(X,{})}),Object(w.jsx)(_e,{path:"/profile",children:Object(w.jsx)(V,{})}),Object(w.jsx)(_e,{path:"/admin",children:Object(w.jsx)(Se,{})}),Object(w.jsx)(O.b,{path:"/",children:JSON.parse(localStorage.getItem("auth"))?Object(w.jsx)(pe,{}):Object(w.jsx)(O.a,{to:"/login"})})]})})})};function _e(e){var t=e.children,a=Object(l.a)(e,["children"]);return Object(w.jsx)(O.b,Object(i.a)(Object(i.a)({},a),{},{render:function(e){var a=e.location;return JSON.parse(localStorage.getItem("auth"))?t:Object(w.jsx)(O.a,{to:{pathname:"/login",state:{from:a}}})}}))}var Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,401)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(Ae,{})}),document.getElementById("root")),Fe()}},[[379,1,2]]]);
//# sourceMappingURL=main.aa9334cd.chunk.js.map