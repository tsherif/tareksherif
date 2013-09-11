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
    
    canvas.addEventListener('mousemove', function(e) {
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
  
  drawDot: function(context, x, y, color) {
    color = color || "#ff0000";
    utils.withContext(context, function() {
      context.fillStyle = color;
      context.fillRect(x - 2, y - 2, 4, 4);
    });
  },
  
  withContext: function(context, callback) {
    context.save();
    callback();
    context.restore();
  },
  
  randomColor: function() {
    return "rgb(" + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ","
                  + Math.floor(Math.random() * 255) + ")";
  }
};