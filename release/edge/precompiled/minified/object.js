var Bb="isObject,isNaN".split(","),Cb="keys,values,each,merge,clone,equal,watch,tap,has".split(",");
function Db(a,b,c,d){var e=/^(.+?)(\[.*\])$/,g,f,i;if(d!==n&&(f=b.match(e))){i=f[1];b=f[2].replace(/^\[|\]$/g,"").split("][");b.forEach(function(j){g=!j||j.match(/^\d+$/);if(!i&&da(a))i=a.length;a[i]||(a[i]=g?[]:{});a=a[i];i=j});if(!i&&g)i=a.length.toString();Db(a,i,c)}else a[b]=c.match(/^[\d.]+$/)?parseFloat(c):c==="true"?k:c==="false"?n:c}E(p,n,k,{watch:function(a,b,c){if(ca){var d=a[b];p.defineProperty(a,b,{enumerable:k,configurable:k,get:function(){return d},set:function(e){d=c.call(a,b,d,e)}})}}});
E(p,n,function(a,b){return z(b)},{keys:function(a,b){var c=p.keys(a);c.forEach(function(d){b.call(a,d,a[d])});return c}});
E(p,n,n,{isObject:function(a){return L(a)},isNaN:function(a){return A(a)&&a.valueOf()!==a.valueOf()},equal:function(a,b){return va(a)&&va(b)?ua(a)===ua(b):a===b},extended:function(a){return new oa(a)},merge:function(a,b,c,d){var e,g;if(a&&typeof b!="string")for(e in b)if(ma(b,e)&&a){g=b[e];if(I(a[e])){if(d===n)continue;if(z(d))g=d.call(b,e,a[e],b[e])}if(c===k&&g&&la(g))if(ga(g))g=new s(g.getTime());else if(D(g))g=new r(g.source,ta(g));else{a[e]||(a[e]=q.isArray(g)?[]:{});p.merge(a[e],b[e],c,d);continue}a[e]=
g}return a},values:function(a,b){var c=[];G(a,function(d,e){c.push(e);b&&b.call(a,e)});return c},clone:function(a,b){if(!la(a))return a;if(q.isArray(a))return a.concat();var c=a instanceof oa?new oa:{};return p.merge(c,a,b)},fromQueryString:function(a,b){var c=p.extended();a=a&&a.toString?a.toString():"";a.replace(/^.*?\?/,"").split("&").forEach(function(d){d=d.split("=");d.length===2&&Db(c,d[0],decodeURIComponent(d[1]),b)});return c},tap:function(a,b){var c=b;z(b)||(c=function(){b&&a[b]()});c.call(a,
a);return a},has:function(a,b){return ma(a,b)}});H(p,n,n,x,function(a,b){var c="is"+b;Bb.push(c);a[c]=function(d){return p.prototype.toString.call(d)==="[object "+b+"]"}});(function(){E(p,n,function(){return arguments.length===0},{extend:function(){xa(Bb.concat(Cb),p)}})})();xa(Cb,oa);
