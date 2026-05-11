// загадываем случайное число
let number = Math.floor(Math.random() * 10) + 1;

// функция проверки
function checkGuess() {

    // получаем число из input
    let guess = Number(document.getElementById("guess").value);

    // место для текста результата
    let result = document.getElementById("result");

    // проверка на нормальный ввод
    if (!guess || guess < 1 || guess > 10) {
        result.innerText = "Ievadi skaitli no 1 līdz 10";
        return;
    }

    // если угадал
    if (guess === number) {
        result.innerText = "🎉 Pareizi! Jauns skaitlis ir izveidots";
        // создаём новое число
        number = Math.floor(Math.random() * 10) + 1;
    }
    // если число больше
    else if (guess > number) {
        result.innerText = "📉 Mazāk";
    }

    // если число меньше
    else {
        result.innerText = "📈 Vairāk";
    }
}