<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useMouse } from '@vueuse/core'
import * as THREE from 'three'

const container = ref<HTMLDivElement>()
const { x, y } = useMouse()

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let geometry: THREE.IcosahedronGeometry
let material: THREE.MeshPhongMaterial
let mesh: THREE.Mesh

const init = () => {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value?.appendChild(renderer.domElement)

  // Create icosahedron
  geometry = new THREE.IcosahedronGeometry(3, 1)
  material = new THREE.MeshPhongMaterial({
    color: 0xedd2a9, // nova boja
    wireframe: true,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.4
  })

  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // Add lights
  const light1 = new THREE.DirectionalLight(0xedd2a9, 1) // nova boja
  light1.position.set(0, 1, 0)
  scene.add(light1)

  const light2 = new THREE.DirectionalLight(0xedd2a9, 1) // nova boja
  light2.position.set(1, -1, 0)
  scene.add(light2)
}

const animate = () => {
  requestAnimationFrame(animate)

  if (mesh) {
    // Rotate based on mouse position
    const targetRotationX = (y.value - window.innerHeight / 2) * 0.001
    const targetRotationY = (x.value - window.innerWidth / 2) * 0.001

    mesh.rotation.x += (targetRotationX - mesh.rotation.x) * 0.05
    mesh.rotation.y += (targetRotationY - mesh.rotation.y) * 0.05

    // Constant rotation
    mesh.rotation.z += 0.001
  }

  renderer?.render(scene, camera)
}

const handleResize = () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  geometry?.dispose()
  material?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <!-- <div ref="container" class="fixed inset-0 -z-10"> -->
    <!-- Three.js canvas will be injected here -->
  <!-- </div> -->
</template>

<style scoped>
canvas {
  opacity: 0.7;
  filter: blur(1px);
}
</style>