(this.webpackJsonpseashellplayer=this.webpackJsonpseashellplayer||[]).push([[0],{55:function(e,s,t){},80:function(e,s,t){},81:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(0),n=t.n(a),r=t(35),i=t.n(r),o=(t(55),t(12)),l=t(13),d=t(15),u=t(14),h=t(20),j=t(4),p=t.p+"static/media/logo.0079cc03.svg",b=t.p+"static/media/seashellicon.21f20d11.svg",m=t.p+"static/media/hearticon.57f7c679.svg",x=t(16),O=t.n(x),v=t(19),g=t.p+"static/media/searchicon.0da34784.svg",f=t.p+"static/media/forwardarrow.c9ac1875.svg",y=function(e){Object(d.a)(t,e);var s=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=s.call(this)).state={searchKeyword:""},e}return Object(l.a)(t,[{key:"handleSubmit",value:function(){var e=Object(v.a)(O.a.mark((function e(s,t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,this.props.getKeyword(t);case 3:case"end":return e.stop()}}),e,this)})));return function(s,t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.setState({searchKeyword:""})}},{key:"render",value:function(){var e=this,s=this.state.searchKeyword;return Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("h1",{className:"explore",children:"Explore Podcasts"}),Object(c.jsxs)("div",{className:"search-section",children:[Object(c.jsxs)("div",{className:"search-top",children:[Object(c.jsx)("div",{className:"search-icon",children:Object(c.jsx)("img",{src:g,alt:"search logo"})}),Object(c.jsx)("div",{className:"search-podcasts",children:Object(c.jsx)("h4",{children:"Search Podcasts"})})]}),Object(c.jsx)("div",{className:"search-keyword",children:Object(c.jsxs)("form",{className:"search-keyword-form",onSubmit:function(t){return e.handleSubmit(t,s)},children:[Object(c.jsx)("input",{type:"text",required:!0,value:s,onChange:function(s){return e.setState({searchKeyword:s.target.value})}}),Object(c.jsx)("img",{className:"search-keyword-form forwardarrow",src:f,alt:"forward-arrow logo",onClick:function(t){return e.handleSubmit(t,s)}})]})})]})]})}}]),t}(n.a.Component),N=t(49),w=t(21),k=t.n(w),S=t(48),I=(t(74),t.p+"static/media/heartoutlineicon.531d0ed8.svg"),E=t.p+"static/media/playbutton.4c207104.svg",P=t.p+"static/media/pausebutton.54351a8f.svg",C=function(e){Object(d.a)(t,e);var s=Object(u.a)(t);function t(e){var c;return Object(o.a)(this,t),(c=s.call(this,e)).skipEpisode=function(){var e=Object(v.a)(O.a.mark((function e(s,t){var a,n,r,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.state,n=a.podcast,r=a.currentIndex,i=a.len,s.preventDefault(),o=t?r===i-1?0:r+1:0===r?i-1:r-1,e.next=5,c.setState({currentIndex:o,playing:n.episodes[o]});case 5:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),c.playNextEpisode=function(){var e=Object(v.a)(O.a.mark((function e(s,t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,c.setState({playing:t,currentIndex:c.state.podcast.episodes.findIndex((function(e){return e.id===t.id}))});case 3:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}(),c.state={id:null,podcast:null,playing:null,currentIndex:0,len:-1},c}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://listen-api.listennotes.com/api/v2/podcasts/".concat(this.props.podcastId),{headers:{"X-ListenAPI-Key":"6850f9c4752c4edbad752bcf2464bc44"}}).then((function(s){e.setState({podcast:s.data,playing:s.data.episodes[0],len:s.data.episodes.length})})).catch((function(e){e.response?console.log("Problem with response ",e.response.status):e.requests?console.log("Problem with requests"):console.log("Error ",e.message)}))}},{key:"render",value:function(){var e=this,s=this.state,t=s.podcast,a=s.playing;return t?Object(c.jsx)("div",{className:"player",children:Object(c.jsx)("div",{className:"player-episodes",children:Object(c.jsxs)("div",{className:"podcast-player",children:[Object(c.jsxs)("div",{className:"episode-playing",children:[Object(c.jsx)("div",{className:"episode-favicon",children:Object(c.jsx)("img",{src:I,alt:"heart outline icon"})}),Object(c.jsxs)("div",{className:"episode-detail",children:[Object(c.jsx)("div",{className:"episode-img",children:Object(c.jsx)("img",{src:a.image,alt:"episode"})}),Object(c.jsxs)("div",{className:"episode-desc",children:[Object(c.jsx)("h4",{children:a.title.substring(0,50)}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:a.description.substring(0,200)}})]})]}),Object(c.jsx)("div",{className:"audio-control",children:Object(c.jsx)(S.a,{className:"audio-player",autoPlay:!1,src:a.audio,muted:!0,showSkipControls:!0,showJumpControls:!0,onClickPrevious:function(s){return e.skipEpisode(s,!1)},onClickNext:function(s){return e.skipEpisode(s,!0)},customIcons:{play:Object(c.jsx)("img",{src:E,alt:"play button"}),pause:Object(c.jsx)("img",{src:P,alt:"pause button"})},customAdditionalControls:[]})})]}),Object(c.jsx)("div",{className:"nextEpisode",children:Object(c.jsx)("h3",{children:"Next Episodes"})}),Object(c.jsx)("div",{className:"nextEpisode-list",children:t.episodes.map((function(s){return Object(c.jsxs)("div",{className:"nextEpisode-list-item",children:[Object(c.jsxs)("div",{className:"nextEpisode-list-item-left",children:[Object(c.jsxs)("h5",{children:[s.title.substring(0,25),"..."]}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:s.description.substring(0,75)}})]}),Object(c.jsx)("div",{className:"nextEpisode-list-item-right",children:Object(c.jsx)("button",{id:"play",onClick:function(t){return e.playNextEpisode(t,Object(N.a)({},s))},children:Object(c.jsx)("img",{src:E,alt:"play button"})})})]},s.id)}))})]})})}):null}}]),t}(n.a.Component),K=t.p+"static/media/backarrow.b06df29b.svg",_=t.p+"static/media/loadingicon.4ee392fc.svg",D=function(e){Object(d.a)(t,e);var s=Object(u.a)(t);function t(e){var c;return Object(o.a)(this,t),(c=s.call(this,e)).handleResults=function(e){e.preventDefault(),c.props.reset()},c.handlePodcast=function(e,s){e.preventDefault(),c.props.handlePodcast(s)},c.state={podcasts:[],loading:!0},c}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://listen-api.listennotes.com/api/v2/search?q=".concat(this.props.keyword,"&type=episode&language=English&safe_mode=0&only_in=title,description,author,audio"),{headers:{"X-ListenAPI-Key":"6850f9c4752c4edbad752bcf2464bc44"}}).then((function(s){e.setState({podcasts:[s.data],loading:!1})})).catch((function(e){e.response?console.log("Problem with response ",e.response.status):e.requests?console.log("Problem with requests"):console.log("Error ",e.message)}))}},{key:"render",value:function(){var e=this,s=this.props.keyword,t=this.state,a=t.podcasts,n=t.loading;return s?n?Object(c.jsx)("div",{className:"loadingShell",children:Object(c.jsxs)("h1",{children:["Lo",Object(c.jsx)("img",{src:_,alt:"seashell logo"}),"ding..."]})}):Object(c.jsxs)("div",{className:"results",children:[Object(c.jsxs)("div",{className:"results-control",children:[Object(c.jsx)("div",{className:"results-backarrow",children:Object(c.jsx)(h.b,{to:"/",onClick:function(s){return e.handleResults(s)},children:Object(c.jsx)("img",{src:K,alt:"back-arrow logo"})})}),Object(c.jsx)("div",{className:"results-header",children:Object(c.jsx)("h1",{children:"Results"})})]}),a.length>0&&a[0].count>0&&Object(c.jsx)("div",{className:"podcast-results",children:this.state.podcasts.map((function(s,t){return Object(c.jsx)("div",{className:"podcast-list",children:s.results.map((function(s,t){return Object(c.jsxs)("div",{className:"podcast",onClick:function(t){return e.handlePodcast(t,s.podcast.id)},children:[Object(c.jsx)("div",{className:"podcast-left",children:Object(c.jsx)("img",{src:s.podcast.image,className:"podcast-img",alt:"podcast"})}),Object(c.jsxs)("div",{className:"podcast-right",children:[Object(c.jsxs)("h5",{className:"podcast-header",children:[s.title_original.substring(0,25),"..."]}),Object(c.jsxs)("p",{className:"podcast-desc",children:[s.description_original.substring(0,50),"..."]}),Object(c.jsxs)("p",{className:"podcast-minutes",children:["number"===typeof s.audio_length_sec?(s.audio_length_sec/60).toFixed(2):s.audio_length_sec," MINUTES"]})]})]},t)}))},t)}))}),a.length>0&&0===a[0].count&&Object(c.jsx)("div",{className:"nopodcast",children:Object(c.jsxs)("h2",{children:["Empty ",Object(c.jsx)("img",{src:_,alt:"seashell logo"})," ! Podcast on ",Object(c.jsx)("span",{children:s})," not found. Please search some other podcast!"]})})]}):null}}]),t}(n.a.Component),q=(t(80),function(e){Object(d.a)(t,e);var s=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=s.call(this)).getKeyword=function(s){e.setState({searchKeyword:s,podcastId:null})},e.handlePodcast=function(s){e.setState({searchKeyword:null,podcastId:s})},e.reset=function(){e.setState({searchKeyword:null,podcastId:null})},e.state={searchKeyword:null,podcasts:[],podcastId:null},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,s=this.state,t=s.searchKeyword,a=s.podcastId;return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(h.a,{basename:"/seashellplayer",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)("div",{className:"logos",children:[Object(c.jsx)("div",{className:"shellicon",children:Object(c.jsx)("img",{src:b,alt:"seashell logo"})}),Object(c.jsx)("div",{className:"app-logo",children:Object(c.jsx)(h.b,{to:"/",onClick:this.reset,children:Object(c.jsx)("img",{src:p,alt:"app logo"})})}),Object(c.jsx)("div",{className:"hearticon",children:Object(c.jsx)("img",{src:m,alt:"heart logo"})})]})}),Object(c.jsx)(j.a,{exact:!0,path:"/",render:function(){return t||a?a?Object(c.jsx)("div",{className:"search-player",children:Object(c.jsx)(C,{podcastId:a})}):Object(c.jsx)("div",{className:"results-screen",children:Object(c.jsx)(D,{keyword:t,reset:e.reset,handlePodcast:e.handlePodcast})}):Object(c.jsx)("div",{className:"search-screen",children:Object(c.jsx)(y,{getKeyword:e.getKeyword})})}})]})})}}]),t}(n.a.Component));i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.0ee04826.chunk.js.map