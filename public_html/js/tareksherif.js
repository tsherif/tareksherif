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

  $(".vertical-text").each(function() {
    var el = $(this);
    el.text(el.text().replace(/(.)/g, '$1\n'));
  });

  setTimeout(function() {
    $("#follow").addClass("enter");
  }, 500);


  yoffset += 450;

  ScrollEm.setContainer(document.getElementById("content"));
  ScrollEm.setPageHeight(6000);
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

  yoffset += 130;
  ScrollEm.forward(100);

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

  yoffset += 130;
  ScrollEm.forward(300);

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
        start: yoffset + 175
      },
      right: {
        start: "WINDOW_WIDTH",
        end: "MARGIN_RIGHT + 85",
      }
    }
  });

  yoffset += 170;
  ScrollEm.forward(150);

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

  yoffset += 210;
  ScrollEm.forward(300);

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
        start: yoffset + 170
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

  yoffset += 210;
  ScrollEm.forward(250);

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
        start: yoffset + 175
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

  yoffset += 210;
  ScrollEm.forward(300);

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
        start: yoffset + 170
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

  yoffset += 210;
  ScrollEm.forward(250);

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
        start: yoffset + 175
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


})();

