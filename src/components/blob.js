import React from 'react'
import * as THREE from 'THREE'

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

    const light1 = new THREE.DirectionalLight(0x590D82, 0.5);
    light1.position.set(200, 300, 400); 
    this.scene.add(light1);

    const light2 = light1.clone();
    light2.position.set(-200, 300, 400); 
    this.scene.add(light2);
    
    const geometry = new THREE.IcosahedronGeometry(210, 4);
    const material = new THREE.MeshPhongMaterial({
      emissive: '#f4400f', 
      emissiveIntensity: 0.4,
      shininess: 0
    });
    this.shape = new THREE.Mesh(geometry, material)
    this.scene.add(this.shape)

    requestAnimationFrame(this.animate)
  }
  animate = () => {
    this.shape.rotation.x += 0.01
    this.shape.rotation.y += 0.01
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
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
