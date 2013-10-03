window.addEventListener("load", function(){
	// Three.jsを初期化
	var renderer = new THREE.WebGLRenderer({antialias: true});
	// 描画領域のサイズは縦横とも320ピクセル
	renderer.setSize(320, 320);
	// Three.jsによって生成されたCanvasをページの末尾に追加
	document.body.appendChild(renderer.domElement);
	// カメラを初期化
	var camera = new THREE.PerspectiveCamera(40, 1.0, 1, 10000);
	// カメラ位置を設定
	camera.position.set(30, 35, 70);
	camera.lookAt( {x:10, y:10, z:20 } );
	// ポイントを設定
	var points = [ ];
	points[0] = new THREE.Vector3(0, 0, 0);
	points[1] = new THREE.Vector3(1, 0, 0);
	points[2] = new THREE.Vector3(20, 0, 0);
	points[3] = new THREE.Vector3(2, 0, 10);
	points[4] = new THREE.Vector3(2, 0, 35);
	// オブジェクトを初期化する
	var lathe = new THREE.Mesh(
		// 回転体のサイズを設定
		new THREE.LatheGeometry(points, 6, Math.PI),
		// マテリアルをLambertに
		new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 回転体を3Dシーンに追加
	scene.add(lathe);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// 光源を追加
	var light = new THREE.DirectionalLight(0xffffff, 1.0);
	// 光源の位置を設定
	light.position.set(-50, 260, 100);
	scene.add(light);
	// レンダリング
	renderer.render(scene, camera);
}, false);
