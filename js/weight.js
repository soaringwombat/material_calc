// 素材の密度を定義
const densities = {
    1: 2.7, // アルミ
    2: 7.87, // 鉄
    3: 7.9 // ステンレス
};

// 部品の重さを計算する関数
function calculateWeight() {
    const material = document.getElementById("material").value;
    const shape = document.getElementById("shape").value;
    let volume, weight;

    // 形状に応じて体積を計算
    switch (shape) {
        case "1": // 直方体
            const length = parseFloat(document.getElementById("length").value);
            const width = parseFloat(document.getElementById("width").value);
            const height = parseFloat(document.getElementById("height").value);
            volume = length * width * height;
            break;
        case "2": // 円柱
            const radius = parseFloat(document.getElementById("radius").value);
            const heightC = parseFloat(document.getElementById("heightC").value);
            volume = Math.PI * radius * radius * heightC;
            break;
        case "3": // 円筒
            const radiusC1 = parseFloat(document.getElementById("radiusC1").value);
            const radiusC2 = parseFloat(document.getElementById("radiusC2").value);
            const heightT = parseFloat(document.getElementById("heightT").value);
            volume = Math.PI * heightT * 2 * (radiusC1 * radiusC1 - radiusC2 * radiusC2);
            break;
        default:
            alert("形状を選択してください");
            return;
    }

    // 重さを計算
    weight = volume * densities[material] * 0.001;

    // 結果を表示
    const weightBox = document.getElementById("weight_box");
    weightBox.style.display = "block";
    weightBox.querySelector("input").value = weight.toFixed(2);
}

// 計算ボタンがクリックされたら、部品の重さを計算する
document.querySelector("input[type=submit]").addEventListener("click", calculateWeight);

// 形状に応じてテキストボックスを表示する
document.getElementById("shape").addEventListener("change", function() {
    const shape = this.value;
    const boxes = document.querySelectorAll(".shape_box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
    if (shape === "1") {
        document.getElementById("box_1").style.display = "block";
    } else if (shape === "2") {
        document.getElementById("box_2").style.display = "block";
    } else if (shape === "3") {
        document.getElementById("box_3").style.display = "block";
    }
});