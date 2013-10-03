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
	camera.position.set(0, 0, 100);
	camera.lookAt( {x:0, y:0, z:0 } );
	// テキストを初期化する
	var text3D = new THREE.Mesh(
		// 文字データの設定
		new THREE.TextGeometry(
			// 描画する文字を設定
			"WebGL&JavaScript", {
			// サイズと高さを描画
			size: 15,
			height: 6
		}),
		// マテリアルの設定（スムースシェーディングを指定）
		new THREE.MeshPhongMaterial({ color: 0xffffff, shading: THREE.SmoothShading })
	);
	// テキストの回転角度と位置を設定
	text3D.rotation.y = Math.PI / 3;
	text3D.position.x = -30;
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
	// 霧（フォグ）を追加
	// scene.fog = new THREE.Fog(0xffffff, 50, 220);
	scene.fog = new THREE.FogExp2(0xffffff, 0.005);
	// 霧（フォグ）を物体に適用
	text3D.fog = true;
	// レンダリング
	renderer.render(scene, camera);
}, false);
