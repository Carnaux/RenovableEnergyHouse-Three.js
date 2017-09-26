var scene, camera, renderer, mesh, keyboard = [];
var player = {height: 2.1, speed: 0.08, turnSpeed: Math.PI * 0.02};
var floor, placa;
var AmbientLight;
var PointLight;
var playerbody;
var enableW = true;
var cubo2;
var pivot;
var i;
var loader, loader2, loader3;
var esqueleto, sofa;
var porta1, porta2;
var collidableMeshList = [];



function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
		new THREE.MeshPhongMaterial({color: 0xfff444, wireframe:false})
);
cubo2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1, 7, 7, 7),
	new THREE.MeshPhongMaterial({color: 0xfff424, wireframe:false})
);
	playerbody = new THREE.Mesh(
			new THREE.BoxGeometry(2, 3, 2, 7, 7, 7),
			new THREE.MeshPhongMaterial({color: 0xfff444, wireframe:true})
	);


	mesh.position.y += 1;
	mesh.receiveShadow = true;
	mesh.castShadow = true;
	playerbody.receiveShadow = true;
	playerbody.castShadow = true;
	cubo2.position.y += 1;
	cubo2.position.x += 4;
	cubo2.position.z += 3;
	scene.add(mesh);
	scene.add(playerbody);
	scene.add(cubo2);
	collidableMeshList.push(mesh);
	collidableMeshList.push(playerbody);
	collidableMeshList.push(cubo2);
	playerbody.rotation.order = "YXZ";
	camera.rotation.order = "YXZ";
	camera.position.set(0, player.height, 5);
	camera.lookAt(new THREE.Vector3(0, player.height, 0));
	playerbody.visible = false;





	/* 'MIRA'
	pivot = new THREE.Object3D();
	mira = new THREE.Mesh(
		new THREE.BoxGeometry(0.1, 0.1, 0.2, 10, 10, 10),
		new THREE.MeshBasicMaterial( {color: 0xffff00} ) );
	mira.rotation.order = "YXZ";
	mira.position.set(0, 0, -2);
	pivot.rotation.order = "YXZ";
	pivot.add( mira );
	scene.add( pivot );
	//BoundingBoxes4= new THREE.Box3().setFromObject(mira);
	cursorcollisionitens.push(mira);
*/





//light
	AmbientLight = new THREE.AmbientLight(0xffffff, 0.2);
	scene.add(AmbientLight);
 	PointLight = new THREE.PointLight(0xffffff, 0.8, 18);
 	PointLight.position.set(-3, 6, -3);
 	PointLight.castShadow = true;
 	PointLight.shadow.camera.near = 0.1;
 	PointLight.shadow.camera.far = 25;
 	scene.add(PointLight);
//renderer
	renderer = new THREE.WebGLRenderer();
 	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
 	document.body.appendChild( renderer.domElement );
//	MODELS
//casa
	loader = new THREE.JSONLoader();
	loader.load('models and textures/casablender.json', handle_loader);
	function handle_loader(geometry, materials) {
	 esqueleto = new THREE.Mesh(geometry, materials);

		scene.add(esqueleto);

	}
//sofa
loader2 = new THREE.JSONLoader();
loader2.load('models and textures/sofa.json', handle_loader2);
function handle_loader2(geometry2, materials2) {
 sofa = new THREE.Mesh(geometry2, materials2);
	sofa.position.x += 14;
	sofa.position.z += -1;
	sofa.rotation.y += -Math.PI/2;
	scene.add(sofa);

}
//porta
loader3 = new THREE.JSONLoader();
loader3.load('models and textures/porta.json', handle_loader3);
function handle_loader3(geometry3, materials3) {
	porta3 = new THREE.Mesh(geometry3, materials3);
	porta2 = new THREE.Mesh(geometry3, materials3);
  porta1 = new THREE.Mesh(geometry3, materials3);
	porta1.position.x += 12.4;
	porta1.position.z += 7.8;
	porta1.rotation.y = -Math.PI/2;
	porta2.position.x += 15.2;
	porta2.position.z += 7.8;
	porta2.rotation.y = -Math.PI/2;
	porta3.position.x += 15.2;
	porta3.position.z += 7.8;
	porta3.rotation.y = Math.PI/2;
	scene.add(porta1);
	scene.add(porta2);
}
//

//--------------------*-----------------

	animate();

}

function animate() {


	requestAnimationFrame(animate);





	//player collider position and rotation
	playerbody.position.set(
		camera.position.x - Math.sin(camera.rotation.y) * 0.6,
		camera.position.y - 0.3,
		camera.position.z - Math.cos(camera.rotation.y) * 0.6
	);
	playerbody.rotation.set(
		camera.rotation.x,
		camera.rotation.y,
		camera.rotation.z
	);
	/*pivot.position.set(
		camera.position.x - Math.sin(camera.rotation.y) * 0.6,
		camera.position.y - 0.3,
		camera.position.z - Math.cos(camera.rotation.y) * 0.6
	);
	pivot.rotation.set(
		camera.rotation.x,
		camera.rotation.y,
		camera.rotation.z
	);*/
	//cube rotation

	//controls
	if(enableW){
	if(keyboard[87]){//w
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
		camera.position.z -= +Math.cos(camera.rotation.y) * player.speed;

	}}
	if(keyboard[83]){//s
		camera.position.x += Math.sin(camera.rotation.y) * player.speed;
		camera.position.z += +Math.cos(camera.rotation.y) * player.speed;

	}
	if(keyboard[65]){//a
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
		camera.position.z += +Math.cos(camera.rotation.y - Math.PI/2) * player.speed;

	}
	if(keyboard[68]){//d
		camera.position.x -= Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
		camera.position.z -= +Math.cos(camera.rotation.y - Math.PI/2) * player.speed;

	}
	if(keyboard[37]){//left
		camera.rotation.y += player.turnSpeed;

	}
	if(keyboard[39]){//right
		camera.rotation.y -= player.turnSpeed;

	}
	if(keyboard[38]){//up
		camera.rotation.x += player.turnSpeed;

	}
	if(keyboard[40]){//down
		camera.rotation.x -= player.turnSpeed;

	}
	//COLISAO DO CORPO DO PLAYER
	var originPoint =	playerbody.position.clone();

	for (var vertexIndex = 0; vertexIndex < playerbody.geometry.vertices.length; vertexIndex++)
	{
		var localVertex = playerbody.geometry.vertices[vertexIndex].clone();
		var globalVertex = localVertex.applyMatrix4( playerbody.matrix );
		var directionVector = globalVertex.sub( playerbody.position );

		var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
		var collisionResults = ray.intersectObjects( collidableMeshList );
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
				enableW = false;
				console.log("hit corpo");
		}else {
			enableW = true;
		}
	}
//-------------------------------------------




  renderer.render(scene, camera);
}








function keyDown() {
	keyboard[event.keyCode] = true;
}
function keyUp() {
	keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);


window.onload = init;
