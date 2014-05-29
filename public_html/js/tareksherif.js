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
  var scroll_start = 0;

  $(".vertical-text").each(function() {
    var el = $(this);
    el.text(el.text().replace(/(.)/g, '$1\n'));
  });

  $("#intro").addClass("enter");

  setTimeout(function() {
    $("#follow").addClass("enter");
  }, 500);


  yoffset += 450;

  ScrollEm.setScrollRange(200);

  ScrollEm.add(document.getElementById("graffiti-note1"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 158
      }
    }
  });

  scroll_start += 100;

  ScrollEm.add(document.getElementById("graffiti-note2"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 158
      }
    }
  });

  yoffset += 130;
  scroll_start += 100;

  ScrollEm.add(document.getElementById("about-me"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0,
      }
    }
  });

  yoffset += 130;
  scroll_start += 200;

  ScrollEm.add(document.getElementById("projects-intro"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 0,
      }
    }
  });

  ScrollEm.add(document.getElementById("projects-background"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 175
      },
      right: {
        start: 4000,
        end: (document.body.clientWidth - 800) / 2,
      }
    }
  });

  yoffset += 170;

  ScrollEm.add(document.getElementById("brainbrowser"), {
    start: scroll_start,
    end: scroll_start + 300,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: 4000,
        end: 0,
      }
    }
  });

  yoffset += 160;
  scroll_start += 100;

  ScrollEm.add(document.getElementById("cbrain"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0
      }
    }
  });

  yoffset += 210;
  scroll_start += 300;

  ScrollEm.add(document.getElementById("games-intro"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 25
      }
    }
  });

  ScrollEm.add(document.getElementById("games-background"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 170
      },
      left: {
        start: 4000,
        end: (document.body.clientWidth - 800) / 2,
      }
    }
  });

  yoffset += 170;
  scroll_start += 100;

  ScrollEm.add(document.getElementById("climb"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0
      }
    }
  });

  yoffset += 160;
  scroll_start -= 100;

  ScrollEm.add(document.getElementById("redsquare"), {
    start: scroll_start,
    end: scroll_start + 300,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: 4000,
        end: 0
      }
    }
  });

  yoffset += 210;
  scroll_start += 400;

  ScrollEm.add(document.getElementById("experiments-intro"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 0
      }
    }
  });

  ScrollEm.add(document.getElementById("experiments-background"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 175
      },
      right: {
        start: 4000,
        end: (document.body.clientWidth - 800) / 2,
      }
    }
  });

  yoffset += 170;
  scroll_start += 150;

  ScrollEm.add(document.getElementById("liquidglass"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      left: {
        start: 0,
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("flowers"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      right: {
        start: 0,
        end: 255
      }
    }
  });

  scroll_start += 50;

  ScrollEm.add(document.getElementById("moons"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      left: {
        start: -200,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("remains"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      right: {
        start: -200,
        end: 105
      }
    }
  });

  yoffset += 150;
  scroll_start += 50;

  ScrollEm.add(document.getElementById("storm"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset,
        end: yoffset
      },
      left: {
        start: -2000,
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("evolve"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset,
        end: yoffset
      },
      right: {
        start: -2000,
        end: 255
      }
    }
  });
  
  scroll_start += 50;

  ScrollEm.add(document.getElementById("spiral"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset - 750,
        end: yoffset
      },
      left: {
        start: -2000,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("snowflakes"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset - 750,
        end: yoffset
      },
      right: {
        start: -2000,
        end: 105
      }
    }
  });

  yoffset += 150;

  ScrollEm.add(document.getElementById("gravity"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      left: {
        start: 325
      }
    }
  });

  yoffset += 210;
  scroll_start += 400;

  ScrollEm.add(document.getElementById("libraries-intro"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 25
      }
    }
  });

  ScrollEm.add(document.getElementById("libraries-background"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 170
      },
      left: {
        start: 4000,
        end: (document.body.clientWidth - 800) / 2,
      }
    }
  });

  scroll_start -= 100;
  yoffset += 130;

  ScrollEm.add(document.getElementById("ofactory"), {
    start: scroll_start,
    end: scroll_start + 450,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0
      }
    }
  });


  ScrollEm.add(document.getElementById("tgame"), {
    start: scroll_start,
    end: scroll_start + 450,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 0
      }
    }
  });

  yoffset += 210;
  scroll_start += 400;

  ScrollEm.add(document.getElementById("mistakes-intro"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 25
      }
    }
  });

  ScrollEm.add(document.getElementById("mistakes-background"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 175
      },
      right: {
        start: 4000,
        end: (document.body.clientWidth - 800) / 2,
      }
    }
  });

  yoffset += 170;
  scroll_start += 150;

  ScrollEm.add(document.getElementById("mistake1"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake2"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 255
      }
    }
  });
  
  scroll_start += 50;

  ScrollEm.add(document.getElementById("mistake3"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset - 500,
        end: yoffset
      },
      left: {
        start: -2000,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake4"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset - 500,
        end: yoffset
      },
      right: {
        start: -2000,
        end: 105
      }
    }
  });

  yoffset += 150;
  scroll_start += 50;

  ScrollEm.add(document.getElementById("mistake5"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 255
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake6"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 255
      }
    }
  });

  scroll_start += 50;

  ScrollEm.add(document.getElementById("mistake7"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      left: {
        start: 0,
        end: 105
      }
    }
  });


  ScrollEm.add(document.getElementById("mistake8"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset + 2000,
        end: yoffset
      },
      right: {
        start: 0,
        end: 105
      }
    }
  });

  yoffset += 600;
  scroll_start += 600;

  ScrollEm.add(document.getElementById("thats-all"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0,
      }
    }
  });

  yoffset += 300;
  scroll_start += 300;

  ScrollEm.add(document.getElementById("thanks"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      right: {
        start: -2000,
        end: 0,
      }
    }
  });

  yoffset += 300;
  scroll_start += 300;

  ScrollEm.add(document.getElementById("contact"), {
    start: scroll_start,
    css: {
      top: {
        start: yoffset
      },
      left: {
        start: -2000,
        end: 0,
      }
    }
  });


})();

