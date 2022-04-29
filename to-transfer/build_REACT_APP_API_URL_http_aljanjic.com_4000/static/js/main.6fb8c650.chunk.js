(this["webpackJsonpgo-movies"]=this["webpackJsonpgo-movies"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),i=n.n(s),c=(n(29),n(9)),o=n(3),l=n(4),d=n(12),j=n(6),h=n(5),m=n(2),u=n(7),b=n(0),p=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],isLoaded:!1,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://aljanjic.com:4000/","/v1/movies")).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(t){e.setState({movies:t.movies,isLoaded:!0},(function(t){e.setState({isLoaded:!0,error:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoaded,r=e.error;return r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"Choose a movie"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(b.jsx)(m.b,{className:"list-group-item list-group-item-action",to:"/movies/".concat(e.id),children:e.title},e.id)}))})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],isLoaded:!1,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;""!==this.props.jwt?fetch("".concat("http://aljanjic.com:4000/","/v1/movies")).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(t){e.setState({movies:t.movies,isLoaded:!0},(function(t){e.setState({isLoaded:!0,error:t})}))})):this.props.history.push({pathname:"/login"})}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoaded,r=e.error;return r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"Manage Catalogue"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(b.jsx)(m.b,{className:"list-group-item list-group-item-action",to:"/admin/movie/".concat(e.id),children:e.title},e.id)}))})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),v=n.p+"static/media/movie_tickets.8bbaed34.jpg",g=(n(36),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h2",{children:"Find a movie to watch tonight!"}),Object(b.jsx)("hr",{}),Object(b.jsx)(m.b,{to:"/movies",children:Object(b.jsx)("img",{src:v,alt:"movie ticket"})})]})}}]),n}(a.Component)),x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movie:{},isLoaded:!1,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://aljanjic.com:4000/","/v1/movie/")+this.props.match.params.id).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(t){e.setState({movie:t.movie,isLoaded:!0},(function(t){e.setState({isLoaded:!0,error:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.isLoaded,r=e.error;return t.genres?t.genres=Object.values(t.genres):t.genres=[],r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("h2",{children:["Movie: ",t.title," (",t.year,")"]}),Object(b.jsx)("div",{className:"float-start",children:Object(b.jsxs)("small",{children:["Rating: ",t.mpaa_rating]})}),Object(b.jsx)("div",{className:"float-end",children:t.genres.map((function(e,t){return Object(b.jsx)("span",{className:"badge bg-secondary me-1",children:e},t)}))}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("table",{className:"table table-compact table-striped",children:[Object(b.jsx)("thead",{}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Title:"})}),Object(b.jsx)("td",{children:t.title})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Description:"})}),Object(b.jsx)("td",{children:t.description})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Run time:"})}),Object(b.jsxs)("td",{children:[t.runtime," minutes"]})]})]})]})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={genres:[],isLoaded:!1,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://aljanjic.com:4000/","/v1/genres")).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(t){e.setState({genres:t.genres,isLoaded:!0},(function(t){e.setState({isLoaded:!0,error:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.genres,n=e.isLoaded,r=e.error;return r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"Genres"}),Object(b.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(b.jsx)(m.b,{className:"list-group-item list-group-item-action",to:{pathname:"/genre/".concat(e.id),genreName:e.genre_name},children:e.genre_name},e.id)}))})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],isLoaded:!1,error:null,genreName:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://aljanjic.com:4000/","/v1/movies/")+this.props.match.params.id).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(t){e.setState({movies:t.movies,isLoaded:!0,genreName:e.props.location.genreName},(function(t){e.setState({isLoaded:!0,error:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.isLoaded,r=e.error,s=e.genreName;return t||(t=[]),r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("h2",{children:["Genre: ",s]}),Object(b.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(b.jsx)(m.b,{to:"/movies/".concat(e.id),className:"list-group-item list-group-item-action",children:e.title},e.id)}))})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),C=n(16),N=(n(37),function(e){return Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:e.name,className:"form-label",children:e.title}),Object(b.jsx)("input",{type:e.type,className:"form-control ".concat(e.className),id:e.name,name:e.name,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}),Object(b.jsx)("div",{className:e.errorDiv,children:e.errorMsg})]})}),S=function(e){return Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsxs)("label",{htmlFor:e.name,className:"form-label",children:[" ",e.title," "]}),Object(b.jsxs)("select",{className:"form-select",name:e.name,value:e.value,onChange:e.handleChange,children:[Object(b.jsx)("option",{value:"",children:e.placeholder}),e.options.map((function(e){return Object(b.jsx)("option",{className:"form-select",value:e.id,label:e.value,children:e.value},e.id)}))]})]})},w=function(e){return Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form-label",children:e.title}),Object(b.jsx)("textarea",{className:"form-control",id:e.name,name:e.name,value:e.value,onChange:e.handleChange,rows:e.rows})]})},L=function(e){return Object(b.jsx)("div",{className:"alert ".concat(e.alertType),role:"alert",children:e.alertMessage})},k=n(24),T=(n(38),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=[];if(""===a.state.movie.title&&t.push("title"),a.setState({errors:t}),t.length>0)return!1;var n=new FormData(e.target),r=Object.fromEntries(n.entries()),s=new Headers;s.append("Content-Type","application/json"),s.append("Authorization","Bearer "+a.props.jwt);var i={method:"POST",body:JSON.stringify(r),headers:s};fetch("".concat("http://aljanjic.com:4000/","/v1/admin/editmovie"),i).then((function(e){return e.json()})).then((function(e){e.error?a.setState({alert:{type:"alert-danger",message:e.error.message}}):a.props.history.push({pathname:"/admin"})}))},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState((function(e){return{movie:Object(c.a)(Object(c.a)({},e.movie),{},Object(C.a)({},n,t))}}))},a.confirmDelete=function(e){console.log("would delete id",a.state.movie.id),Object(k.confirmAlert)({title:"Delete Movie?",message:"Are you sure?",buttons:[{label:"Yes",onClick:function(){var e=new Headers;e.append("Content-Type","application/json"),e.append("Authorization","Bearer "+a.props.jwt),fetch("".concat("http://aljanjic.com:4000/","/v1/admin/deletemovie/")+a.state.movie.id,{method:"GET",headers:e}).then((function(e){return e.json})).then((function(e){e.error?a.setState({alert:{type:"alert-danger",message:e.error.message}}):(a.setState({alert:{type:"alert-success",message:"Movie deleted!"}}),a.props.history.push({pathname:"/admin"}))}))}},{label:"No",onClick:function(){}}]})},a.state={movie:{id:0,title:"",release_date:"",runtime:"",mpaa_rating:"",rating:"",description:""},mpaaOptions:[{id:"G",value:"G"},{id:"PG",value:"PG"},{id:"PG13",value:"PG13"},{id:"R",value:"R"},{id:"NC17",value:"NC17"}],isLoaded:!1,error:null,errors:[],alert:{type:"d-none",message:""}},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(""!==this.props.jwt){var t=this.props.match.params.id;t>0?fetch("".concat("http://aljanjic.com:4000/","/v1/movie/")+t).then((function(t){if("200"!==t.status){var n=Error;n.message="Invalid response code: "+t.status,e.setState({error:n})}return t.json()})).then((function(n){var a=new Date(n.movie.release_date);e.setState({movie:{id:t,title:n.movie.title,release_date:a.toISOString().split("T")[0],runtime:n.movie.runtime,mpaa_rating:n.movie.mpaa_rating,rating:n.movie.rating,description:n.movie.description},isLoaded:!0},(function(t){e.setState({isLoaded:!0,error:t})}))})):this.setState({isLoaded:!0})}else this.props.history.push({pathname:"/login"})}},{key:"hasError",value:function(e){return-1!==this.state.errors.indexOf(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.movie,r=t.isLoaded,s=t.error;return s?Object(b.jsxs)("div",{children:["Error: ",s.message]}):r?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"Add/Edit Movie"}),Object(b.jsx)(L,{alertType:this.state.alert.type,alertMessage:this.state.alert.message}),Object(b.jsx)("hr",{}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"hidden",name:"id",id:"id",value:n.id,onChange:this.handleChange}),Object(b.jsx)(N,{title:"Title",className:this.hasError("title")?"is-invalid":"",type:"text",name:"title",value:n.title,handleChange:this.handleChange,errorDiv:this.hasError("title")?"text-danger":"d-none",errorMsg:"Please enter a title"}),Object(b.jsx)(N,{title:"Release Date",type:"date",name:"release_date",value:n.release_date,handleChange:this.handleChange}),Object(b.jsx)(N,{title:"Runtime",type:"text",name:"runtime",value:n.runtime,handleChange:this.handleChange}),Object(b.jsx)(S,{title:"MPAA Rating",name:"mpaa_rating",options:this.state.mpaaOptions,value:n.mpaa_rating,handleChange:this.handleChange,placeholder:"Choose..."}),Object(b.jsx)(N,{title:"Rating",type:"text",name:"rating",value:n.rating,handleChange:this.handleChange}),Object(b.jsx)(w,{title:"Description",name:"description",value:n.description,rows:"3",handleChange:this.handleChange}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",children:"Save"}),Object(b.jsx)(m.b,{to:"/admin",className:"btn btn-warning ms-1",children:"Cancel"}),n.id>0&&Object(b.jsx)("a",{href:"#!",onClick:function(){return e.confirmDelete()},className:"btn btn-danger ms-1",children:"Delete"})]})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component)),E=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(C.a)({},n,t))}))},a.handleSubmit=function(e){e.preventDefault();var t=[];if(""===a.state.email&&t.push("email"),""===a.state.password&&t.push("password"),a.setState({errors:t}),t.length>0)return!1;var n=new FormData(e.target),r=Object.fromEntries(n.entries()),s={method:"POST",body:JSON.stringify(r)};fetch("".concat("http://aljanjic.com:4000/","/v1/signin"),s).then((function(e){return e.json()})).then((function(e){e.error?a.setState({alert:{type:"alert-danger",message:e.error.message}}):(console.log(e),a.handleJWTChange(Object.values(e)[0]),window.localStorage.setItem("jwt",JSON.stringify(Object.values(e)[0])),a.props.history.push({pathname:"/admin"}))}))},a.state={email:"",password:"",error:null,errors:[],alert:{type:"d-none",message:""}},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"handleJWTChange",value:function(e){this.props.handleJWTChange(e)}},{key:"hasError",value:function(e){return-1!==this.state.errors.indexOf(e)}},{key:"render",value:function(){return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)("hr",{}),Object(b.jsx)(L,{alertType:this.state.alert.type,alertMessage:this.state.alert.message}),Object(b.jsxs)("form",{className:"pt-3",onSubmit:this.handleSubmit,children:[Object(b.jsx)(N,{title:"Email",type:"email",name:"email",handleChange:this.handleChange,className:this.hasError("email")?"is-invalid":"",errorDiv:this.hasError("email")?"text-danger":"d-none",errorMsg:"Please enter a valid email address"}),Object(b.jsx)(N,{title:"Password",type:"password",name:"password",handleChange:this.handleChange,className:this.hasError("password")?"is-invalid":"",errorDiv:this.hasError("password")?"text-danger":"d-none",errorMsg:"Please enter a password"}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{className:"btn btn-primary",children:"Login"})]})]})}}]),n}(a.Component),M=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target.value;a.setState((function(e){return{searchTerm:t}})),t.length>2?a.performSearch():a.setState({movies:[]})},a.state={movies:[],isLoaded:!1,error:null,alert:{type:"d-none",message:""},searchTerm:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"performSearch",value:function(){var e=this,t='\n        {\n            search(titleContains: "'.concat(this.state.searchTerm,'") {\n                id\n                title\n                runtime\n                year\n                description\n            }\n        }\n        '),n=new Headers;n.append("Content-Type","application/json");var a={method:"POST",body:t,headers:n};fetch("".concat("http://aljanjic.com:4000/","/v1/graphql"),a).then((function(e){return e.json()})).then((function(e){return console.log(e),Object.values(e.data.search)})).then((function(t){console.log(t),t.length>0?e.setState({movies:t}):e.setState({movies:[]})}))}},{key:"componentDidMount",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json");var n={method:"POST",body:"\n        {\n            list {\n                id\n                title\n                runtime\n                year\n                description\n            }\n        }\n        ",headers:t};fetch("".concat("http://aljanjic.com:4000/","/v1/graphql"),n).then((function(e){return e.json()})).then((function(e){return console.log(e),Object.values(e.data.list)})).then((function(t){console.log(t),e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("h2",{children:"GraphQL"}),Object(b.jsx)("hr",{}),Object(b.jsx)(N,{title:"Search",type:"text",name:"search",value:this.state.searchTerm,handleChange:this.handleChange}),Object(b.jsx)("div",{className:"list-group",children:e.map((function(e){return Object(b.jsxs)(m.b,{className:"list-group-item list-group-item-action",to:"/moviesgraphql/".concat(e.id),children:[Object(b.jsx)("strong",{children:e.title}),Object(b.jsx)("br",{}),Object(b.jsxs)("small",{className:"text-muted",children:["(",e.year,") - ",e.runtime," minutes"]}),Object(b.jsx)("br",{}),e.description.slice(0,100),"..."]},e.id)}))})]})}}]),n}(a.Component),D=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={movie:{},isLoaded:!1,error:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="\n    {\n        movie(id: ".concat(this.props.match.params.id,") {\n            id\n            title\n            runtime\n            year\n            description\n            release_date\n            rating\n            mpaa_rating\n            poster\n        }\n    }\n    "),n=new Headers;n.append("Content-Type","application/json");var a={method:"POST",body:t,headers:n};fetch("".concat("http://aljanjic.com:4000/","/v1/graphql"),a).then((function(e){return e.json()})).then((function(t){e.setState({movie:t.data.movie,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.isLoaded,r=e.error;return t.genres?t.genres=Object.values(t.genres):t.genres=[],r?Object(b.jsxs)("div",{children:["Error: ",r.message]}):n?Object(b.jsxs)(a.Fragment,{children:[Object(b.jsxs)("h2",{children:["Movie: ",t.title," (",t.year,")"]}),""!==t.poster&&Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster),alt:"poster"})}),Object(b.jsx)("div",{className:"float-start",children:Object(b.jsxs)("small",{children:["Rating: ",t.mpaa_rating]})}),Object(b.jsx)("div",{className:"float-end",children:t.genres.map((function(e,t){return Object(b.jsx)("span",{className:"badge bg-secondary me-1",children:e},t)}))}),Object(b.jsx)("div",{className:"clearfix"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("table",{className:"table table-compact table-striped",children:[Object(b.jsx)("thead",{}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Title:"})}),Object(b.jsx)("td",{children:t.title})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Description:"})}),Object(b.jsx)("td",{children:t.description})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:"Run time:"})}),Object(b.jsxs)("td",{children:[t.runtime," minutes"]})]})]})]})]}):Object(b.jsx)("p",{children:"Loading..."})}}]),n}(a.Component),_=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleJWTChange=function(e){a.setState({jwt:e})},a.logout=function(){a.setState({jwt:""}),window.localStorage.removeItem("jwt")},a.state={jwt:""},a.handleJWTChange(a.handleJWTChange.bind(Object(d.a)(a))),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("jwt");e&&""===this.state.jwt&&this.setState({jwt:JSON.parse(e)})}},{key:"render",value:function(){var e,t=this;return e=""===this.state.jwt?Object(b.jsx)(m.b,{to:"/login",children:"Login"}):Object(b.jsx)(m.b,{to:"/logout",onClick:this.logout,children:"Logout"}),Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col mt-3",children:Object(b.jsx)("h1",{className:"mt-3",children:"Go Watch a Movie!"})}),Object(b.jsx)("div",{className:"col mt-3 text-end",children:e}),Object(b.jsx)("hr",{className:"mb-3"})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-2",children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/movies",children:"Movies"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/genres",children:"Genres"})}),""!==this.state.jwt&&Object(b.jsxs)(a.Fragment,{children:[Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/admin/movie/0",children:"Add movie"})}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/admin",children:"Manage Catalogue"})})]}),Object(b.jsx)("li",{className:"list-group-item",children:Object(b.jsx)(m.b,{to:"/graphql",children:"GraphQL"})})]})})}),Object(b.jsx)("div",{className:"col-md-10",children:Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/movies/:id",component:x}),Object(b.jsx)(u.a,{path:"/moviesgraphql/:id",component:D}),Object(b.jsx)(u.a,{path:"/movies",children:Object(b.jsx)(p,{})}),Object(b.jsx)(u.a,{path:"/genre/:id",component:y}),Object(b.jsx)(u.a,{exact:!0,path:"/login",component:function(e){return Object(b.jsx)(E,Object(c.a)(Object(c.a)({},e),{},{handleJWTChange:t.handleJWTChange}))}}),Object(b.jsx)(u.a,{exact:!0,path:"/genres",children:Object(b.jsx)(f,{})}),Object(b.jsx)(u.a,{exact:!0,path:"/graphql",children:Object(b.jsx)(M,{})}),Object(b.jsx)(u.a,{path:"/admin/movie/:id",component:function(e){return Object(b.jsx)(T,Object(c.a)(Object(c.a)({},e),{},{jwt:t.state.jwt}))}}),Object(b.jsx)(u.a,{path:"/admin",component:function(e){return Object(b.jsx)(O,Object(c.a)(Object(c.a)({},e),{},{jwt:t.state.jwt}))}}),Object(b.jsx)(u.a,{path:"/",children:Object(b.jsx)(g,{})})]})})]})]})})}}]),n}(a.Component);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6fb8c650.chunk.js.map