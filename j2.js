var persiana1,persiana2,persiana3,persiana4,persiana5,persiana6,persiana7,persiana8,persiana9,persiana10,persiana11,persiana12;
var Outrapersiana1,Outrapersiana2,Outrapersiana3,Outrapersiana4,Outrapersiana5,Outrapersiana6,Outrapersiana7,Outrapersiana8,Outrapersiana9,Outrapersiana10,Outrapersiana11,Outrapersiana12;
var persianatime = 0.000004;
var time = 180;


// animacao persianas
function animpercianas(){

  if(alfa > 50){
  for(i = 0; i < time; i++){
    if(persiana1.position.z > -12.5){
    persiana1.position.z = persiana1.position.z - persianatime;
  }
  if( i > 12){
    if(persiana2.position.z > -11.9){
      persiana2.position.z = persiana2.position.z - persianatime;
    }}
  if( i > 24){
    if(persiana3.position.z > -11.3){
        persiana3.position.z = persiana3.position.z - persianatime;
      }}
  if( i > 36){
    if(persiana4.position.z > -10.7){
          persiana4.position.z = persiana4.position.z - persianatime;
        }}
  if( i > 48){
    if(persiana5.position.z > -10.1){
          persiana5.position.z = persiana5.position.z - persianatime;
        }}
  if( i > 60){
    if(persiana6.position.z > -9.5){
          persiana6.position.z = persiana6.position.z - persianatime;
        }}
  if( i > 72){
    if(persiana7.position.z > -8.9){
          persiana7.position.z = persiana7.position.z - persianatime;
        }}

  if( i > 84){
    if(persiana8.position.z > -8.3){
          persiana8.position.z = persiana8.position.z - persianatime;
        }}
  if( i > 96){
    if(persiana9.position.z > -7.7){
          persiana9.position.z = persiana9.position.z - persianatime;
        }}
  if( i > 108){
    if(persiana10.position.z > -7.1){
          persiana10.position.z = persiana10.position.z - persianatime;
        }}
  if( i > 120){
    if(persiana11.position.z > -6.5){
          persiana11.position.z = persiana11.position.z - persianatime;
        }}
  if( i > 134){
    if(persiana12.position.z > -5.9){
          persiana12.position.z = persiana12.position.z - persianatime;
        }}
}}
}

