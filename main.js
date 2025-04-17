const tg = Telegram.WebApp;
tg.ready()
tg.expand()


var welcome = document.getElementById('welcome')

welcome.textContent = `Добро пожаловать ${tg.initDataUnsafe.user.username}!`
tg.MainButton.text = "Главная кнопка"
tg.MainButton.show()