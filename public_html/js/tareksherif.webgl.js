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
  var view_port = $("#webgl");
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(30, view_port.width()/view_port.height(), 0.1, 5000); 
  var renderer = new THREE.WebGLRenderer();
  
  var light1 = new THREE.PointLight(0x555555);
  var light2 = new THREE.PointLight(0xFFFFFF);
  
  var geometries = [
                      { Shape: THREE.CubeGeometry,   args: [1.4, 1.4, 1.4] }, 
                      { Shape: THREE.SphereGeometry, args: [1, 24, 18] },
                      { Shape: THREE.TorusGeometry,  args: [0.8, 0.3, 24, 18] }
                   ];
                   
  var g_index = Math.floor(Math.random() * geometries.length);
  
  var cube = new THREE.Mesh(createGeometry(geometries[g_index]), new THREE.MeshPhongMaterial({color: 0x1BBFE0}));
   
  var last_frame;
  var current_frame;
   
  renderer.setSize(view_port.width(), view_port.height());
  renderer.setClearColor(0xFFFFFF)
  view_port.append(renderer.domElement);
                            
  scene.add(cube);
  scene.add(light1);
  scene.add(light2);
  
  camera.position.z = 5;
  light1.position.z = 5;
  light2.position.set(5, 5, 5);
  
  camera_controls = new THREE.TrackballControls(camera, document, $("#header")[0]);
  light_controls = new THREE.TrackballControls(light1, document, $("#header")[0]);
  
  function createGeometry(options) {
    var Shape = options.Shape;
    var args  = options.args;
  
    var geometry;
    function Geometry() {}
    Geometry.prototype = Shape.prototype;
    
    geometry = new Geometry();
    geometry.constructor = Shape;
    
    Shape.apply(geometry, args);
    
    return geometry;
  }
  
  function render(timestamp) {
    var delta;
    var rotation;
    var timer;
    
    if (window.performance === undefined) {
      timer = Date;
    } else {
      timer = performance;
    }
    
    requestAnimationFrame(render);
    
    last_frame = current_frame || timestamp || timer.now();
    current_frame = timestamp || timer.now();
    
    camera_controls.update();
    light_controls.update();
    
    delta = current_frame - last_frame;
    rotation = delta * 0.001;
  
    cube.rotation.x += rotation;
    cube.rotation.y += rotation;
  
    renderer.render(scene, camera);
  }
    
  render();
})();
