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


(function() {
  "use strict";

  var scroll_elements = [];
  var scroll_range = 200;

  window.ScrollEm = {
    add: function(element, options) {
      var scroll_element = { element: element };

      if (options.hasOwnProperty("start"))  {
        scroll_element.start = options.start;
      } else {
        throw new Error("Property start required.")
      }

      scroll_element.end = options.hasOwnProperty("end") ? options.end : scroll_element.start + scroll_range;


      scroll_element.css = options.css || {};
      
      Object.keys(scroll_element.css).forEach(function(property) {
        var start = scroll_element.css[property].start = scroll_element.css[property].start === undefined ? 0 : scroll_element.css[property].start;
        var end = scroll_element.css[property].end = scroll_element.css[property].end === undefined ? start : scroll_element.css[property].end;
        var units = scroll_element.css[property].units = scroll_element.css[property].units === undefined ? "px" : scroll_element.css[property].units;

        element.style[property] = start + units;
      });

      scroll_elements.push(scroll_element);
    },

    setScrollRange: function(range) {
      scroll_range = range;
    }
  };

  document.addEventListener("scroll", function() {
    var position = document.documentElement.scrollTop || document.body.scrollTop;

    scroll_elements.forEach(function(scroll_element) {
      var proportion = (position - scroll_element.start) / (scroll_element.end - scroll_element.start);
      proportion = Math.max(0, Math.min(proportion, 1));

      Object.keys(scroll_element.css).forEach(function(property) {
        var value = scroll_element.css[property].start + proportion * (scroll_element.css[property].end - scroll_element.css[property].start);
        scroll_element.element.style[property] = value + scroll_element.css[property].units;
      });
    });

  });

})();