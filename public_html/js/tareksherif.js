//////////////////////////////////////////////////////////////////////////////
//  tareksherif.ca: codebase for www.tareksherif.ca
//  Copyright (C) 2013  Tarek Sherif
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as
//  published by the Free Software Foundation, either version 3 of the
//  License, or (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.
//
//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//////////////////////////////////////////////////////////////////////////////

(function () {
  var libs_loaded = false;
  var WEBGLENABLED = (function() {
    try { 
      return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl'); 
    } catch(e) { 
      return false; 
    } 
  })();
  
  var CANVASAVAILABLE = !!document.createElement("canvas");
  
  // Have to load scripts using browser API because of bug
  // in how jQuery handles "use strict" in ajax requests.
  // http://bugs.jquery.com/ticket/14189
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }
  
  function webglScript() {
    if (libs_loaded) {
      loadScript("js/tareksherif.webgl.js");
    } else {
      setTimeout(webglScript, 5);
    }
  }
  
  function webglErrorMessage() {
    var el;
    var text = 'tareksherif.ca requires <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a> to render some elements,<br/>';
    text += 'but it seems to be unavailable in your browser.<br/>';
  	text += 'tareksherif.ca recommends <a href="https://www.mozilla.org/firefox" target="_blank">Mozilla Firefox</a> for optimal viewing.';
  	
    el = $('<div id="webgl-error">' + text + '</div>').appendTo($("#webgl"));
  }
  
  function displayImage() {
    var img = new Image();
    var shapes = ["hoop", "sphere", "cube"];
    var s_index = Math.floor(Math.random() * shapes.length);
    
    img.id = "webgl-replacement";
    
    img.src = "img/" + shapes[s_index] + ".png";
    $("#webgl").append(img);
  }
  
  if (WEBGLENABLED) {
    loadScript("js/three.min.js", function() {
      loadScript("js/TrackballControls.js", function() {
        libs_loaded = true;
      });
    });
  }
  

  $(function() {
    $(".button").button();
    $(".tabs").tabs();
    
    if (CANVASAVAILABLE) {
        $("#graffiti-button").click(function() {
        var button = $(this);
        
        function hideGraffiti() {
          graffiti.hide();
          button.find("span").text("Graffiti Mode");
          $(document).unbind("keydown", escapeKeyHide);
        }
        
        function escapeKeyHide(e) {
          if (e.keyCode === 27) {
            hideGraffiti();
          }
        }
        
        if (graffiti.isShowing()) {
          hideGraffiti();
        } else {
          graffiti.show();
          button.find("span").text("End Graffiti Mode");
          $(document).keydown(escapeKeyHide);
        }
      });
    } else {
      $("#graffiti-button").hide();
    }
    
    
    if (WEBGLENABLED) {
      webglScript();
    } else {
      displayImage();
    }
  });
})();

