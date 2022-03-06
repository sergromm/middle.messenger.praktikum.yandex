import Block from "../../utils/templater/constructor/Block";
import addButton from "../AddButton/AddButton";

const chatListTemplate = `<ul class="chat-list">
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
{{addButton}}
</ul>`;

class ChatList extends Block {
  render() {
    return this.compile(chatListTemplate, { ...this.props });
  }
}

const chatList = new ChatList({ name: "Вася", addButton });

export default chatList;
