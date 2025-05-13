function operar() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado;

    for (let i = 1; i <= 5; i++) {
        switch (i) {
            case 1:
                resultado = valor1 + valor2;
                document.getElementById("suma").textContent = `El resultado de la suma es: ${resultado}`;
                break;
            case 2:
                resultado = valor1 - valor2;
                document.getElementById("resta").textContent = `El resultado de la suma es: ${resultado}`;
                break;
            case 3:
                resultado = valor1 * valor2;
                document.getElementById("multiplicacion").textContent = `El resultado de la multiplicacion es: ${resultado}`;
                break;
            case 4:
                if (valor2 !== 0) {
                    resultado = valor1 / valor2;
                    document.getElementById("division").textContent = `El resultado de la division es: ${resultado}`;
                } else {
                    document.getElementById("division").textContent = "division entre cero.";
                }
                break;
            case 5:
                resultado = valor1 % valor2;
                document.getElementById("residuo").textContent = `El resultado del residuo es: ${resultado}`;
                break;
        }
    }

}
