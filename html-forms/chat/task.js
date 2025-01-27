const chatWidget = document.querySelector('.chat-widget');
const robotMessages = [
    'Добрый день!',
    'До свидания!',
    'Я готов Вам помочь',
    'Задайте свой вопрос',
    'Я ответил на Ваш вопрос?'
];
chatWidget.addEventListener('click', (event) => {
    chatWidget.classList.add('chat-widget_active');
})

const chatWidgetMessages = document.getElementById('chat-widget__messages');

const chatWidgetInput = document.getElementById('chat-widget__input')

chatWidgetInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        chatWidgetMessages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">` + new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }) + `</div>
        <div class="message__text"> ` + chatWidgetInput.value + `</div>
      </div>
      `;
        chatWidgetInput.value = ``;

        chatWidgetMessages.innerHTML += `
      <div class="message">
        <div class="message__time">` + new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }) + `</div>
        <div class="message__text"> ` + robotMessages[Math.floor(Math.random() * robotMessages.length)] + `</div>
      </div>
      `;
    }
})