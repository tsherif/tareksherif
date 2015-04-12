//////////////////////////////////////////////////////////////////////////////
//  tareksherif.net: codebase for www.tareksherif.net
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


// Spray paint code taken from 
// Foundation HTML5 Animation with JavaScript
// by Billy Lamberta and Keith Peters

(function() {
  "use strict";

  window.graffiti = {
    get: function(id) {
      var canvas = document.getElementById(id);
      canvas.width = document.body.offsetWidth;
      canvas.height = document.body.offsetHeight;

      var context = canvas.getContext("2d");
      var mouse = utils.captureMouse(canvas);
      var touch = utils.captureTouch(canvas);
      var cursor;
      var brush_size;
      var brush_density = 500;
      var brush_color;
      var spraying = false;
      var new_spray = false;
      
      window.addEventListener("resize", function() {
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
      });

      canvas.addEventListener("touchstart", function(e) {
        e.preventDefault();
        spraying = new_spray = true;
      }, false);
      
      canvas.addEventListener("touchend", function(e) {
        e.preventDefault();
        spraying = false;
      }, false);
      
      canvas.addEventListener("mousedown", function(e) {
        e.preventDefault();
        spraying = new_spray = true;
      }, false);
      
      canvas.addEventListener("mouseup", function(e) {
        e.preventDefault();
        spraying = false;
      }, false);
        
      (function update() {
        var i, angle, radius, xpos, ypos, offset, cursor;

        if (spraying) {
          cursor = touch.touching ? touch : mouse;

          if (new_spray) {
            brush_color = utils.randomColor();
            brush_size = Math.random() * 90 + 10;
            new_spray = false;
          }
          
          context.fillStyle = brush_color;

          for (i = 0; i < brush_density; i++) {
            angle = Math.random() * Math.PI * 2;
            radius = Math.random() * brush_size;
            xpos = Math.floor(cursor.x + Math.cos(angle) * radius);
            ypos = Math.floor(cursor.y + Math.sin(angle) * radius);
            
            context.fillRect(xpos, ypos, 1, 1);
          }
        }

        requestAnimationFrame(update);
      })();

      return canvas;
    }

  };
})();


