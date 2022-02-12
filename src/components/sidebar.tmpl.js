// TODO: вернуть альт для изображений, когда добавлю ссылки на аватары

export const sidebar = `
    <aside class="sidebar">
      <div class="controls">
        <button class="button menu-button"></button>
        <a href="/settings" class="button settings"></a>
      </div>
      <ul class="chat-list">
        <li class="chat-item chat-item_active">
          <img class="chat-avatar" src="#" alt=" "/>
          <div class="chat=content">
            <h2 class="chat-name">Вася</h2>
            <span class="last-message">Привет</span>
          </div>
        </li>
        <li class="chat-item">
          <img class="chat-avatar" src="#" alt=" "/>
          <div class="chat=content">
            <h2 class="chat-name">Вася</h2>
            <span class="last-message">Привет</span>
          </div>
        </li>
        <li class="chat-item">
          <img class="chat-avatar" src="#" alt=" "/>
          <div class="chat=content">
            <h2 class="chat-name">Вася</h2>
            <span class="last-message">Привет</span>
          </div>
        </li>
        <li class="chat-item">
          <img class="chat-avatar" src="#" alt=" "/>
          <div class="chat=content">
            <h2 class="chat-name">Вася</h2>
            <span class="last-message">Привет</span>
          </div>
        </li>
      </ul>
      <button class="add-chat">Добавить чат</button>
    </aside>`;