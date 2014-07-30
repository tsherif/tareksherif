///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2014 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////

(function() {
  "use strict";

  window.glUtils = {
    getGL: function getGL(canvas) {
      var gl = canvas.getContext("experimental-webgl");
      gl.viewport(0, 0, canvas.width, canvas.height);

      return gl;
    },

    getProgram: function(gl, vshader_id, fshader_id) {
      var vshader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vshader, document.getElementById(vshader_id).text);
      gl.compileShader(vshader);
      if (!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vshader));
      }

      var fshader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fshader, document.getElementById(fshader_id).text);
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

      return program;
    },

    getGLVars: function getGLVars(gl, program, vars) {
      var gl_vars = {};
      var attributes = vars.attributes || [];
      var uniforms = vars.uniforms || [];
      attributes.forEach(function(att) {
        gl_vars[att] = gl.getAttribLocation(program, att);
      });
      uniforms.forEach(function(u) {
        gl_vars[u] = gl.getUniformLocation(program, u);
      });

      return gl_vars;
    },

    setBuffer: function setBuffer(gl, attribute, data, item_size, type) {
      type = type || gl.FLOAT;
      var buffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      gl.vertexAttribPointer(attribute, item_size, type, false, 0, 0);
      gl.enableVertexAttribArray(attribute);
    },

    createBox: function createBox(params) {
      var position = params.position || [0, 0, 0];
      var dimensions = params.dimensions || [1, 1, 1];
      var x = position[0];
      var y = position[1];
      var z = position[2];
      var width = dimensions[0];
      var height = dimensions[1];
      var depth = dimensions[2];

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

      var normals = new Float32Array(vertices.length);
      var i, count;
      var ni;

      for (i = 0, count = vertices.length / 3; i < count; i++) {
        ni = i * 3;        

        normals[ni] = parseInt(i / 6, 10) === 1 ? 1 : 
                     parseInt(i / 6, 10) === 3 ? -1 : 0; 

        normals[ni+1] = parseInt(i / 6, 10) === 4 ? 1 : 
                       parseInt(i / 6, 10) === 5 ? -1 : 0; 

        normals[ni+2] = parseInt(i / 6, 10) === 0 ? 1 : 
                       parseInt(i / 6, 10) === 2 ? -1 : 0; 

      }

      return {
        vertices: vertices,
        normals: normals
      };

    },

    createSphere: function(options) {
      var position = options.position || [0, 0, 0];
      var long_bands = options.long_bands || 10;
      var lat_bands = options.lat_bands || 10;
      var radius = options.radius || 5;
      var lat_step = Math.PI / lat_bands;
      var long_step = 2 * Math.PI / long_bands;
      var num_vertices = long_bands * lat_bands * 6;
      var lat_angle, long_angle;
      var vertices = new Float32Array(num_vertices * 3);
      var normals = new Float32Array(num_vertices * 3);
      var texture_coords = new Float32Array(num_vertices * 2);
      var ox = position[0];
      var oy = position[1];
      var oz = position[2];
      var x1, x2, x3, x4,
          y1, y2,
          z1, z2, z3, z4,
          u1, u2,
          v1, v2;
      var i, j;
      var k = 0;
      var vi;

      for (i = 0; i < lat_bands; i++) {
        lat_angle = i * lat_step;
        y1 = Math.cos(lat_angle);
        y2 = Math.cos(lat_angle + lat_step);
        for (j = 0; j < long_bands; j++) {
          long_angle = j * long_step;
          x1 = Math.sin(lat_angle) * Math.cos(long_angle);
          x2 = Math.sin(lat_angle) * Math.cos(long_angle + long_step);
          x3 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle);
          x4 = Math.sin(lat_angle + lat_step) * Math.cos(long_angle + long_step);
          z1 = Math.sin(lat_angle) * Math.sin(long_angle);
          z2 = Math.sin(lat_angle) * Math.sin(long_angle + long_step);
          z3 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle);
          z4 = Math.sin(lat_angle + lat_step) * Math.sin(long_angle + long_step);
          u1 = 1 - j / long_bands;
          u2 = 1 - (j + 1) / long_bands;
          v1 = 1 - i / lat_bands;
          v2 = 1 - (i + 1) / lat_bands;

          vi = k * 3;

          vertices[vi] = x1 * radius + ox; 
          vertices[vi+1] = y1 * radius + oy; 
          vertices[vi+2] = z1 * radius + oz;
          vertices[vi+3] = x3 * radius + ox; 
          vertices[vi+4] = y2 * radius + oy; 
          vertices[vi+5] = z3 * radius + oz;
          vertices[vi+6] = x2 * radius + ox; 
          vertices[vi+7] = y1 * radius + oy; 
          vertices[vi+8] = z2 * radius + oz;
          vertices[vi+9] = x3 * radius + ox; 
          vertices[vi+10] = y2 * radius + oy; 
          vertices[vi+11] = z3 * radius + oz;
          vertices[vi+12] = x4 * radius + ox; 
          vertices[vi+13] = y2 * radius + oy; 
          vertices[vi+14] = z4 * radius + oz;
          vertices[vi+15] = x2 * radius + ox; 
          vertices[vi+16] = y1 * radius + oy; 
          vertices[vi+17] = z2 * radius + oz;

          normals[vi] = x1;
          normals[vi+1] = y1; 
          normals[vi+2] = z1;
          normals[vi+3] = x3;
          normals[vi+4] = y2; 
          normals[vi+5] = z3;
          normals[vi+6] = x2;
          normals[vi+7] = y1; 
          normals[vi+8] = z2;    
          normals[vi+9] = x3;
          normals[vi+10] = y2; 
          normals[vi+11] = z3;   
          normals[vi+12] = x4;
          normals[vi+13] = y2; 
          normals[vi+14] = z4;
          normals[vi+15] = x2;
          normals[vi+16] = y1; 
          normals[vi+17] = z2;

          texture_coords[vi] = u1; 
          texture_coords[vi+1] = v1; 
          texture_coords[vi+2] = u1;
          texture_coords[vi+3] = v2; 
          texture_coords[vi+4] = u2; 
          texture_coords[vi+5] = v1;
          texture_coords[vi+6] = u1; 
          texture_coords[vi+7] = v1; 
          texture_coords[vi+8] = u2;
          texture_coords[vi+9] = v2; 
          texture_coords[vi+10] = u2; 
          texture_coords[vi+11] = v1;

          k += 6;
        }
      }

      return {
        vertices: vertices,
        normals: normals,
        texture_coords: texture_coords
      };
    }

  };
})();
