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

$(function () {
  "use strict";

  var yoffset = 0;
  var navigation = $("#navigation");
  var graffiti_canvas;
  var WINDOW_WIDTH = window.innerWidth;
  var NAV_POSITION = navigation.css("position");
  var NAV_TOP = navigation.css("top");

  $("#footer").css("bottom", 0);

  $(window).scroll(navUpdate).ready(navUpdate).resize(function() {
    WINDOW_WIDTH = window.innerWidth;
    navUpdate();
  });

  function navUpdate() {
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

  }

  $("#graffiti-button").click(function() {
    var button = $(this);
    graffiti_canvas = graffiti_canvas || $(graffiti.get("graffiti-canvas"));

    function escapeKeyHide(e) {
      if (e.keyCode === 27) {
        graffiti_canvas.hide();
        button.text("Graffiti Mode");
      }
    }
    
    if (graffiti_canvas.is(":visible")) {
      graffiti_canvas.hide();
      button.text("Graffiti Mode");
      $(document).unbind("keydown", escapeKeyHide);
    } else {
      graffiti_canvas.show();
      button.text("End Graffiti Mode");
      $(document).keydown(escapeKeyHide);
    }
  });


  $(".vertical-text").each(function() {
    var el = $(this);
    el.text(el.text().replace(/(.)/g, '$1\n'));
  });

  ScrollEm.setContainer(document.getElementById("content"));
  ScrollEm.setPageHeight(11500);
  ScrollEm.setDefaultScrollRange(175);
  ScrollEm.setMinPageWidth(800);

  yoffset += 680;
  ScrollEm.forward(200);

  ScrollEm.add(document.getElementById("graffiti-note1"), {
    css: [
      {
        property: "top",
        start: yoffset
      },
      {
        property: "right",
        start: "WINDOW_WIDTH",
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH - 400"
      }
    ]
  });

  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("graffiti-note2"), {
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
        end: "-WINDOW_WIDTH + 399"
      }
    ]
  });

  yoffset += 180;
  ScrollEm.forward(150);

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
  ScrollEm.addBookmark("projects", yoffset - 16, {
    before: document.getElementById("projects-intro"),
    offset: -86
  });

  ScrollEm.add(document.getElementById("projects-intro"), {
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
        end: "-WINDOW_WIDTH - 108"
      }
    ]
  });

  ScrollEm.add(document.getElementById("projects-background"), {
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
  ScrollEm.forward(500);
  ScrollEm.addBookmark("games", yoffset - 21, {
    before: document.getElementById("games-intro"),
    offset: -86
  });

  ScrollEm.add(document.getElementById("games-intro"), {
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

  ScrollEm.add(document.getElementById("games-background"), {
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

  yoffset += 310;
  ScrollEm.forward(500);
  ScrollEm.addBookmark("experiments", yoffset - 16, {
    before: document.getElementById("experiments-intro"),
    offset: -86
  });

  ScrollEm.add(document.getElementById("experiments-intro"), {
    css: [
      {
        property: "top",
        start: yoffset + 4
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 116"
      }
    ]
  });

  ScrollEm.add(document.getElementById("experiments-background"), {
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
        end: "WINDOW_WIDTH - MARGIN_RIGHT - 85"
      }
    ]
  });

  yoffset += 170;
  ScrollEm.forward(150);

  ScrollEm.add(document.getElementById("moons"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "left",
        start: 0
      },
      {
        property: "translateX",
        start: 0,
        end: 255
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });


  ScrollEm.add(document.getElementById("liquidglass"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "right",
        start: 0
      },
      {
        property: "translateX",
        start: 0,
        end: -255
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });

  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("voicecolour"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "left",
        start: -200
      },
      {
        property: "translateX",
        start: 0,
        end: 305
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }

    ]
  });


  ScrollEm.add(document.getElementById("flowers"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "right",
        start: -200
      },
      {
        property: "translateX",
        start: 0,
        end: -305
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });

  yoffset += 150;
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("spiral"), {
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
        end: "WINDOW_WIDTH + 255"
      }
    ]
  });


  ScrollEm.add(document.getElementById("storm"), {
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
        end: "-WINDOW_WIDTH - 255"
      }
    ]
  });
  
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("remains"), {
    css: [
      {
        property: "top",
        start: yoffset - 750
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 105"
      },
      {
        property: "translateY",
        start: 0,
        end: 750
      }
    ]
  });


  ScrollEm.add(document.getElementById("evolve"), {
    css: [
      {
        property: "top",
        start: yoffset - 750
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 105"
      },
      {
        property: "translateY",
        start: 0,
        end: 750
      }
    ]
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("snowflakes"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "left",
        start: 255
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });

  ScrollEm.add(document.getElementById("gravity"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "right",
        start: 255
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });

  yoffset += 310;
  ScrollEm.forward(500);
  ScrollEm.addBookmark("libraries", yoffset - 21, {
    before: document.getElementById("libraries-intro"),
    offset: -66
  });

  ScrollEm.add(document.getElementById("libraries-intro"), {
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

  ScrollEm.add(document.getElementById("libraries-background"), {
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
  yoffset += 130;


  ScrollEm.add(document.getElementById("scroll-em"), {
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

  ScrollEm.add(document.getElementById("ofactory"), {
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

  ScrollEm.add(document.getElementById("tgame"), {
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

  ScrollEm.add(document.getElementById("gl-utils"), {
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

  yoffset += 410;
  ScrollEm.forward(850);
  ScrollEm.addBookmark("mistakes", yoffset - 16, {
    before: document.getElementById("mistakes-intro"),
    offset: -86
  });

  ScrollEm.add(document.getElementById("mistakes-intro"), {
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
        end: "-WINDOW_WIDTH - 110"
      }
    ]
  });

  ScrollEm.add(document.getElementById("mistakes-background"), {
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
        end: "WINDOW_WIDTH - MARGIN_RIGHT - 85"
      }
    ]
  });

  yoffset += 170;
  ScrollEm.forward(150);

  ScrollEm.add(document.getElementById("mistake1"), {
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
        end: "WINDOW_WIDTH + 255"
      }
    ]
  });


  ScrollEm.add(document.getElementById("mistake2"), {
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
        end: "-WINDOW_WIDTH - 255"
      }
    ]
  });
  
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake3"), {
    css: [
      {
        property: "top",
        start: yoffset - 500
      },
      {
        property: "left",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "WINDOW_WIDTH + 105"
      },
      {
        property: "translateY",
        start: 0,
        end: 500
      }
    ]
  });

  ScrollEm.add(document.getElementById("mistake4"), {
    css: [
      {
        property: "top",
        start: yoffset - 500
      },
      {
        property: "right",
        start: "-WINDOW_WIDTH"
      },
      {
        property: "translateX",
        start: 0,
        end: "-WINDOW_WIDTH - 105"
      },
      {
        property: "translateY",
        start: 0,
        end: 500
      }
    ]
  });

  yoffset += 150;
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake5"), {
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
        end: "WINDOW_WIDTH + 255"
      }
    ]
  });


  ScrollEm.add(document.getElementById("mistake6"), {
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
        end: "-WINDOW_WIDTH - 255"
      }
    ]
  });

  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake7"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "left",
        start: 0
      },
      {
        property: "translateX",
        start: 0,
        end: 105
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });


  ScrollEm.add(document.getElementById("mistake8"), {
    css: [
      {
        property: "top",
        start: yoffset + " + WINDOW_HEIGHT"
      },
      {
        property: "right",
        start: 0
      },
      {
        property: "translateX",
        start: 0,
        end: -105
      },
      {
        property: "translateY",
        start: 0,
        end: "-WINDOW_HEIGHT"
      }
    ]
  });

  yoffset += 500;
  ScrollEm.forward(550);

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

  yoffset += 300;
  ScrollEm.forward(300);

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

  yoffset += 300;
  ScrollEm.forward(300);
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

  yoffset += 500;
  ScrollEm.forward(450);

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
  ScrollEm.forward(800);

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

  yoffset += 950;
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

