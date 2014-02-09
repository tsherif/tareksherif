// shim for requestAnimationFrame
window.requestAnimationFrame = window.requestAnimationFrame ||
                               window.webkitRequestAnimationFrame ||
                               window.mozRequestAnimationFrame ||
                               window.oRequestAnimationFrame ||
                               window.msRequestAnimationFrame ||
                               function(callback){
                                 return window.setTimeout(callback, 1000 / 60);
                               };

window.cancelAnimationFrame = window.cancelAnimationFrame ||
                              function(id){
                                window.clearTimeout(id);
                              };