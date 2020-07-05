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

$(function () {
  "use strict";

  var yoffset = 0;
  var navigation = $("#navigation");
  var WINDOW_WIDTH = window.innerWidth;
  var NAV_POSITION = navigation.css("position");
  var NAV_TOP = navigation.css("top");

  $("#footer").css("bottom", 0);

  $(window).resize(function() {
    WINDOW_WIDTH = window.innerWidth;
  });

  (function navUpdate() {
    var scroll_position = window.pageYOffset;
    var nav_position;
    var nav_top;

    if (WINDOW_WIDTH < 550) {
      if (scroll_position > 46) {
        nav_position = "fixed";
        nav_top = "0px";
      } else {
        nav_position = "absolute";
        nav_top = "46px";
      }
    } else if (WINDOW_WIDTH < 800) {
      if (scroll_position > 76) {
        nav_position = "fixed";
        nav_top = "0px";
      } else {
        nav_position = "absolute";
        nav_top = "76px";
      }
    } else {
      if (scroll_position > 102) {
        nav_position = "fixed";
        nav_top = "0px";
      } else {
        nav_position = "absolute";
        nav_top = "102px";
      }
    }

    if (NAV_POSITION !== nav_position || NAV_TOP !== nav_top) {
      NAV_POSITION = nav_position;
      NAV_TOP = nav_top;
      navigation.css({
        position: NAV_POSITION,
        top: NAV_TOP
      });
    }

    window.requestAnimationFrame(navUpdate);
  })();

  $(".vertical-text").each(function() {
    var el = $(this);
    el.text(el.text().replace(/(.)/g, '$1\n'));
  });

  ScrollEm.setContainer(document.getElementById("content"));
  ScrollEm.setPageHeight(14000);
  ScrollEm.setDefaultScrollRange(175);
  ScrollEm.setMinPageWidth(800);
  ScrollEm.setEasing(0.7);

  $(".nav-link").click(function() {
    ScrollEm.resetElements();
  });

  yoffset += 680;
  ScrollEm.forward(200);

  ScrollEm.add(document.getElementById("about-me"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 100"
      }
    ]
  });

  yoffset += 180;
  ScrollEm.forward(250);
  ScrollEm.addBookmark("work", yoffset - 16, {
    before: document.getElementById("work-intro"),
    offset: -66
  });

  ScrollEm.add(document.getElementById("work-intro"), {
    css: [
      {
        property: "top",
        start: yoffset + 8
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 108"
      }
    ]
  });

  ScrollEm.add(document.getElementById("work-background"), {
    css: [
      {
        property: "top",
        start: yoffset + 127
      },
      {
        property: "right",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH - (MARGIN_RIGHT + 85)"
      }
    ]
  });

  yoffset += 170;
  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("visgl"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("biodigital"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("brainbrowser"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("cbrain"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 310;
  ScrollEm.forward(730);
  ScrollEm.addBookmark("code", yoffset - 21, {
    before: document.getElementById("code-intro"),
    offset: -56
  });

  ScrollEm.add(document.getElementById("code-intro"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 100"
      }
    ]
  });

  ScrollEm.add(document.getElementById("code-background"), {
    css: [
      {
        property: "top",
        start: yoffset + 122
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + MARGIN_LEFT + 85"
      }
    ]
  });

  ScrollEm.forward(150);
  yoffset += 170;

  ScrollEm.add(document.getElementById("picogl"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("glcheck"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("webgl2examples"), {
    css: [
       {
         property: "top",
         start: yoffset
       },
       {
         property: "left",
         start: "WINDOW_WIDTH"
       },
       {
         property: "translateX",
         start: 0,
         end: "-WINDOW_WIDTH + 50"
       }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("webgpu-examples"), {
    css: [
       {
         property: "top",
         start: yoffset
       },
       {
         property: "left",
         start: "-WINDOW_WIDTH"
       },
       {
         property: "translateX",
         start: 0,
         end: "WINDOW_WIDTH + 50"
       }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("mercatorgl"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 50"
      }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("cervit"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 50"
      }      
    ]
  });

  yoffset += 310;
  ScrollEm.forward(720);
  ScrollEm.addBookmark("art", yoffset - 21, {
    before: document.getElementById("art-intro"),
    offset: -66
  });

  ScrollEm.add(document.getElementById("art-intro"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 100"
      }
    ]
  });

  ScrollEm.add(document.getElementById("art-background"), {
    css: [
      {
        property: "top",
        start: yoffset + 122
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + MARGIN_LEFT + 85"
      }
    ]
  });

  yoffset += 170;
  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("tesseract"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("theatre-end"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("space-music"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("in-gaza"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("climb"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("redsquare"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 25"
      }
    ]
  });

  yoffset += 700;
  ScrollEm.forward(1480);

  ScrollEm.add(document.getElementById("thats-all"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 100"
      }
    ]
  });

  yoffset += 800;
  ScrollEm.forward(800);

  ScrollEm.add(document.getElementById("thanks"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 100"
      }
    ]
  });

  yoffset += 800;
  ScrollEm.forward(800);
  ScrollEm.addBookmark("contact", yoffset - 16, {
    before: document.getElementById("in-touch"),
    offset: 124
  });

  ScrollEm.add(document.getElementById("in-touch"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 100"
      }
    ]
  });

  yoffset += 100;
  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("email"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 110"
      }
    ]
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("twitter"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 202"
      }
    ]
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("linkedin"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 294"
      }
    ]
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("github"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 386"
      }
    ]
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("wordpress"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH + 480"
      }
    ]
  });

  yoffset += 900;
  ScrollEm.forward(850);

  ScrollEm.add(document.getElementById("bye"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 350"
      }
    ]
  });

  yoffset += 900;
  ScrollEm.forward(900);

  ScrollEm.add(document.getElementById("seriously"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 330"
      }
    ]
  });

  yoffset += 1000;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("go-now"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 345"
      }
    ]
  });

  yoffset += 1000;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("im-out"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 250"
      }
    ]
  });

  yoffset += 1000;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("puppy-text"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 180"
      }
    ]
  });

  ScrollEm.add(document.getElementById("puppy-image"), {
    css: [
      {
        property: "top",
        start: yoffset - 100
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 180"
      }
    ]
  });

});

