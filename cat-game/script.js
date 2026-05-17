// Количество рыб
let coins = 0;

// Количество кликов
let clicks = 0;

// Сила клика
let power = 1;

// Проверка авто кормушки
let autoFeed = false;

// Проверка ачивок
let achDone1 = false;
let achDone2 = false;
let achDone3 = false;
let achDone4 = false;
let achDone5 = false;
let achDone6 = false;

// Получение элементов
const coinsText = document.getElementById("coins");
const clicksText = document.getElementById("clicks");

const clickBtn = document.getElementById("clickBtn");
const cat = document.getElementById("cat");

const upgradeFish = document.getElementById("upgradeFish");
const upgradeAuto = document.getElementById("upgradeAuto");

const notification = document.getElementById("notification");

// Achievement элементы
const ach1 = document.getElementById("ach1");
const ach2 = document.getElementById("ach2");
const ach3 = document.getElementById("ach3");
const ach4 = document.getElementById("ach4");
const ach5 = document.getElementById("ach5");
const ach6 = document.getElementById("ach6");

// Задания
const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");

// Обновление текста
function updateScreen(){

    coinsText.textContent = coins;
    clicksText.textContent = clicks;

}

// Показ уведомления
function showNotification(text){

    notification.textContent = text;

    notification.classList.add("show");

    setTimeout(function(){

        notification.classList.remove("show");

    }, 2000);

}

// Проверка ачивок
function checkAchievements(){

    // Первый клик
    if(clicks >= 1 && achDone1 == false){

        achDone1 = true;

        ach1.textContent = "✅ Pirmais klikšķis";

        showNotification("🏆 Pirmais klikšķis");
    }

    // 25 кликов
    if(clicks >= 25 && achDone2 == false){

        achDone2 = true;

        ach2.textContent = "✅ 25 klikšķi";

        showNotification("🏆 25 klikšķi");
    }

    // 100 кликов
    if(clicks >= 100 && achDone3 == false){

        achDone3 = true;

        ach3.textContent = "✅ 100 klikšķi";

        showNotification("🏆 100 klikšķi");
    }

    // 500 рыб
    if(coins >= 500 && achDone4 == false){

        achDone4 = true;

        ach4.textContent = "✅ Savāc 500 zivis";

        showNotification("🏆 500 zivis");
    }

    // Мастер
    if(clicks >= 300 && coins >= 1000 && achDone6 == false){

        achDone6 = true;

        ach6.textContent = "✅ Kaķu meistars";

        showNotification("🏆 Kaķu meistars");
    }

}

// Клик функция
function clickGame(){

    coins = coins + power;

    clicks++;

    updateScreen();

    checkAchievements();

    // Задание 1
    if(clicks >= 50){

        task1.textContent = "✅ Uzdevums izpildīts";

    }

    // Задание 2
    if(coins >= 200){

        task2.textContent = "✅ Uzdevums izpildīts";

    }

}

// Кнопка
clickBtn.addEventListener("click", clickGame);

// Кот
cat.addEventListener("click", clickGame);

// Upgrade рыбы
upgradeFish.addEventListener("click", function(){

    if(coins >= 25){

        coins = coins - 25;

        power++;

        updateScreen();

        // Achievement upgrade
        if(achDone5 == false){

            achDone5 = true;

            ach5.textContent = "✅ Nopērc upgrade";

            showNotification("🏆 Pirmais upgrade");
        }

    }else{

        alert("Nepietiek zivju!");

    }

});

// Авто кормушка
upgradeAuto.addEventListener("click", function(){

    if(coins >= 100 && autoFeed == false){

        coins = coins - 100;

        autoFeed = true;

        updateScreen();

        setInterval(function(){

            coins++;

            updateScreen();

            checkAchievements();

        }, 1000);

    }else{

        alert("Nepietiek zivju vai jau nopirkts!");

    }

});

// Первый запуск
updateScreen();