function animOutraspersianas(){
  if(alfa > 50){
  for(i = 0; i < time; i++){
    if( i > 12){
    if(Outrapersiana1.position.x < 14){
    Outrapersiana1.position.x = Outrapersiana1.position.x + persianatime;
  }
  if(Outrapersiana1.rotation.y < Math.PI){
    Outrapersiana1.rotation.y = Outrapersiana1.rotation.y + persianatime;
  }}
  if( i > 24){
  if(Outrapersiana2.position.x < 13.4){
    Outrapersiana2.position.x = Outrapersiana2.position.x + persianatime;
  }
  if(Outrapersiana2.rotation.y < Math.PI){
    Outrapersiana2.rotation.y = Outrapersiana2.rotation.y + persianatime;
  }}
  if( i > 36){
  if(Outrapersiana3.position.x < 12.8){
  Outrapersiana3.position.x = Outrapersiana3.position.x + persianatime;
}
if(Outrapersiana3.rotation.y < Math.PI){
  Outrapersiana3.rotation.y = Outrapersiana3.rotation.y + persianatime;
}}
if( i > 48){
 if(Outrapersiana4.position.x < 12.2){
  Outrapersiana4.position.x = Outrapersiana4.position.x + persianatime;
}
if(Outrapersiana4.rotation.y < Math.PI){
  Outrapersiana4.rotation.y = Outrapersiana4.rotation.y + persianatime;
}}
if( i > 60){
if(Outrapersiana5.position.x < 11.6){
  Outrapersiana5.position.x = Outrapersiana5.position.x + persianatime;
}
if(Outrapersiana5.rotation.y < Math.PI){
  Outrapersiana5.rotation.y = Outrapersiana5.rotation.y + persianatime;
}}
if( i > 72){
if(Outrapersiana6.position.x < 11){
  Outrapersiana6.position.x = Outrapersiana6.position.x + persianatime;
}
if(Outrapersiana6.rotation.y < Math.PI){
  Outrapersiana6.rotation.y = Outrapersiana6.rotation.y + persianatime;
}}
if( i > 84){
 if(Outrapersiana7.position.x < 10.4){
  Outrapersiana7.position.x = Outrapersiana7.position.x + persianatime;
}
if(Outrapersiana7.rotation.y < Math.PI){
  Outrapersiana7.rotation.y = Outrapersiana7.rotation.y + persianatime;
}}
if( i > 96){
 if(Outrapersiana8.position.x < 9.8){
  Outrapersiana8.position.x = Outrapersiana8.position.x + persianatime;
}
if(Outrapersiana8.rotation.y < Math.PI){
  Outrapersiana8.rotation.y = Outrapersiana8.rotation.y + persianatime;
}}
if( i > 108){
if(Outrapersiana9.position.x < 9.2){
  Outrapersiana9.position.x = Outrapersiana9.position.x + persianatime;
}
if(Outrapersiana9.rotation.y < Math.PI){
  Outrapersiana9.rotation.y = Outrapersiana9.rotation.y + persianatime;
}}
if( i > 120){
if(Outrapersiana10.position.x < 8.6){
  Outrapersiana10.position.x = Outrapersiana10.position.x + persianatime;
}
if(Outrapersiana10.rotation.y < Math.PI){
  Outrapersiana10.rotation.y = Outrapersiana10.rotation.y + persianatime;
}}
if( i > 132){
 if(Outrapersiana11.position.x < 8){
  Outrapersiana11.position.x = Outrapersiana11.position.x + persianatime;
}
if(Outrapersiana11.rotation.y < Math.PI){
  Outrapersiana11.rotation.y = Outrapersiana11.rotation.y + persianatime;
}}
if( i > 144){
if(Outrapersiana12.position.x < 7.4){
Outrapersiana12.position.x = Outrapersiana12.position.x + persianatime;
}
if(Outrapersiana12.rotation.y < Math.PI){
Outrapersiana12.rotation.y = Outrapersiana12.rotation.y + persianatime;
}}
if( i > 156){
if(Outrapersiana13.position.x < 6.8){
Outrapersiana13.position.x = Outrapersiana13.position.x + persianatime;
}
if(Outrapersiana13.rotation.y < Math.PI){
Outrapersiana13.rotation.y = Outrapersiana13.rotation.y + persianatime;
}}
}}}
function InstantPersianas(){
  //percianas
  persiana1 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana1.castShadow = true;
  persiana1.receiveShadow = true;
  persiana1.position.y += 3;
  persiana1.position.z -= 5;//5
  persiana1.position.x += 6;
  persiana1.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana1);

  persiana2 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana2.castShadow = true;
  persiana2.receiveShadow = true;
  persiana2.position.y += 3;
  persiana2.position.z -= 5;//5
  persiana2.position.x += 6;
  persiana2.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana2);

  persiana3 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana3.castShadow = true;
  persiana3.receiveShadow = true;
  persiana3.position.y += 3;
  persiana3.position.z -= 5;//5
  persiana3.position.x += 6;
  persiana3.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana3);

  persiana4 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana4.castShadow = true;
  persiana4.receiveShadow = true;
  persiana4.position.y += 3;
  persiana4.position.z -= 5;//5
  persiana4.position.x += 6;
  persiana4.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana4);

  persiana5 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana5.castShadow = true;
  persiana5.receiveShadow = true;
  persiana5.position.y += 3;
  persiana5.position.z -= 5;//5
  persiana5.position.x += 6;
  persiana5.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana5);

  persiana6 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana6.castShadow = true;
  persiana6.receiveShadow = true;
  persiana6.position.y += 3;
  persiana6.position.z -= 5;//5
  persiana6.position.x += 6;
  persiana6.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana6);

  persiana7 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana7.castShadow = true;
  persiana7.receiveShadow = true;
  persiana7.position.y += 3;
  persiana7.position.z -= 5;//5
  persiana7.position.x += 6;
  persiana7.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana7);

  persiana8 = new THREE.Mesh(
  	new THREE.BoxGeometry(0.5, 10, 0.01),
  	new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana8.castShadow = true;
  persiana8.receiveShadow = true;
  persiana8.position.y += 3;
  persiana8.position.z -= 5;//5
  persiana8.position.x += 6;
  persiana8.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana8);

  persiana9 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana9.castShadow = true;
  persiana9.receiveShadow = true;
  persiana9.position.y += 3;
  persiana9.position.z -= 5;//5
  persiana9.position.x += 6;
  persiana9.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana9);

  persiana10 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana10.castShadow = true;
  persiana10.receiveShadow = true;
  persiana10.position.y += 3;
  persiana10.position.z -= 5;//5
  persiana10.position.x += 6;
  persiana10.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana10);

  persiana11 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana11.castShadow = true;
  persiana11.receiveShadow = true;
  persiana11.position.y += 3;
  persiana11.position.z -= 5;//5
  persiana11.position.x += 6;
  persiana11.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana11);

  persiana12 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana12.castShadow = true;
  persiana12.receiveShadow = true;
  persiana12.position.y += 3;
  persiana12.position.z -= 5;//5
  persiana12.position.x += 6;
  persiana12.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana12);

  persiana13 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  persiana13.castShadow = true;
  persiana13.receiveShadow = true;
  persiana13.position.y += 3;
  persiana13.position.z -= 5.3;//5
  persiana13.position.x += 6;
  persiana13.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(persiana13);
}

