const chatFeed = `
<section class="chat-feed">
  <header class="chat-header">
    <a href="/500" class="chat-title">Вася</a>
    <button class="button contact-about"></button>
  </header> 
  <ul class="messages">
    {{list-of message from messages}}
  </ul>
  <input class="message-input" placeholder="Введите сообщение" type="text" name="message"/>
</section>`;

export default chatFeed;
