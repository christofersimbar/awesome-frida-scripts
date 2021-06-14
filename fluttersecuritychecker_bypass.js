/**
Root detection bypass script for FlutterSecurityChecker
https://github.com/Dev-hwang/flutter_security_checker
**/
var target = ObjC.classes.JailBreakChecker;

Interceptor.attach(target['+ isJailBroken'].implementation, {
  onEnter: function (args) {
    console.log('Entering + isJailBroken!');
  },
  onLeave: function (retval) {
    console.log('Leaving + isJailBroken');
    retval.replace(0);
  },
});