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

utils = {
  // CaptureMouse code from Foundation HTML5 Animation with JavaScript
  // by Billy Lamberta and Keith Peters
  captureMouse: function(canvas) {
    var mouse = {x: 0, y: 0};
    
    canvas.addEventListener("mousemove", function(e) {
      var x, y;
      
      if (e.pageX !== undefined) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      
      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;
      
      mouse.x = x;
      mouse.y = y;
    }, false);
    
    return mouse;
  },
  
  // CaptureTouch code from Foundation HTML5 Animation with JavaScript
  // by Billy Lamberta and Keith Peters
  captureTouch: function(canvas) {
    var touch = {x: null, y: null, touching: false};
    
    function touchPosition(event) {
      var x, y;
      var e = event.touches[0];
      
      event.preventDefault();
      
      if (e.pageX !== undefined) {
        x = e.pageX;
        y = e.pageY;
      } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      
      x -= canvas.offsetLeft;
      y -= canvas.offsetTop;
      
      touch.x = x;
      touch.y = y;
    }
    
    canvas.addEventListener("touchstart", function(e) {
      e.preventDefault();
      
      touch.touching = true;
      touchPosition(e);
    }, false);
    
    canvas.addEventListener("touchend", function(e) {
      e.preventDefault();
    
      touch.x = null;
      touch.y = null;
      touch.touching = false;
    }, false);
    
    canvas.addEventListener("touchmove", touchPosition, false);
    
    return touch;
  },
  
  randomColor: function() {
    return "rgb(" + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ")";
  }
};
