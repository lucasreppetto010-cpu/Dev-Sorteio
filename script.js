function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-numbers").value);
    const max = Math.floor(document.querySelector(".input-number").value);

    if (min >= max) {
        alert("O número mínimo deve ser MENOR que o valor máximo.");
        return;
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(`O número sorteado é: ${result}`);

    }




}

