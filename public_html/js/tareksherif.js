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
  
$(function() {
  $(".tabs").tabs();
  if (webgl_enabled()) {
    webglScripts();
  } else {
    displayImage();
  }
  
  function webgl_enabled() { 
    try { 
      return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl'); 
    } catch(e) { 
      return false; 
    } 
  }
  
  function webglScripts() {
    $.get("js/three.min.js", function() {
      $.get("js/TrackballControls.js", function() {
        $.get("js/tareksherif.webgl.js");
      });
    });
  }
  
  function webGLErrorMessage() {
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
});
