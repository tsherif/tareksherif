var gl_utils = {
  getGL: function getGL(canvas) {
    var gl = canvas.getContext("experimental-webgl");
    gl.viewport(0, 0, canvas.width, canvas.height);

    var vshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vshader, document.getElementById("vertex-shader").text);
    gl.compileShader(vshader);
    if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(vshader));
    }

    var fshader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fshader, document.getElementById("fragment-shader").text);
    gl.compileShader(fshader);
    if (!gl.getShaderParameter(fshader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fshader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);
    gl.program = program;

    return gl;
  },

  createBox: function createBox(params) {
    var position = params.position || [0, 0, 0];
    var dimensions = params.dimensions || [1, 1, 1];
    var color = params.color || [1, 1, 1, 1];
    var x = position[0];
    var y = position[1];
    var z = position[2]
    var width = dimensions[0];
    var height = dimensions[1];
    var depth = dimensions[2];
    var r = color[0];
    var g = color[1];
    var b = color[2];
    var a = color[3];


    var fbl = {x: x,         y: y,          z: z + depth};
    var fbr = {x: x + width, y: y,          z: z + depth};
    var ftl = {x: x,         y: y + height, z: z + depth};
    var ftr = {x: x + width, y: y + height, z: z + depth};
    var bbl = {x: x,         y: y,          z: z };
    var bbr = {x: x + width, y: y,          z: z };
    var btl = {x: x,         y: y + height, z: z };
    var btr = {x: x + width, y: y + height, z: z };

    var vertices = new Float32Array([
      //front
      fbl.x, fbl.y, fbl.z,
      fbr.x, fbr.y, fbr.z,
      ftl.x, ftl.y, ftl.z,
      ftl.x, ftl.y, ftl.z,
      fbr.x, fbr.y, fbr.z,
      ftr.x, ftr.y, ftr.z,

      //right
      fbr.x, fbr.y, fbr.z,
      bbr.x, bbr.y, bbr.z,
      ftr.x, ftr.y, ftr.z,
      ftr.x, ftr.y, ftr.z,
      bbr.x, bbr.y, bbr.z,
      btr.x, btr.y, btr.z,

      //back
      fbr.x, bbr.y, bbr.z,
      bbl.x, bbl.y, bbl.z,
      btr.x, btr.y, btr.z,
      btr.x, btr.y, btr.z,
      bbl.x, bbl.y, bbl.z,
      btl.x, btl.y, btl.z,

      //left
      bbl.x, bbl.y, bbl.z,
      fbl.x, fbl.y, fbl.z,
      btl.x, btl.y, btl.z,
      btl.x, btl.y, btl.z,
      fbl.x, fbl.y, fbl.z,
      ftl.x, ftl.y, ftl.z,

      //top
      ftl.x, ftl.y, ftl.z,
      ftr.x, ftr.y, ftr.z,
      btl.x, btl.y, btl.z,
      btl.x, btl.y, btl.z,
      ftr.x, ftr.y, ftr.z,
      btr.x, btr.y, btr.z,

      //bottom
      bbl.x, bbl.y, bbl.z,
      bbr.x, bbr.y, bbr.z,
      fbl.x, fbl.y, fbl.z,
      fbl.x, fbl.y, fbl.z,
      bbr.x, bbr.y, bbr.z,
      fbr.x, fbr.y, fbr.z,
    ]);

    var colors = new Float32Array(parseInt(vertices.length / 3, 10) * 4);
    var normals = new Float32Array(vertices.length);
    var i, count;
    var ci, ni;

    for (i = 0, count = vertices.length / 3; i < count; i++) {
      ci = i * 4;
      ni = i * 3;
      colors[ci] = r;
      colors[ci+1] = g; 
      colors[ci+2] = b;
      colors[ci+3] = a;         

      normals[ni] = parseInt(i / 6, 10) === 1 ? 1 : 
                   parseInt(i / 6, 10) === 3 ? -1 : 0; 

      normals[ni+1] = parseInt(i / 6, 10) === 4 ? 1 : 
                     parseInt(i / 6, 10) === 5 ? -1 : 0; 

      normals[ni+2] = parseInt(i / 6, 10) === 0 ? 1 : 
                     parseInt(i / 6, 10) === 2 ? -1 : 0; 

    }

    return {
      vertices: vertices,
      normals: normals,
      colors: colors
    };

  },

  getGLVars: function getGLVars(gl, vars) {
    var gl_vars = {};
    var attributes = vars.attributes || [];
    var uniforms = vars.uniforms || [];
    attributes.forEach(function(att) {
      gl_vars[att] = gl.getAttribLocation(gl.program, att);
    });
    uniforms.forEach(function(u) {
      gl_vars[u] = gl.getUniformLocation(gl.program, u);
    });

    return gl_vars;
  },

  setBuffer: function setBuffer(gl, attribute, data, item_size) {
    var buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.vertexAttribPointer(attribute, item_size, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attribute);
  }

}