window.addEventListener("load", function(){
	// Three.jsを初期化
	//var renderer = new THREE.WebGLRenderer();
	var renderer = new THREE.CanvasRenderer();
	// 描画領域のサイズは縦横とも320ピクセル
	renderer.setSize(320, 320);
	// Three.jsによって生成されたCanvasをページの末尾に追加
	document.body.appendChild(renderer.domElement);
	// カメラを初期化
	var camera = new THREE.PerspectiveCamera(40, 1.0, 1, 10000);
	// カメラ位置を設定
	camera.position.set(50, 40, 30);
	camera.lookAt( {x:0, y:0, z:0 } );
	// オブジェクトを初期化する
	var torus = new THREE.Mesh(
		// トーラスのサイズを設定
		new THREE.TorusGeometry(12, 3, 5, 10),
		// マテリアルをLambertに
		new THREE.MeshLambertMaterial()
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// トーラスを3Dシーンに追加
	scene.add(torus);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// 光源を追加
	var light = new THREE.DirectionalLight(0x0000ff, 1.25);
	// 光源の位置を設定
	light.position.set(200, 260, 100);
	scene.add(light);
	// 回転角度を入れる変数を用意
	var rotX = 0;
	var rotY = 0;
	// レンダリング。アニメーション毎に呼び出す
	function render(){
		// トーラスのXY軸を回転
		rotX = rotX + 0.02;
		rotY = rotY + 0.01;
		torus.rotation.x = rotX;
		torus.rotation.y = rotY;
		// 定期的に描画するようにする
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}, false);
