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
	// 線の座標を格納するオブジェクトを生成
	var lineGeo = new THREE.Geometry();
	lineGeo.vertices.push(
		// 三角形を構成する座標点を設定
		new THREE.Vector3(-20, 10, 0),
		new THREE.Vector3(10, 0, 0),
		new THREE.Vector3(0, 20, 10),
		new THREE.Vector3(-20, 10, 0)
	);
	// 線を生成。線の色やサイズはマテリアルで設定
	var line = new THREE.Line(lineGeo, 
		new THREE.LineBasicMaterial({
			color: 0x0000ff,
			linewidth: 8,
			opacity : 0.6
		})
	);
	// シーンを初期化する
	var scene = new THREE.Scene();
	// 立方体を3Dシーンに追加
	scene.add(line);
	// カメラを追加
	scene.add(camera);
	// レンダリング＆アニメーション
	function render(){
		// 線をY軸回転
		line.rotation.y = line.rotation.y + 0.1;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
}, false);
