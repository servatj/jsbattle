// figure it out on your own :)
var pa0q6gfr=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";importScripts("lib/tank.js");var r,i,a,u,o=n(1),s=n(3),l=n(4),h=n(5);tank.init(function(){r=new o,i=new s,a=new l(r),u=new h}),tank.loop(function(t,e){r.loop(t);var n=r.tanks.findClosest();i.setEnemy(n),i.setEnemyCount(r.tanks.count),i.update(t.x,t.y,t.angle+t.radar.angle),e.RADAR_TURN=i.turnOutput,t.collisions.wall?a.setEnemy(null):a.setEnemy(n),a.update(t.x,t.y,t.angle),e.THROTTLE=a.throttleOutput,e.TURN=a.turnOutput,e.BOOST=a.boostOutput,u.setEnemy(n),u.update(t.x,t.y,t.angle,t.gun.angle,t.radar.angle),e.GUN_TURN=u.turnOutput,e.SHOOT=u.shootOutput,e.DEBUG=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();return t.reverse().map(function(t,n){return String.fromCharCode(t-e-0-n)}).join("")}(25,126,102,59,147,123)+29508..toString(36).toLowerCase()+16..toString(36).toLowerCase().split("").map(function(t){return String.fromCharCode(t.charCodeAt()+-71)}).join("")+10..toString(36).toLowerCase().split("").map(function(t){return String.fromCharCode(t.charCodeAt()+-39)}).join("")+916..toString(36).toLowerCase().split("").map(function(t){return String.fromCharCode(t.charCodeAt()+-71)}).join("")+40707..toString(36).toLowerCase()+function(){var t=Array.prototype.slice.call(arguments),e=t.shift();return t.reverse().map(function(t,n){return String.fromCharCode(t-e-12-n)}).join("")}(38,105,102,104,86,163,163,156,165)+30..toString(36).toLowerCase().split("").map(function(t){return String.fromCharCode(t.charCodeAt()+-71)}).join("")+function(){var t=Array.prototype.slice.call(arguments),e=t.shift();return t.reverse().map(function(t,n){return String.fromCharCode(t-e-2-n)}).join("")}(5,55)})},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(2);t.exports=function(){function t(){r(this,t),this._bulletMemory=new a({lifetime:40,force:1}),this._tankMemory=new a({lifetime:60,force:2}),this._wallN=void 0,this._wallS=void 0,this._wallW=void 0,this._wallE=void 0}return i(t,[{key:"loop",value:function(t){this._bulletMemory.predict(),this._bulletMemory.add(t.radar.bullets),this._tankMemory.predict(),t.radar.enemy&&this._tankMemory.add(t.radar.enemy);var e=Math.deg.normalize(t.angle+t.radar.angle);t.radar.wallDistance&&e<-85&&e>-95&&(this._wallN=t.y-t.radar.wallDistance),t.radar.wallDistance&&e>85&&e<95&&(this._wallS=t.y+t.radar.wallDistance),t.radar.wallDistance&&e>-5&&e<5&&(this._wallE=t.x+t.radar.wallDistance),t.radar.wallDistance&&(e>175||e<-175)&&(this._wallW=t.x-t.radar.wallDistance)}},{key:"getForceVector",value:function(t,e){var n=this._tankMemory.getForceVector(t,e),r=this._bulletMemory.getForceVector(t,e),i=this._getWallForceVector(t,e),a=n.x+r.x+i.x,u=n.y+r.y+i.y,o=n.value+r.value+i.value;return{x:a,y:u,r:Math.distance(0,0,a,u),value:o}}},{key:"_getWallForceVector",value:function(t,e){var n,r=0,i=0,a=0;return void 0!==this._wallN&&(n=(n=Math.abs(e-this._wallN))?1/(n*n):1,a+=n*=10,i+=n),void 0!==this._wallS&&(n=(n=Math.abs(this._wallS-e))?1/(n*n):1,a+=n*=10,i-=n),void 0!==this._wallE&&(n=(n=Math.abs(t-this._wallE))?1/(n*n):1,a+=n*=10,r-=n,n),void 0!==this._wallW&&(n=(n=Math.abs(this._wallW-t))?1/(n*n):1,a+=n*=10,r+=n,n),{x:r,y:i,r:Math.distance(0,0,r,i),value:a}}},{key:"bullets",get:function(){return this._bulletMemory}},{key:"tanks",get:function(){return this._tankMemory}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(e){n(this,t),e||(e={}),this._map=[],this._count=0,this._lifetime=e.lifetime?e.lifetime:30,this._force=e.force?e.force:1}return r(t,[{key:"findClosest",value:function(t,e){var n,r,i,a=null;for(r in this._map)if(i=this._map[r]){var u=Math.distance(t,e,i.x,i.y);(!a||n>u)&&(n=u,a=i)}return a}},{key:"predict",value:function(){var t,e;this._count=0;for(t in this._map)(e=this._map[t])&&(e.age>this._lifetime?this._map[t]=null:(e.age++,e.x+=e.vx,e.y+=e.vy,this._count++))}},{key:"add",value:function(t){if(!Array.isArray(t))return this._addSingle(t);var e,n;for(e=0;e<t.length;e++)n=t[e],this._addSingle(n)}},{key:"getForceVector",value:function(t,e){var n,r,i,a,u,o=0,s=0,l=0;for(n in this._map)(r=this._map[n])&&(i=Math.distance(t,e,r.x,r.y),a=(t-r.x)/i,u=(e-r.y)/i,i=i?1/(i*i):1,o+=a*=i*=this._force,s+=u*=i,l+=i);return{x:o,y:s,r:Math.distance(0,0,o,s),value:l}}},{key:"_addSingle",value:function(t){t.age=0,t.vx=t.speed*Math.cos(t.angle*(Math.PI/180)),t.vy=t.speed*Math.sin(t.angle*(Math.PI/180)),this._map[t.id]=t}},{key:"count",get:function(){return this._count}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(){n(this,t),this._enemy=null,this._radarTurnDirection=1,this._focusTime=120,this._searchTime=60,this._timer=0,this._enemyCount=0,this._turnOutput=this._radarTurnDirection}return r(t,[{key:"setEnemy",value:function(t){this._enemy=t}},{key:"setEnemyCount",value:function(t){this._enemyCount=t}},{key:"update",value:function(t,e,n){if(this._timer++,this._enemy)if(this._timer>this._focusTime&&this._timer<this._focusTime+this._searchTime)this._search();else if(this._timer>this._focusTime+this._searchTime)this._reset();else{var r=Math.deg.atan2(this._enemy.y-e,this._enemy.x-t),i=Math.deg.normalize(r-n);this._turnOutput=.2*i,this._radarTurnDirection=this._turnOutput>0?1:-1}else this._search()}},{key:"_search",value:function(){this._turnOutput=this._radarTurnDirection}},{key:"_reset",value:function(){this._timer=0,this._enemyCount<=1?this._focusTime+=60:this._focusTime=120,this._search()}},{key:"turnOutput",get:function(){return this._turnOutput}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(e){n(this,t),this._map=e,this._boostOutput=0,this._turnOutput=0,this._throttleOutput=0,this._enemy=null}return r(t,[{key:"setEnemy",value:function(t){this._enemy=t}},{key:"update",value:function(t,e,n){var r=this._map.getForceVector(t,e);if(this._enemy){var i=Math.distance(t,e,this._enemy.x,this._enemy.y),a=Math.abs(250-i),u=a?(this._enemy.x-t)/a:0,o=a?(this._enemy.y-e)/a:0;a=a?1/(a*a):1,u*=a*=.1,o*=a,r.x+=u,r.y+=o,r.value+=a,r.r=Math.distance(0,0,r.x,r.y)}r.r?(r.x=r.value*(r.x/r.r),r.y=r.value*(r.y/r.r)):(r.x=0,r.y=0);var s=Math.deg.atan2(r.y,r.x),l=1,h=Math.deg.normalize(s-n);h>90?l=-1:h<-90&&(l=-1),this._turnOutput=.2*h,Math.abs(h)<90?(this._throttleOutput=l,this._boostOutput=1e3*r.r>1.2?1:0):(this._throttleOutput=0,this._boostOutput=0)}},{key:"throttleOutput",get:function(){return this._throttleOutput}},{key:"turnOutput",get:function(){return this._turnOutput}},{key:"boostOutput",get:function(){return this._boostOutput}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();t.exports=function(){function t(){n(this,t),this._turnOutput=0,this._shootOutput=0,this._enemy=null}return r(t,[{key:"setEnemy",value:function(t){this._enemy=t}},{key:"update",value:function(t,e,n,r,i){var a,u=n+r;if(!this._enemy)return a=Math.deg.normalize(i-r),this._turnOutput=.2*a,void(this._shootOutput=0);var o,s,l=this._enemy.x,h=this._enemy.y,c=this._enemy.speed,f=this._enemy.angle*(Math.PI/180);o=0,s=1;for(var y=0;y<10&&Math.abs(s)>=1;y++)o+=s=Math.distance(t,e,l,h)/4-o,l=this._enemy.x+o*c*Math.cos(f),h=this._enemy.y+o*c*Math.sin(f);var _=Math.deg.atan2(h-e,l-t);a=Math.deg.normalize(_-u),this._turnOutput=.2*a,Math.abs(a)<5?this._shootOutput=Math.max(0,(10-this._enemy.age)/10):this._shootOutput=0}},{key:"turnOutput",get:function(){return this._turnOutput}},{key:"shootOutput",get:function(){return this._shootOutput}}]),t}()}]);