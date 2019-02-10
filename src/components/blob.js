import React from 'react'
import * as THREE from 'three'

class Blob extends React.Component {
  componentDidMount(){
    const width = this.blob.clientWidth
    const height = this.blob.clientHeight

    let baseColor = '#800000'
    let lightColor = '#f4400f'

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(2);
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.blob.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    
    this.camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 1000)
    this.camera.position.z = 300

    const light1 = new THREE.DirectionalLight(lightColor, 0.5);
    light1.position.set(-400, 500, 150); 
    this.scene.add(light1);

    const light2 = light1.clone();
    light2.position.set(-350, 450, 550); 
    this.scene.add(light2);

    this.geometry = new THREE.IcosahedronGeometry(140, 3);
    for(var i = 0; i < this.geometry.vertices.length; i++) {
      var vector = this.geometry.vertices[i];
      vector._o = vector.clone();
    }
    const material = new THREE.MeshPhongMaterial({
      emissive: baseColor, 
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
          (vector.x * 0.002) + (a * 0.00005),
          (vector.y * 0.002) + (a * 0.00005),
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
        style={{ transform: `translateX(${this.props.shift < 450 ? this.props.shift * -0.05 : -22.5}%)` }}
      />
    )
  }
}

export default Blob
