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
  "use strict";

  var yoffset = 0;
  var navigation = $(".navigation");
  var graffiti_canvas;

  $(document).scroll(function() {
    if (window.pageYOffset > 102) {
      navigation.css({
        position: "fixed",
        top: "0px"
      });
    } else {
      navigation.css({
        position: "absolute",
        top: "102px"
      });
    }
  });

  $("#graffiti-button").click(function() {
    var button = $(this);
    graffiti_canvas = graffiti_canvas || $(graffiti.get("graffiti-canvas"));

    function escapeKeyHide(e) {
      if (e.keyCode === 27) {
        hideGraffiti();
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

  setTimeout(function() {
    $("#follow").addClass("enter");
  }, 500);


  yoffset += 480;

  ScrollEm.setContainer(document.getElementById("content"));
  ScrollEm.setPageHeight(11500);
  ScrollEm.setDefaultScrollRange(175);

  ScrollEm.add(document.getElementById("graffiti-note1"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 158
      }
    }
  });

  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("graffiti-note2"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 158
      }
    }
  });

  yoffset += 180;
  ScrollEm.forward(150);

  ScrollEm.add(document.getElementById("about-me"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 100,
      }
    }
  });

  yoffset += 180;
  ScrollEm.forward(250);
  ScrollEm.addAnchor("projects", yoffset + 62);

  ScrollEm.add(document.getElementById("projects-intro"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 100,
      }
    }
  });

  ScrollEm.add(document.getElementById("projects-background"), {
    css: {
      top: {
        start: yoffset + 127
      },
      right: {
        start: "WINDOW_WIDTH",
        end: "MARGIN_RIGHT + 85",
      }
    }
  });

  yoffset += 170;
  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("brainbrowser"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 50,
      }
    }
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("cbrain"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 50
      }
    }
  });

  yoffset += 310;
  ScrollEm.forward(500);
  ScrollEm.addAnchor("games", yoffset + 62);

  ScrollEm.add(document.getElementById("games-intro"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 100
      }
    }
  });

  ScrollEm.add(document.getElementById("games-background"), {
    css: {
      top: {
        start: yoffset + 122
      },
      left: {
        start: "WINDOW_WIDTH",
        end: "MARGIN_LEFT + 85",
      }
    }
  });

  yoffset += 170;
  ScrollEm.forward(100);

  ScrollEm.add(document.getElementById("climb"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 25
      }
    }
  });

  yoffset += 160;

  ScrollEm.add(document.getElementById("redsquare"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 25
      }
    }
  });

  yoffset += 310;
  ScrollEm.forward(500);
  ScrollEm.addAnchor("experiments", yoffset + 62);

  ScrollEm.add(document.getElementById("experiments-intro"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 100
      }
    }
  });

  ScrollEm.add(document.getElementById("experiments-background"), {
    css: {
      top: {
        start: yoffset + 127
      },
      right: {
        start: "WINDOW_WIDTH",
        end: "MARGIN_RIGHT + 85",
      }
    }
  });

  yoffset += 170;
  ScrollEm.forward(150);

  ScrollEm.add(document.getElementById("liquidglass"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      left: {
        start: 0,
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("flowers"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      right: {
        start: 0,
        end: 255
      }
    }
  });

  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("moons"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      left: {
        start: -200,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("remains"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      right: {
        start: -200,
        end: 105
      }
    }
  });

  yoffset += 150;
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("storm"), {
    css: {
      top: {
        start: yoffset,
        end: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("evolve"), {
    css: {
      top: {
        start: yoffset,
        end: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });
  
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("spiral"), {
    css: {
      top: {
        start: yoffset - 750,
        end: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("snowflakes"), {
    css: {
      top: {
        start: yoffset - 750,
        end: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 105
      }
    }
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("gravity"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      left: {
        start: 325
      }
    }
  });

  yoffset += 310;
  ScrollEm.forward(500);
  ScrollEm.addAnchor("libraries", yoffset + 62);

  ScrollEm.add(document.getElementById("libraries-intro"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 100
      }
    }
  });

  ScrollEm.add(document.getElementById("libraries-background"), {
    css: {
      top: {
        start: yoffset + 122
      },
      left: {
        start: "WINDOW_WIDTH",
        end: "MARGIN_LEFT + 85",
      }
    }
  });

  ScrollEm.forward(150);
  yoffset += 130;


  ScrollEm.add(document.getElementById("ofactory"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 50
      }
    }
  });


  ScrollEm.add(document.getElementById("tgame"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 50
      }
    }
  });

  yoffset += 410;
  ScrollEm.forward(350);
  ScrollEm.addAnchor("mistakes", yoffset + 62);

  ScrollEm.add(document.getElementById("mistakes-intro"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 100
      }
    }
  });

  ScrollEm.add(document.getElementById("mistakes-background"), {
    css: {
      top: {
        start: yoffset + 127
      },
      right: {
        start: "WINDOW_WIDTH",
        end: (document.body.clientWidth - 800) / 2 + 85,
      }
    }
  });

  yoffset += 170;
  ScrollEm.forward(150);

  ScrollEm.add(document.getElementById("mistake1"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake2"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });
  
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake3"), {
    css: {
      top: {
        start: yoffset - 500,
        end: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake4"), {
    css: {
      top: {
        start: yoffset - 500,
        end: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 105
      }
    }
  });

  yoffset += 150;
  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake5"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake6"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 255
      }
    }
  });

  ScrollEm.forward(50);

  ScrollEm.add(document.getElementById("mistake7"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      left: {
        start: 0,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake8"), {
    css: {
      top: {
        start: yoffset + " + WINDOW_HEIGHT",
        end: yoffset
      },
      right: {
        start: 0,
        end: 105
      }
    }
  });

  yoffset += 500;
  ScrollEm.forward(600);

  ScrollEm.add(document.getElementById("thats-all"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 100,
      }
    }
  });

  yoffset += 300;
  ScrollEm.forward(300);

  ScrollEm.add(document.getElementById("thanks"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 100,
      }
    }
  });

  yoffset += 300;
  ScrollEm.forward(300);
  ScrollEm.addAnchor("contact-info", yoffset + 72);

  ScrollEm.add(document.getElementById("contact"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 100,
      }
    }
  });

  yoffset += 100;
  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("email"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 110,
      }
    }
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("twitter"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 202,
      }
    }
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("linkedin"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 294,
      }
    }
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("github"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 386,
      }
    }
  });

  ScrollEm.forward(30);

  ScrollEm.add(document.getElementById("wordpress"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "WINDOW_WIDTH",
        end: 480,
      }
    }
  });

  yoffset += 500;
  ScrollEm.forward(450);

  ScrollEm.add(document.getElementById("bye"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 350,
      }
    }
  });

  yoffset += 900;
  ScrollEm.forward(800);

  ScrollEm.add(document.getElementById("seriously"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 350,
      }
    }
  });

  yoffset += 1000;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("go-now"), {
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 350,
      }
    }
  });

  yoffset += 950;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("im-out"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 350,
      }
    }
  });

  yoffset += 1000;
  ScrollEm.forward(1000);

  ScrollEm.add(document.getElementById("puppy-text"), {
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: "-WINDOW_WIDTH",
        end: 180,
      }
    }
  });

  ScrollEm.add(document.getElementById("puppy-image"), {
    css: {
      top: {
        start: yoffset - 100
      },
      right: {
        start: "-WINDOW_WIDTH",
        end: 180,
      }
    }
  });

})();

