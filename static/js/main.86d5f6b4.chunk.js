(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),i=a.n(r),s=(a(16),a(1)),l=a(2),o=a(4),h=a(3),u=a(5),m=a(9),d=a(6),f=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"container",id:"game-board"},this.props.children))}}]),t}(c.Component)),g=(a(18),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card-deck"},this.props.children)))}}]),t}(c.Component)),p=(a(19),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){!1===a.state.isMatched&&a.setState({isClicked:!0})},a.showGif=function(){return a.state.isClicked?a.state.gifImage:a.state.gifCoverImg},a.isMatched=function(){return a.state.isMatched?"success":"dark"},a.state={isClicked:!1,isMatched:a.props.isMatched,checkForMatch:a.props.checkForMatch,gifId:a.props.gifId,gifImage:a.props.gifImage,gifCoverImg:"http://assets.materialup.com/uploads/5d38e79f-3463-4f72-8716-5c62b2d9847b/0x0ss-85.jpg"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"card bg-".concat(this.isMatched()," text-center text-white revealed-card bg-").concat(this.isMatched()," border-").concat(this.isMatched()),style:{width:"300px",height:"125px"},onClick:function(t){e.state.checkForMatch(t.target.dataset.id),e.handleClick()},"data-id":this.props.dataId},n.a.createElement("img",{className:"card-img",src:this.showGif(),alt:this.props.gifTitle,style:{width:"100%",height:"90px"},"data-id":this.props.dataId}),n.a.createElement("p",{className:"card-title bg-".concat(this.isMatched()," text-muted"),"data-id":this.props.dataId},this.props.gifTitle)))}}]),t}(c.Component)),b=(a(20),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).formStateChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.submitSearch=function(e){if(e.preventDefault(),!a.state.hasSearched){var t="https://api.giphy.com/v1/gifs/search?q=".concat(a.state.gifSearchField,"&limit=15&api_key=").concat("c1BJcDvA6sWBiMUAcncBxkaoqiYADfoL"),c=Object(d.a)(Object(d.a)(a)),n=[],r=[],i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===this.readyState&&200===this.status)if(n=(n=JSON.parse(this.responseText)).data,console.log(n),15===n.length){r=(r=JSON.parse(this.responseText)).data;for(var e=0;e<r.length;e++)r[e].id+="-duplicate";console.log(r),console.log(n);var t=n.concat(r);t.sort(function(e,t){return.5-Math.random()}),c.setState({gifSearchResults:t,gifSearchField:"",hasSearched:!0,gameStart:!0}),console.log(c.state)}else c.setState({gifSearchResults:n,gifSearchField:"",hasSearched:!1,gameStart:!1})},i.open("GET",t,!0),i.send()}},a.disableSearch=function(){return a.state.gifSearchResults>=30?(a.state.hasSearched,"btn btn-outline-danger disabled"):"btn btn-outline-danger"},a.checkForMatch=function(e){0===a.state.clickNumber&&a.setState(function(t){return{firstClickId:e,clickNumber:t.clickNumber+1}},function(){return console.log(a.state)}),1===a.state.clickNumber&&a.setState(function(t){return{secondClickId:e,clickNumber:0}},function(){console.log(a.state),a.state.firstClickId===a.state.secondClickId&&(console.log("Found a match!"),a.setState({foundMatch:!0}))})},a.shortenDataId=function(e){return e.replace("-duplicate","")},a.resetGame=function(){document.getElementById("game-board").innerHTML="",window.location.assign("/")},a.state={mastheadInitialState:e,gifSearchField:"",gifOriginalArr:[],gifDuplicateArr:[],gifSearchResults:[],hasSearched:!1,gameStart:!1,clickNumber:0,firstClickId:"",secondClickId:"",foundMatch:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.state.foundMatch}},{key:"render",value:function(){var e=this;return this.state.gifSearchResults.length>=30?n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gifSearch",className:"text-light"},"Search for Gif"),n.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},n.a.createElement("input",{type:"text",name:"gifSearchField",className:"form-control",id:"gifSearch",placeholder:"Search for a Gif",value:this.state.gifSearchField,onChange:this.formStateChange}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{type:"submit",className:this.disableSearch(),id:"submitGif",onClick:this.submitSearch},"Search"))))))),n.a.createElement(f,null,n.a.createElement(g,null,this.state.gifSearchResults.map(function(t,a){return a<=5?n.a.createElement(p,{key:"".concat(t.id),gifImage:t.images.fixed_height.url,gifTitle:a+1,dataId:e.shortenDataId(t.id),isMatched:!1,checkForMatch:function(t){return e.checkForMatch(t)}}):n.a.createElement("div",{key:"card-row-1-".concat(a)})})),n.a.createElement(g,null,this.state.gifSearchResults.map(function(t,a){return a>5&&a<=11?n.a.createElement(p,{key:"".concat(t.id),gifImage:t.images.fixed_height.url,gifTitle:a+1,dataId:e.shortenDataId(t.id),isMatched:!1,checkForMatch:function(t){return e.checkForMatch(t)}}):n.a.createElement("div",{key:"card-row-2-".concat(a)})})),n.a.createElement(g,null,this.state.gifSearchResults.map(function(t,a){return a>11&&a<=17?n.a.createElement(p,{key:"".concat(t.id),gifImage:t.images.fixed_height.url,gifTitle:a+1,dataId:e.shortenDataId(t.id),isMatched:!1,checkForMatch:function(t){return e.checkForMatch(t)}}):n.a.createElement("div",{key:"card-row-3-".concat(a)})})),n.a.createElement(g,null,this.state.gifSearchResults.map(function(t,a){return a>17&&a<=23?n.a.createElement(p,{key:"".concat(t.id),gifImage:t.images.fixed_height.url,gifTitle:a+1,dataId:e.shortenDataId(t.id),isMatched:!1,checkForMatch:function(t){return e.checkForMatch(t)}}):n.a.createElement("div",{key:"card-row-4-".concat(a)})})),n.a.createElement(g,null,this.state.gifSearchResults.map(function(t,a){return a>23&&a<=29?n.a.createElement(p,{key:"".concat(t.id),gifImage:t.images.fixed_height.url,gifTitle:a+1,dataId:e.shortenDataId(t.id),isMatched:!1,checkForMatch:function(t){return e.checkForMatch(t)}}):n.a.createElement("div",{key:"card-row-5-".concat(a)})})),n.a.createElement("button",{type:"submit",className:"btn btn-danger",id:"reset-game",onClick:function(t){return e.resetGame(t)}},"Reset Game"))):this.state.gifSearchResults.length>2&&this.state.gifSearchResults.length<30?n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gifSearch",className:"text-light"},"Search for Gif"),n.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},n.a.createElement("input",{type:"text",name:"gifSearchField",className:"form-control",id:"gifSearch",placeholder:"Search for a Gif",value:this.state.gifSearchField,onChange:this.formStateChange}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{type:"submit",className:this.disableSearch(),id:"submitGif",onClick:this.submitSearch},"Search"))))))),n.a.createElement(f,null,n.a.createElement("h2",null,"Not Enough Gifs to fill the board.  Try Searching again!"))):n.a.createElement(c.Fragment,null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"gifSearch",className:"text-light"},"Search for Gif"),n.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},n.a.createElement("input",{type:"text",name:"gifSearchField",className:"form-control",id:"gifSearch",placeholder:"Search for a Gif",value:this.state.gifSearchField,onChange:this.formStateChange}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{type:"submit",className:this.disableSearch(),id:"submitGif",onClick:this.submitSearch},"Search"))))))),n.a.createElement(f,null,n.a.createElement("h2",null,"Search for Gifs to Start")))}}]),t}(c.Component)),S=(a(21),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(c.Fragment,null,n.a.createElement(b,null))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.86d5f6b4.chunk.js.map