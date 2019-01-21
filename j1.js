var scene, camera, renderer, mesh, keyboard = [];
var player = {height: 2.1, speed: 0.08, turnSpeed: Math.PI * 0.02};
var floor, placa;
var AmbientLight, PointLight, SpotLight, luzsala, luzquarto1;
var playerbody;
var enableControls = true;
var enableW = true, enableS = true, enableA = true, enableD = true;
var enableUp = true, enableDown = true, enableLeft = true, enableRight = true;
var cubo2;
var pivot;
var i;
var lampsala, painelcontrolecoll;
var loader, loader2, loader3, loader4, loader5, loader6, loader7, loader8;
var casa, telhado, sofa, tapete, lampada1, mesa;
var porta1, porta2, porta3, porta4, porta5;
var portafrente, portafrente2;
var collidableMeshList = [];
var configSol= [];
var ControlPanel= [];
var beta = 0, alfa = 0;
var luzsolar = 1;
var sky, materiala, loaderr, textura;




function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  mesh = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
		new THREE.MeshPhongMaterial({color: 0xfff444, wireframe:false})
);
cubo2 = new THREE.Mesh(
	new THREE.BoxGeometry(4, 1, 0.2, 7, 7, 7),
	new THREE.MeshPhongMaterial({color: 'rgb(84, 83, 83)', wireframe:false})
);
	playerbody = new THREE.Mesh(
			new THREE.BoxGeometry(2, 3, 2, 7, 7, 7),
			new THREE.MeshPhongMaterial({color: 0xfff444, wireframe:true})
	);

	scene.add(camera);
InstantPersianas();
InstantOutraspersianas();

//SKYDOME

 loadersky  = new THREE.TextureLoader(),
   	//skytexture = loadersky.load( "models and textures/sky.jpg" );
skymaterial = new THREE.MeshPhongMaterial({
			  //map: skytexture
			color: "rgb(113, 172, 214)"});
sky = new THREE.Mesh(new THREE.SphereGeometry(100, 25, 25), skymaterial);
	 sky.material.side = THREE.BackSide;
	 sky.rotation.z += Math.PI;
	 scene.add(sky);
//-----------
	mesh.position.y += 1;
	mesh.position.x += 10;
	mesh.position.z += -4;
	mesh.receiveShadow = true;
	mesh.castShadow = true;
	cubo2.position.y += 0.5;
	cubo2.position.x -= 7;
	cubo2.position.z += 20;
	scene.add(mesh);
	scene.add(playerbody);
	scene.add(cubo2);
	collidableMeshList.push(mesh);
	collidableMeshList.push(playerbody);
	configSol.push(cubo2);
	ControlPanel.push(playerbody);
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
	SpotLight = new THREE.SpotLight(0xffffff);
	SpotLight.position.set(8, 30, 0);

	SpotLight.castShadow = true;
	scene.add(SpotLight);


	AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(AmbientLight);

	luzsala = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzsala.position.x += 10;
	luzsala.position.z += -1;
	luzsala.position.y += 5.5;
	luzsala.castShadow = true;
	scene.add(luzsala);

	luzquarto1 = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzquarto1.position.x += 8.5;
	luzquarto1.position.z += 11;
	luzquarto1.position.y += 5.5;
	luzquarto1.castShadow = true;
	luzquarto1.intensity = 0;

	luzquarto2 = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzquarto2.position.x += 18.5;
	luzquarto2.position.z += 11;
	luzquarto2.position.y += 5.5;
	luzquarto2.castShadow = true;
	luzquarto2.intensity = 0;

	luzquarto3 = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzquarto3.position.x += 18.5;
	luzquarto3.position.z += 0;
	luzquarto3.position.y += 5.5;
	luzquarto3.castShadow = true;
	luzquarto3.intensity = 0;

	luzcozinha = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzcozinha.position.x += 18.5;
	luzcozinha.position.z += -10;
	luzcozinha.position.y += 5.5;
	luzcozinha.castShadow = true;
	luzcozinha.intensity = 0;

	luzarea = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzarea.position.x += 18.5;
	luzarea.position.z += -4;
	luzarea.position.y += 5.5;
	luzarea.castShadow = true;

	scene.add(luzarea);

	luzbanheiro1 = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzbanheiro1.position.x += 18.5;
	luzbanheiro1.position.z += 5.5;
	luzbanheiro1.position.y += 5.5;
	luzbanheiro1.castShadow = true;
	luzbanheiro1.intensity = 0;

	luzbanheiro2 = new THREE.PointLight(0xffffff, 0.8, 100, 2);
	luzbanheiro2.position.x += 13.5;
	luzbanheiro2.position.z += 12;
	luzbanheiro2.position.y += 5.5;
	luzbanheiro2.castShadow = true;
	luzbanheiro2.intensity = 0;
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
	 casa = new THREE.Mesh(geometry, materials);
	 casa.castShadow = true;
	 casa.receiveShadow = true;
		scene.add(casa);
	}

