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
	var torus = new THREE.Mesh(
		// トーラスのサイズを設定
		new THREE.TorusGeometry(12, 3, 10, 40),
		// マテリアルをLambertに
		new THREE.MeshLambertMaterial({color: 0x00ff00})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// トーラスを3Dシーンに追加
	scene.add(torus);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// 光源を追加
	var light = new THREE.DirectionalLight(0xffffff, 1.3);
	// 光源の位置を設定
	light.position.set(-50, 260, 100);
	scene.add(light);
	// レンダリング
	renderer.render(scene, camera);
}, false);