function InstantOutraspersianas(){

  Outrapersiana1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana1.castShadow = true;
  Outrapersiana1.receiveShadow = true;
  Outrapersiana1.position.y += 3;
  Outrapersiana1.position.z -= 12.5;//12.5
  Outrapersiana1.position.x += 6;//6
  Outrapersiana1.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana1);

  Outrapersiana2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana2.castShadow = true;
  Outrapersiana2.receiveShadow = true;
  Outrapersiana2.position.y += 3;
  Outrapersiana2.position.z -= 12.5;//12.5
  Outrapersiana2.position.x += 6;//6
  Outrapersiana2.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana2);

  Outrapersiana3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana3.castShadow = true;
  Outrapersiana3.receiveShadow = true;
  Outrapersiana3.position.y += 3;
  Outrapersiana3.position.z -= 12.5;//12.5
  Outrapersiana3.position.x += 6;//6
  Outrapersiana3.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana3);

  Outrapersiana4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana4.castShadow = true;
  Outrapersiana4.receiveShadow = true;
  Outrapersiana4.position.y += 3;
  Outrapersiana4.position.z -= 12.5;//12.5
  Outrapersiana4.position.x += 6;//6
  Outrapersiana4.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana4);

  Outrapersiana5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana5.castShadow = true;
  Outrapersiana5.receiveShadow = true;
  Outrapersiana5.position.y += 3;
  Outrapersiana5.position.z -= 12.5;//12.5
  Outrapersiana5.position.x += 6;//6
  Outrapersiana5.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana5);

  Outrapersiana6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana6.castShadow = true;
  Outrapersiana6.receiveShadow = true;
  Outrapersiana6.position.y += 3;
  Outrapersiana6.position.z -= 12.5;//12.5
  Outrapersiana6.position.x += 6;//6
  Outrapersiana6.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana6);

  Outrapersiana7 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana7.castShadow = true;
  Outrapersiana7.receiveShadow = true;
  Outrapersiana7.position.y += 3;
  Outrapersiana7.position.z -= 12.5;//12.5
  Outrapersiana7.position.x += 6;//6
  Outrapersiana7.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana7);

  Outrapersiana8 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana8.castShadow = true;
  Outrapersiana8.receiveShadow = true;
  Outrapersiana8.position.y += 3;
  Outrapersiana8.position.z -= 12.5;//12.5
  Outrapersiana8.position.x += 6;//6
  Outrapersiana8.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana8);

  Outrapersiana9 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana9.castShadow = true;
  Outrapersiana9.receiveShadow = true;
  Outrapersiana9.position.y += 3;
  Outrapersiana9.position.z -= 12.5;//12.5
  Outrapersiana9.position.x += 6;//6
  Outrapersiana9.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana9);

  Outrapersiana10 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana10.castShadow = true;
  Outrapersiana10.receiveShadow = true;
  Outrapersiana10.position.y += 3;
  Outrapersiana10.position.z -= 12.5;//12.5
  Outrapersiana10.position.x += 6;//6
  Outrapersiana10.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana10);

  Outrapersiana11 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana11.castShadow = true;
  Outrapersiana11.receiveShadow = true;
  Outrapersiana11.position.y += 3;
  Outrapersiana11.position.z -= 12.5;//12.5
  Outrapersiana11.position.x += 6;//6
  Outrapersiana11.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana11);

  Outrapersiana12 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana12.castShadow = true;
  Outrapersiana12.receiveShadow = true;
  Outrapersiana12.position.y += 3;
  Outrapersiana12.position.z -= 12.5;//12.5
  Outrapersiana12.position.x += 6;//6
  Outrapersiana12.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana12);

 Outrapersiana13 = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 10, 0.01),
    new THREE.MeshPhongMaterial({color: 0xffffff})
  );
  Outrapersiana13.castShadow = true;
  Outrapersiana13.receiveShadow = true;
  Outrapersiana13.position.y += 3;
  Outrapersiana13.position.z -= 12.5;//12.5
  Outrapersiana13.position.x += 6;//6
  Outrapersiana13.rotation.y = Math.PI/2;//Math.PI/2
  scene.add(Outrapersiana13);

  }
