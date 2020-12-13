(this.webpackJsonpsongcrush=this.webpackJsonpsongcrush||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n,s=a(0),r=a(2),c=a.n(r),i=a(8),o=a.n(i),l=(a(14),a(3)),h=a(4),u=a(1),d=a(6),p=a(5),b=(a(15),a(16),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(t){var e=this;this.setState({term:t.target.value},(function(){e.search()})),t.preventDefault()}},{key:"handleKeyPress",value:function(t){13===t.charCode&&(this.props.search(this.state.term),t.preventDefault())}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"SearchBar",children:Object(s.jsx)("input",{placeholder:"Enter A Song, Album, or Artist",type:"text",value:this.state.term,onChange:this.handleTermChange,onKeyPress:this.handleKeyPress})})}}]),a}(c.a.Component)),m=(a(17),a(18),a(19),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return!0===this.props.isRemoval?Object(s.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:"-"}):Object(s.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Track",children:[Object(s.jsxs)("div",{className:"Track-information",children:[Object(s.jsx)("h3",{children:this.props.track.name}),Object(s.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album," "]})]}),this.renderAction()]})}}]),a}(c.a.Component)),j=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(e){return Object(s.jsx)(m,{track:e,onAdd:t.props.onAdd,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))})}}]),a}(c.a.Component),v=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"SearchResults",children:[Object(s.jsx)("h2",{children:"Results"}),Object(s.jsx)(j,{tracks:this.props.searchResults,onAdd:this.props.onAdd})]})}}]),a}(c.a.Component),f=(a(20),function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n.state={background:"rgba(255, 255, 255, 0.1)"},n}return Object(h.a)(a,[{key:"handleNameChange",value:function(t){this.props.onNameChange(t.target.value),this.setState({background:""===t.target.value?"rgba(255, 255, 255, 0.1":"transparent"})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"Playlist",children:[Object(s.jsx)("input",{placeholder:"Name Your Playlist",type:"text",onChange:this.handleNameChange,style:{backgroundColor:this.state.background}}),Object(s.jsx)(j,{tracks:this.props.playlistTracks,isRemoval:!0,onRemove:this.props.onRemove}),Object(s.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(c.a.Component)),k={getAccessToken:function(){if(n)return n;var t=window.location.href.match(/access_token=([^&]*)/),e=window.location.href.match(/expires_in=([^&]*)/);if(t&&e){n=t[1];var a=Number(e[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("6b2ac9d97bdf4391a5efb499ae1f2378","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://lauradotcom.github.io/songcrush");window.location=s},search:function(t){var e=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).then((function(t){return t.tracks?t.tracks.items.map((function(t){return{id:t.id,name:t.name,artist:t.artists[0].name,album:t.album.name,uri:t.uri}})):[]}))},savePlaylist:function(t,e){if(t&&e.length){var a,n=k.getAccessToken(),s={Authorization:"Bearer ".concat(n)};return fetch("https://api.spotify.com/v1/me",{headers:s}).then((function(t){return t.json()})).then((function(n){return a=n.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:t})}).then((function(t){return t.json()})).then((function(t){var n=t.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(n,"/tracks"),{headers:s,method:"POST",body:JSON.stringify({uris:e})})}))}))}}},y=k;y.getAccessToken();var O=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={searchResults:[],playlistName:"New SongCrush Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"addTrack",value:function(t){var e=this.state.playlistTracks;if(e.find((function(e){return e.id===t.id})))return t;e.push(t),this.setState({playlistTracks:e})}},{key:"removeTrack",value:function(t){var e=this.state.playlistTracks;e=e.filter((function(e){return e.id!==t.id})),this.setState({playlistTracks:e})}},{key:"updatePlaylistName",value:function(t){this.setState({playlistName:t})}},{key:"savePlaylist",value:function(){var t=this,e=this.state.playlistTracks.map((function(t){return t.uri}));y.savePlaylist(this.state.playlistName,e).then((function(){t.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(t){var e=this;y.search(t).then((function(t){e.setState({searchResults:t})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h1",{children:["Song",Object(s.jsx)("span",{className:"highlight",children:"Crush"})]}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{onSearch:this.search}),Object(s.jsxs)("div",{className:"App-playlist",children:[Object(s.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(s.jsx)(f,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(c.a.Component),T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.b780072f.chunk.js.map