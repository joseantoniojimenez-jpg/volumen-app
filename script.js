function calcularVertical(r, h){
    return Math.PI * r * r * h;
}

function calcularHorizontal(r, h, L){
    if (h > 2 * r) return NaN;

    let theta = Math.acos((r - h) / r);
    let areaSegmento = r * r * theta - (r - h) * Math.sqrt(2 * r * h - h * h);

    return areaSegmento * L;
}

const radio = document.getElementById("radio");
const altura = document.getElementById("altura");
const largo = document.getElementById("largo");
const shape = document.getElementById("shape");
const btnCalc = document.getElementById("btnCalc");
const btnReset = document.getElementById("btnReset");
const resultCard = document.getElementById("resultCard");
const volumen = document.getElementById("volumen");

btnCalc.addEventListener("click", () => {

    let r = parseFloat(radio.value);
    let h = parseFloat(altura.value);
    let L = parseFloat(largo.value);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0){
        alert("Ingrese valores válidos.");
        return;
    }

    let V = 0;

    if (shape.value === "vertical"){
        V = calcularVertical(r, h);
    } else {
        if (isNaN(L) || L <= 0){
            alert("El largo es obligatorio para un tanque horizontal.");
            return;
        }
        V = calcularHorizontal(r, h, L);
    }

    if (isNaN(V)){
        alert("Altura inválida para un tanque horizontal.");
        return;
    }

    volumen.textContent = V.toFixed(3) + " m³";
    resultCard.hidden = false;
});

btnReset.addEventListener("click", () => {
    radio.value = "";
    altura.value = "";
    largo.value = "";
    resultCard.hidden = true;
});