//sofa
loader2 = new THREE.JSONLoader();
loader2.load('models and textures/sofa.json', handle_loader2);
function handle_loader2(geometry2, materials2) {
 sofa = new THREE.Mesh(geometry2, materials2);
 sofa2 = new THREE.Mesh(geometry2, materials2);
	sofa.position.x += 13;
	sofa.position.z += -1;
	sofa.position.y += 0.02;
	sofa.rotation.y += -Math.PI/2;
	sofa2.position.x += 10;
	sofa2.position.z += -4;
	sofa2.position.y += 0.02;
	sofa2.rotation.y += 0;
	sofa.receiveShadow = true;
	sofa2.receiveShadow = true;
	sofa.receiveShadow = true;
	sofa2.receiveShadow = true;
	scene.add(sofa);
	scene.add(sofa2);
}
//porta
loader3 = new THREE.JSONLoader();
loader3.load('models and textures/porta.json', handle_loader3);
function handle_loader3(geometry3, materials3) {
	porta5 = new THREE.Mesh(geometry3, materials3);
	porta4 = new THREE.Mesh(geometry3, materials3);
	porta3 = new THREE.Mesh(geometry3, materials3);
	porta2 = new THREE.Mesh(geometry3, materials3);
  porta1 = new THREE.Mesh(geometry3, materials3);
	porta1.position.x += 12.4;
	porta1.position.z += 7.8;
	porta1.rotation.y = -Math.PI/2;
	porta2.position.x += 15.2;
	porta2.position.z += 7.8;
	porta2.rotation.y = -Math.PI/2;
	porta3.position.x += 14.8;
	porta3.position.z += 3.2;
	porta3.rotation.y = Math.PI/2;
	porta4.position.x += 17.3;
	porta4.position.z += 4.8;
	porta5.position.x += 22.2;
	porta5.position.z += -5.8;
	porta1.castShadow = true;
	porta2.castShadow = true;
	porta3.castShadow = true;
	porta4.castShadow = true;
	porta5.castShadow = true;
	scene.add(porta1);
	scene.add(porta2);
	scene.add(porta3);
	scene.add(porta4);
	scene.add(porta5);
}

loader4 = new THREE.JSONLoader();
loader4.load('models and textures/portafrente.json', handle_loader4);
function handle_loader4(geometry4, materials4) {
 portafrente = new THREE.Mesh(geometry4, materials4);
 portafrente2 = new THREE.Mesh(geometry4, materials4);
	portafrente.position.x += 5.9;
	portafrente.position.z += 3.55;
	portafrente.rotation.y += -Math.PI/2;
	portafrente2.position.x += 6.55;//6.55
	portafrente2.position.z += 5.4;//5.4
	scene.add(portafrente);
	scene.add(portafrente2);
}

