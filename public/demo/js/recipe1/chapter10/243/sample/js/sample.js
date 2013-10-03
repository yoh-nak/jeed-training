window.addEventListener("load", function(){
	// Three.jsを初期化
	var renderer = new THREE.WebGLRenderer();
	//var renderer = new THREE.CanvasRenderer();
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
	// テクスチャマッピングの画像を読み込む
	var texture  = new THREE.ImageUtils.loadTexture("images/cr.jpg");
	// オブジェクトを初期化する
	var cube = new THREE.Mesh(
		// 立方体のXYZサイズを設定
		new THREE.CubeGeometry(25, 25, 25),
		// マテリアルをテクスチャに
		new THREE.MeshBasicMaterial({
			map: texture,
			overdraw: true	// THREE.CanvasRendererの場合に必要
		})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 立方体を3Dシーンに追加
	scene.add(cube);
	scene.add(camera);
	// レンダリング。時間差で2回呼び出さないとテクスチャは表示されない
	function render(){
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}, false);
