window.addEventListener("load", function(){
	// Three.jsを初期化
	var renderer = new THREE.WebGLRenderer();
	// 描画領域のサイズは縦横とも320ピクセル
	renderer.setSize(320, 320);
	// Three.jsによって生成されたCanvasをページの末尾に追加
	document.body.appendChild(renderer.domElement);
	// カメラを初期化
	var camera = new THREE.PerspectiveCamera(40, 1.0, 1, 10000);
	// カメラ位置を設定
	camera.position.set(40, 10, 30);
	camera.lookAt( {x:0, y:0, z:0 } );
	// オブジェクトを初期化する
	var plane = new THREE.Mesh(
		// 平面のサイズを設定
		new THREE.PlaneGeometry(30, 20),
		// マテリアルをLambertに
		new THREE.MeshLambertMaterial({color: 0xff0000})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 平面を3Dシーンに追加
	scene.add(plane);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// 光源を追加
	var light = new THREE.DirectionalLight(0xffffff, 0.85);
	// 光源の位置を設定
	light.position.set(-50, 260, 100);
	scene.add(light);
	// レンダリング
	renderer.render(scene, camera);
}, false);