loader5 = new THREE.JSONLoader();
loader5.load('models and textures/tapete.json', handle_loader5);
function handle_loader5(geometry5, materials5) {
 tapete = new THREE.Mesh(geometry5, materials5);
	tapete.position.x += 11;
	tapete.position.z += -2;
	tapete.rotation.y += Math.PI;
	tapete.receiveShadow = true;
	scene.add(tapete);

}
loader6 = new THREE.JSONLoader();
loader6.load('models and textures/lampadafora.json', handle_loader6);
function handle_loader6(geometry6, materials6) {
 lampada1 = new THREE.Mesh(geometry6, materials6);
 lampada1.rotation.order = "YXZ";
 lampada1.position.x += 5.3;
 lampada1.position.y += 3.8;
 lampada1.rotation.y += Math.PI/2;

	scene.add(lampada1);

}

loader7 = new THREE.JSONLoader();
loader7.load('models and textures/telhado.json', handle_loader7);
function handle_loader7(geometry7, materials7) {
 telhado = new THREE.Mesh(geometry7, materials7);
  telhado.position.x += 13;
  telhado.position.y += 5.5;
	telhado.position.z += 0;
 	telhado.rotation.y += Math.PI;
	telhado.castShadow = true;
	telhado.receiveShadow = false;
	scene.add(telhado);
}

loader8 = new THREE.JSONLoader();
loader8.load('models and textures/lamp.json', handle_loader8);
function handle_loader8(geometry8, materials8) {
 lampsala = new THREE.Mesh(geometry8, materials8);
  lampsala.penumbra = 0.25;
  lampsala.position.x +=10;
	lampsala.position.y +=5.9;
	lampsala.rotation.z += Math.PI;
	lampsala.position.z -= 1;
	lampsala.castShadow = true;
	lampsala.receiveShadow = true;
	scene.add(lampsala);
	lampquarto1 = new THREE.Mesh(geometry8, materials8);
	lampquarto1.position.x +=8.5;
	lampquarto1.position.y +=5.9;
	lampquarto1.rotation.z += Math.PI;
	lampquarto1.position.z += 11;
	lampquarto1.castShadow = true;
	lampquarto1.receiveShadow = true;
	scene.add(lampquarto1);
	lampquarto2 = new THREE.Mesh(geometry8, materials8);
	lampquarto2.position.x +=18.5;
	lampquarto2.position.y +=5.9;
	lampquarto2.rotation.z += Math.PI;
	lampquarto2.position.z += 11;
	lampquarto2.castShadow = true;
	lampquarto2.receiveShadow = true;
	scene.add(lampquarto2);
	lampquarto3 = new THREE.Mesh(geometry8, materials8);
	lampquarto3.position.x +=18.5;
	lampquarto3.position.y +=5.9;
	lampquarto3.rotation.z += Math.PI;
	lampquarto3.position.z += 0;
	lampquarto3.castShadow = true;
	lampquarto3.receiveShadow = true;
	scene.add(lampquarto3);
	lampcozinha = new THREE.Mesh(geometry8, materials8);
	lampcozinha.position.x +=18.5;
	lampcozinha.position.y +=5.9;
	lampcozinha.rotation.z += Math.PI;
	lampcozinha.position.z -= 11;
	lampcozinha.castShadow = true;
	lampcozinha.receiveShadow = true;
	scene.add(lampcozinha);
	lamparea = new THREE.Mesh(geometry8, materials8);
	lamparea.position.x +=18.5;
	lamparea.position.y +=5.9;
	lamparea.rotation.z += Math.PI;
	lamparea.position.z -= 4;
	lamparea.castShadow = true;
	lamparea.receiveShadow = true;
	scene.add(lamparea);
	lampbanheiro1 = new THREE.Mesh(geometry8, materials8);
	lampbanheiro1.position.x +=18.5;
	lampbanheiro1.position.y +=5.9;
	lampbanheiro1.rotation.z += Math.PI;
	lampbanheiro1.position.z += 5.5;
	lampbanheiro1.castShadow = true;
	lampbanheiro1.receiveShadow = true;
	scene.add(lampbanheiro1);
	lampbanheiro2 = new THREE.Mesh(geometry8, materials8);
	lampbanheiro2.position.x +=13.5;
	lampbanheiro2.position.y +=5.9;
	lampbanheiro2.rotation.z += Math.PI;
	lampbanheiro2.position.z += 12;
	lampbanheiro2.castShadow = true;
	lampbanheiro2.receiveShadow = true;
	scene.add(lampbanheiro2);
}



