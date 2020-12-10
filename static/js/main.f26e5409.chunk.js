(this.webpackJsonpspace=this.webpackJsonpspace||[]).push([[0],{11:function(t,e,n){t.exports=n(19)},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(10),r=n.n(o),i=n(3),l=n.n(i),c=n(8),u=n(4),h=n(5),p=n(2),d=n(7),m=n(6),v=n(1),f=n.n(v),y=(n(17),function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=f.a.map("map",{center:[this.props.lat,this.props.long],zoom:3});f.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}",{foo:"bar",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e);var n=f.a.icon({iconUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",iconSize:[100,100]}),a=f.a.marker([this.props.lat,this.props.long],{icon:n}).addTo(e);setInterval((function(){var e=f.a.latLng(t.props.lat,t.props.long);a.setLatLng(e)}),1e3)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"map",style:{height:"50vh",width:"50vw",minWidth:"20rem",textAlign:"center"}}))}}]),n}(a.Component)),g=(n(18),function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={lat:null,long:null,velocity:null,altitude:null,country:null},t.handleIss=t.handleIss.bind(Object(p.a)(t)),t.handleCountry=t.handleCountry.bind(Object(p.a)(t)),t}return Object(h.a)(n,[{key:"handleCountry",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,a=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://eu1.locationiq.com/v1/reverse.php?key=8a059ce76eacaf&lat=".concat(this.state.lat,"&lon=").concat(this.state.long,"&addressdetails=1&format=json"));case 2:if(404!==(e=t.sent).status){t.next=7;break}console.log("ISS is above sea, cannot fetch"),t.next=12;break;case 7:return t.next=9,e.json();case 9:void 0!==(n=t.sent).address?this.setState({country:n.address.country}):this.setState({country:null}),setTimeout((function(){a.handleCountry()}),1e4);case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleIss",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,a=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.wheretheiss.at/v1/satellites/25544");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({lat:n.latitude,long:n.longitude,velocity:n.velocity.toFixed(2),altitude:n.altitude.toFixed(2)}),setTimeout((function(){a.handleIss()}),5e3);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;this.handleIss(),setTimeout((function(){t.handleCountry()}),1e3)}},{key:"render",value:function(){var t="";return t=null===this.state.country?s.a.createElement("p",null,"The ISS is above ocean."):"Fetching Location..."===this.state.country?s.a.createElement("p",null,this.state.country,"."):s.a.createElement("p",null,"The ISS is above ",this.state.country,"."),null===this.state.lat||null===this.state.long?s.a.createElement("h1",null,"Loading, please wait..."):s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Current position of ISS (International Space Station)"),s.a.createElement("div",{className:"details"},s.a.createElement("h2",null,"ISS Details: "),s.a.createElement("p",null,"Latitude: ",this.state.lat," "),s.a.createElement("p",null,"Longitude: ",this.state.long," "),s.a.createElement("p",null,"Altitude: ",this.state.altitude," KM "),s.a.createElement("p",null,"Velocity: ",this.state.velocity," KM/H "),t),s.a.createElement(y,{className:"myMap",lat:this.state.lat,long:this.state.long}))}}]),n}(a.Component));r.a.render(s.a.createElement(g,null),document.querySelector("#root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f26e5409.chunk.js.map