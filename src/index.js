// import "style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import updateCompiler from "webpack-dev-server/lib/utils/updateCompiler";

let sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const CANVAS = document.querySelector('.webgl');
const SCENE = new THREE.Scene();
const AMBIENT_LIGHT = new THREE.AmbientLight(0x404040, 5);
const DIRECTIONAL_LIGHT = new THREE.DirectionalLight(0xffffff, 5);
const ASPECT_CAMERA = sizes.width / sizes.height;
const PERSPECTIVE_CAMERA = new THREE.PerspectiveCamera(120, ASPECT_CAMERA, 0.5, 100);
const CONTROLS = new OrbitControls(PERSPECTIVE_CAMERA, CANVAS);
const GRID_HELPER = new THREE.GridHelper(20, 10);
const RENDERER = new THREE.WebGLRenderer({
    canvas: CANVAS
});

DIRECTIONAL_LIGHT.position.set(0, 1, 0)
PERSPECTIVE_CAMERA.position.set(0, 0, 2)

SCENE.add(DIRECTIONAL_LIGHT, AMBIENT_LIGHT, PERSPECTIVE_CAMERA, GRID_HELPER)

RENDERER.setSize(sizes.width, sizes.height)
RENDERER.setPixelRatio(Math.min(window.devicePixelRatio, 2))

function updateCanvas() {
    RENDERER.render(SCENE, PERSPECTIVE_CAMERA)
    window.requestAnimationFrame(updateCanvas)
}

updateCanvas();