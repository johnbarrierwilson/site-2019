import React from 'react'
import * as THREE from 'three'

class Blob extends React.Component {
  componentDidMount(){
    const width = this.blob.clientWidth
    const height = this.blob.clientHeight

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(2);
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.blob.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    
    this.camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000)
    this.camera.position.z = 300

    const light1 = new THREE.DirectionalLight('#f4400f', 0.5);
    light1.position.set(0, 300, 200); 
    this.scene.add(light1);

    const light2 = light1.clone();
    light2.position.set(-400, 300, 200); 
    this.scene.add(light2);
    
    this.geometry = new THREE.IcosahedronGeometry(170, 5);
    for(var i = 0; i < this.geometry.vertices.length; i++) {
      var vector = this.geometry.vertices[i];
      vector._o = vector.clone();
    }
    const material = new THREE.MeshPhongMaterial({
      emissive: '#800000', 
      emissiveIntensity: 0.4,
      shininess: 0
    });
    this.shape = new THREE.Mesh(this.geometry, material)
    this.scene.add(this.shape)

    this.animate()
    requestAnimationFrame(this.animate)
  }

  animate = (a) => {
    this.updateVertices(a)
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate)
  }

  updateVertices = (a) => {
    for (var i = 0; i < this.geometry.vertices.length; i++) {
      var vector = this.geometry.vertices[i];
      vector.copy(vector._o);
      var perlin = window.noise.simplex3(
          (vector.x * 0.002) + (a * 0.0001),
          (vector.y * 0.002) + (a * 0.0001),
          (vector.z * 0.002)
      );
      var ratio = ((perlin * 0.4) + 0.8);
      vector.multiplyScalar(ratio);
    }
    this.geometry.verticesNeedUpdate = true;
  }
  
  render(){
    return(
      <div
        className="blob"
        ref={(blob) => { this.blob = blob }}
      />
    )
  }
}

export default Blob
