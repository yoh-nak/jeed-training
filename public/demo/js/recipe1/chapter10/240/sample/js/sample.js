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
	camera.position.set(30, 25, 10);
	camera.lookAt( {x:0, y:0, z:0 } );
	// オブジェクトを初期化する
	var icosahedron = new THREE.Mesh(
		// 正二十面体のサイズを設定
		new THREE.IcosahedronGeometry(10),
		// マテリアルをLambertに
		new THREE.MeshLambertMaterial({color: 0x00ff00})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 正二十面体を3Dシーンに追加
	scene.add(icosahedron);
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
