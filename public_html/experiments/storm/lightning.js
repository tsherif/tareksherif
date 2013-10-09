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

var lightning = oFactory().share(function(proto) {
  
  function addEndPoint(self, start) {
    var angle = self.min_angle + Math.random() * self.angle_range;
    var length = self.min_length + Math.random() * self.length_range;
    var end = {
      x: start.x + Math.cos(angle) * length,
      y: start.y + Math.sin(angle) * length,
      width: self.reduceWidth(start.width)
    };
    self.end_points.push(end)
    self.segments.push({
      start: start,
      end: end
    });
  }
  
  proto.hasNext = function() {
    return this.end_points.length > 0;
  };
  
  proto.next = function() {
    var self = this;
    var starts = self.end_points;
    self.end_points = [];
    starts.forEach(function(start) {
      if (start.width > 1) {
        addEndPoint(self, start);
        while (Math.random() < self.branching_prob) {
          addEndPoint(self, start);
        }
      }
    });
  };  
  
  proto.draw = function(context) {
    context.save();
    
    context.strokeStyle = this.color;
    //context.globalAlpha = this.alpha;
    context.lineCap = "round";
    context.translate(this.x, this.y);
    
    this.segments.forEach(function(s) {
      context.save();
      context.beginPath();
      context.moveTo(s.start.x, s.start.y);
      context.lineWidth = s.start.width;  
      context.lineTo(s.end.x, s.end.y);
      context.stroke();
      context.restore();
    });
    context.restore();
  };
}).mixin({
  color: "#ffffff",
  x: 0,
  y: 0,
  min_length: 60,
  length_range: 40,
  starting_width: 20,
  min_angle: 0,
  segments: [],
  end_points: [],
  alpha: 1,
  angle_range: Math.PI,
  branching_prob: 0.2,
  reduceWidth: function(width) {
    return (Math.random() * 0.2 + 0.7) * width;
  }
}).init(function() {
  this.end_points.push({
    y: 0,
    x: 0,
    width: this.starting_width
  })
});