loader9 = new THREE.JSONLoader();
loader9.load('models and textures/painel.json', handle_loader9);
function handle_loader9(geometry9, materials9) {
	painel = new THREE.Mesh(geometry9, materials9);
		painel.rotation.y -= Math.PI/2;
		painel.position.x += 9;
		painel.position.z += 6.8;
	  painel.position.y += 1.5;
		ControlPanel.push(painel);
	scene.add(painel);
}
loader10 = new THREE.JSONLoader();
loader10.load('models and textures/placa.json', handle_loader10);
function handle_loader10(geometry10, materials10) {
	placa = new THREE.Mesh(geometry10, materials10);
	placa.rotation.y = -Math.PI/2;
	placa.position.z = 20;
	placa.position.x = -5;
	placa.castShadow = true;
	placa.receiveShadow = true;
	scene.add(placa);
	placa2 = new THREE.Mesh(geometry10, materials10);
	placa2.rotation.y = -Math.PI/2;
	placa2.position.z = 20;
	placa2.position.x = -6;
	placa2.castShadow = true;
	placa2.receiveShadow = true;
	scene.add(placa2);
	placa3 = new THREE.Mesh(geometry10, materials10);
	placa3.rotation.y = -Math.PI/2;
	placa3.position.z = 20;
	placa3.position.x = -7;
	placa3.castShadow = true;
	placa3.receiveShadow = true;
	scene.add(placa3);
	placa4 = new THREE.Mesh(geometry10, materials10);
	placa4.rotation.y = -Math.PI/2;
	placa4.position.z = 20;
	placa4.position.x = -8;
	placa4.castShadow = true;
	placa4.receiveShadow = true;
	scene.add(placa4);
}
loader11 = new THREE.JSONLoader();
loader11.load('models and textures/cama.json', handle_loader11);
function handle_loader11(geometry11, materials11) {
	cama1 = new THREE.Mesh(geometry11, materials11);
	cama1.rotation.y = Math.PI/2;
	cama1.position.x = 7.5;
	cama1.position.z = 12;
	cama1.receiveShadow = true;
	cama1.castShadow = true;
	scene.add(cama1);
	cama2 = new THREE.Mesh(geometry11, materials11);
	cama2.rotation.y = Math.PI/2;
	cama2.position.x = 19;
	cama2.position.z = 12;
	cama2.receiveShadow = true;
	cama2.castShadow = true;
	scene.add(cama2);
	cama3 = new THREE.Mesh(geometry11, materials11);
	cama3.rotation.y = -Math.PI/2;
	cama3.position.x = 19;
	cama3.position.z = -0.5;
	cama3.receiveShadow = true;
	cama3.castShadow = true;
	scene.add(cama3);
}
loader12 = new THREE.JSONLoader();
loader12.load('models and textures/tv.json', handle_loader12);
function handle_loader12(geometry12, materials12) {
	tv = new THREE.Mesh(geometry12, materials12);
	tv.position.y = 2;
	tv.position.x = 6;
	tv.position.z = -1;
	tv.receiveShadow = true;
	tv.castShadow = true;

	scene.add(tv);
}
loader13 = new THREE.JSONLoader();
loader13.load('models and textures/fogao.json', handle_loader13);
function handle_loader13(geometry13, materials13) {
	fogao = new THREE.Mesh(geometry13, materials13);
	fogao.rotation.y = Math.PI;
	fogao.position.x = 21.5;
	fogao.position.z = -10;
	fogao.receiveShadow = false;
	fogao.castShadow = true;
	scene.add(fogao);
}
loader14 = new THREE.JSONLoader();
loader14.load('models and textures/mesa.json', handle_loader14);
function handle_loader14(geometry14, materials14) {
	mesa = new THREE.Mesh(geometry14, materials14);
	mesa.position.z -= 16;
	mesa.position.x += 15.8;
	mesa.receiveShadow = true;
	mesa.castShadow = true;
	scene.add(mesa);
}
loader15 = new THREE.JSONLoader();
loader15.load('models and textures/geladeira.json', handle_loader15);
function handle_loader15(geometry15, materials15) {
	geladeira = new THREE.Mesh(geometry15, materials15);
	geladeira.position.x = 21.3;
	geladeira.position.z = -8;
	geladeira.receiveShadow = true;
	geladeira.castShadow = true;
	scene.add(geladeira);
}
loader16 = new THREE.JSONLoader();
loader16.load('models and textures/inversor.json', handle_loader16);
function handle_loader16(geometry16, materials16) {
	inversor = new THREE.Mesh(geometry16, materials16);
	inversor.rotation.z = -Math.PI/2;
	inversor.rotation.y = Math.PI/2;
	inversor.position.x = 21.3;
	inversor.position.z = -3;
	inversor.position.y = 2;
	inversor.receiveShadow = true;
	inversor.castShadow = true;
	scene.add(inversor);
}
loader17 = new THREE.JSONLoader();
loader17.load('models and textures/armario.json', handle_loader17);
function handle_loader17(geometry17, materials17) {
	armario = new THREE.Mesh(geometry17, materials17);
	armario.rotation.y = Math.PI;
	armario.receiveShadow = true;
	armario.castShadow = true;
	armario.position.x = 15;
	armario.position.z = -3;
	scene.add(armario);
}
//

