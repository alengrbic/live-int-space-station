(window.webpackJsonpspace=window.webpackJsonpspace||[]).push([[0],{12:function(t,e,n){t.exports=n(20)},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),s=n(11),i=n.n(s),l=n(3),r=n.n(l),c=n(9),u=n(4),p=n(5),h=n(7),d=n(6),m=n(2),v=n(8),y=n(1),f=n.n(y),b=(n(18),function(t){function e(){return Object(u.a)(this,e),Object(h.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=f.a.map("map",{center:[this.props.lat,this.props.long],zoom:3});f.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGVuaGF0dGVyIiwiYSI6ImNqemQ0MXN0eTAyeTkzZHF0N2hrYXJ0OXAifQ.B1CbsLP5XDiqxf76mLG0EA",{maxZoom:3,minZoom:3,attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="http://mapbox.com">Mapbox</a>',id:"mapbox.streets"}).addTo(e);var n=f.a.icon({iconUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",iconSize:[100,100]}),a=f.a.marker([this.props.lat,this.props.long],{icon:n}).addTo(e);setInterval(function(){var e=f.a.latLng(t.props.lat,t.props.long);a.setLatLng(e)},1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"map",style:{height:"50vh",width:"50vw",minWidth:"20rem",textAlign:"center"}}))}}]),e}(a.Component)),g=(n(19),function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(h.a)(this,Object(d.a)(e).call(this))).state={lat:null,long:null,velocity:null,altitude:null,country:null},t.handleIss=t.handleIss.bind(Object(m.a)(t)),t.handleCountry=t.handleCountry.bind(Object(m.a)(t)),t}return Object(v.a)(e,t),Object(p.a)(e,[{key:"handleCountry",value:function(){var t=Object(c.a)(r.a.mark(function t(){var e,n,a=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://eu1.locationiq.com/v1/reverse.php?key=8a059ce76eacaf&lat=".concat(this.state.lat,"&lon=").concat(this.state.long,"&addressdetails=1&format=json"));case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),void 0!==n.address?this.setState({country:n.address.country}):this.setState({country:null}),setTimeout(function(){a.handleCountry()},1e4);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"handleIss",value:function(){var t=Object(c.a)(r.a.mark(function t(){var e,n,a=this;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.wheretheiss.at/v1/satellites/25544");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({lat:n.latitude,long:n.longitude,velocity:n.velocity.toFixed(2),altitude:n.altitude.toFixed(2)}),setTimeout(function(){a.handleIss()},5e3);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.handleIss(),this.handleCountry()}},{key:"render",value:function(){var t="";return t=null===this.state.country?o.a.createElement("p",null,"The ISS is above ocean."):o.a.createElement("p",null,"The ISS is above ",this.state.country,"."),null===this.state.lat||null===this.state.long?o.a.createElement("h1",null,"Loading, please wait..."):o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Current position of ISS (International Space Station)"),o.a.createElement("div",{className:"details"},o.a.createElement("h2",null,"ISS Details: "),o.a.createElement("p",null,"Latitude: ",this.state.lat," "),o.a.createElement("p",null,"Longitude: ",this.state.long," "),o.a.createElement("p",null,"Altitude: ",this.state.altitude," KM "),o.a.createElement("p",null,"Velocity: ",this.state.velocity," KM/H "),t),o.a.createElement(b,{className:"myMap",lat:this.state.lat,long:this.state.long}))}}]),e}(a.Component));i.a.render(o.a.createElement(g,null),document.querySelector("#root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.f075fbcb.chunk.js.map