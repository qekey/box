var Proxy = require('hessian-proxy').Proxy;
 
var proxy = new Proxy('http://hessian.caucho.com/test/test2', proxy);
 
proxy.invoke(methodName, [ ], function(err, reply) {
    // ... do with reply 
});
  