//--------------------*-----------------

	animate();

}

function animate() {

	dianoite();
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
	if(enableControls){
	if(enableW){
	if(keyboard[87]){//w
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
		camera.position.z -= +Math.cos(camera.rotation.y) * player.speed;

	}}
	if(enableS){
	if(keyboard[83]){//s
		camera.position.x += Math.sin(camera.rotation.y) * player.speed;
		camera.position.z += +Math.cos(camera.rotation.y) * player.speed;

	}}
	if(enableA){
	if(keyboard[65]){//a
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
		camera.position.z += +Math.cos(camera.rotation.y - Math.PI/2) * player.speed;

	}}
	if(enableD){
	if(keyboard[68]){//d
		camera.position.x -= Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
		camera.position.z -= +Math.cos(camera.rotation.y - Math.PI/2) * player.speed;

	}}
	if(enableLeft){
	if(keyboard[37]){//left
		camera.rotation.y += player.turnSpeed;

	}}
	if(enableRight){
	if(keyboard[39]){//right
		camera.rotation.y -= player.turnSpeed;

	}}
	if(enableUp){
	if(keyboard[38]){//up
		if(camera.rotation.x < Math.PI/2){
		camera.rotation.x += player.turnSpeed;

	}}}
	if(enableDown){
	if(keyboard[40]){//down
		if(camera.rotation.x > -Math.PI/2){
		camera.rotation.x -= player.turnSpeed;

	}}}

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
		var withConfigSol = ray.intersectObjects( configSol );
		var withPanel = ray.intersectObjects( ControlPanel );

		if(withConfigSol.length > 0 && withConfigSol[0].distance < directionVector.length()){

				beta++;
				//console.log("hit menu");
				if(beta > 400){
					enableControls = false;
				document.getElementById('controlesol').style.display = "block";
			}
		}
		if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ){
				alfa++;
				//console.log("hit corpo");
				animpercianas();
				animOutraspersianas();
				/*enableW = false;
				console.log("hit corpo");*/
		}else {
			enableW = true;
		}
		if(withPanel.length > 0 && withPanel[0].distance < directionVector.length()){
			beta++;
			//console.log("hit menu");
			if(beta > 400){
				enableControls = false;
			document.getElementById('paineldecontrole').style.display = "block";
		}
		}
	}
//-------------------------------------------


 atualizar();

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
