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
	camera.position.set(50, 30, 60);
	camera.lookAt( {x:20, y:0, z:0 } );
	// テキストを初期化する
	var text3D = new THREE.Mesh(
		// 文字データの設定
		new THREE.TextGeometry(
			// 描画する文字を設定
			"C&R", {
			// サイズと高さを描画
			size: 15,
			height: 6
		}),
		// マテリアルの設定（スムースシェーディングを指定）
		new THREE.MeshPhongMaterial({ color: 0xffffff, shading: THREE.SmoothShading })
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// テキストを3Dシーンに追加
	scene.add(text3D);
	// カメラを3Dシーンに追加
	scene.add(camera);
	// 光源を追加
	var light = new THREE.DirectionalLight(0x0000ff, 2);
	// 光源の位置を設定
	light.position.set(200, 260, 100);
	scene.add(light);
	// アニメーションする際に必要な角度を入れておく変数
	var rotX = 0;
	// レンダリング。アニメーション毎に呼び出す
	function render(){
		// 文字のY軸を回転
		rotX = rotX + 0.02;
		text3D.rotation.x = rotX;
		// 定期的に描画するようにする
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}, false);
