window.addEventListener("load", function(){
	// Three.jsを初期化
	var renderer = new THREE.WebGLRenderer();
	// 描画領域のサイズは縦横とも320ピクセル
	renderer.setSize(320, 320);
	// 背景色と不透明度を設定
	renderer.setClearColorHex(0x00ff00, 0.5);
	// Three.jsによって生成されたCanvasをページの末尾に追加
	document.body.appendChild(renderer.domElement);
	// カメラを初期化
	var camera = new THREE.PerspectiveCamera(40, 1.0, 1, 100);
	// カメラ位置を設定
	camera.position.set(50, 40, 30);
	camera.lookAt( {x:0, y:0, z:0 } );
	// テクスチャ（環境）マッピングの画像を読み込む
	var urlList = [
		"images/cr.jpg", "images/cr.jpg",
		"images/cr.jpg", "images/cr.jpg",
		"images/cr.jpg", "images/cr.jpg"
	];
	var texture  = new THREE.ImageUtils.loadTextureCube(urlList);
	// オブジェクトを初期化する
	var cube = new THREE.Mesh(
		// 立方体のXYZサイズを設定
		new THREE.CubeGeometry(10, 30, 30),
		// 環境マップをマテリアルに設定
		new THREE.MeshBasicMaterial({
			color: 0xffff00,
			envMap: texture
		})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 立方体を3Dシーンに追加
	scene.add(cube);
	// カメラをシーンに追加
	scene.add(camera);
	// 揺動させるための角度を入れる変数
	var degree = 0;
	// レンダリング
	function render(){
		// 立方体を回転
		degree = degree + 1;
		cube.rotation.x = degree * Math.PI / 180;
		cube.rotation.y = degree * Math.PI / 180;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}, false);
